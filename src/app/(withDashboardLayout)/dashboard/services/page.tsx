/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Input from "@/components/form/Input";
import FileUpload from "@/components/form/FileUpload";
import MultipleInputs from "@/components/form/MultipleInputs";
import DataTable from "@/components/ui/DataTable";
import FormModal from "@/components/ui/FormModal";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { serviceSchema, type ServiceFormData } from "@/lib/schemas";
import { 
  useGetAllServicesQuery, 
  useCreateServiceMutation, 
  useUpdateServiceMutation, 
  useDeleteServiceMutation 
} from "@/redux/api/serviceApi/serviceApi";
import Image from "next/image";
import { handleApiError } from "@/utils/handleApiError";

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [itemToDelete, setItemToDelete] = useState<any>(null);
  
  // API hooks
  const { data: servicesResponse, isLoading, refetch } = useGetAllServicesQuery(undefined);
  const [createService, { isLoading: isCreating }] = useCreateServiceMutation();
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation();
  const [deleteService, { isLoading: isDeleting }] = useDeleteServiceMutation();

  const services = servicesResponse?.data || [];

  console.log("Services data:", { servicesResponse, services, isLoading });

  const form = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      image: [],
      features: [],
      metaTitle: "",
      metaDescription: "",
      metaTags: [],
      metaImageAlt: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  const resetForm = () => {
    form.reset({
      title: "",
      subtitle: "",
      image: [],
      features: [],
      metaTitle: "",
      metaDescription: "",
      metaTags: [],
      metaImageAlt: "",
    });
    // Clear all errors when resetting
    form.clearErrors();
  };

  const handleSubmit = async () => {
    try {
      // Trigger validation before submission
      const isValid = await form.trigger();
      if (!isValid) {
        toast.error("Please fix the validation errors before submitting.");
        return;
      }

      // Validate form data using Zod schema
      const data = form.getValues();
      const validatedData = serviceSchema.parse(data);
      
      // Create FormData with proper structure
      const formData = new FormData();
      
      // Add the JSON data as a string
      const jsonData = {
        title: validatedData.title,
        subtitle: validatedData.subtitle,
        features: validatedData.features,
        metaTitle: validatedData.metaTitle,
        metaDescription: validatedData.metaDescription,
        metaTags: validatedData.metaTags,
        metaImageAlt: validatedData.metaImageAlt,
      };
      formData.append("data", JSON.stringify(jsonData));
      
      // Add the image file if it exists (optional for editing, required for creation)
      if (validatedData.image && validatedData.image.length > 0) {
        formData.append("file", validatedData.image[0]);
      }

      console.log("Submitting service data:", { editingItem, jsonData });
      
      if (editingItem) {
        // On edit, image is optional
        const result = await updateService({ data: formData, id: editingItem._id }).unwrap();
        console.log("Service update result:", result);
        toast.success("Service updated successfully!");
      } else {
        // On create, image is required
        if (!validatedData.image || validatedData.image.length === 0) {
          toast.error("Image is required for new service.");
          return;
        }
        const result = await createService(formData).unwrap();
        console.log("Service creation result:", result);
        toast.success("Service created successfully!");
      }
      
      // Refetch the services list to ensure it's up to date
      setTimeout(async () => {
        const refetchResult = await refetch();
        console.log("Refetch result:", refetchResult);
      }, 500);
      
      handleCloseModal();
    } catch (error: any) {
      handleApiError(error, editingItem ? "Service update" : "Service creation");
    }
  };

  const handleAdd = () => {
    setEditingItem(null);
    resetForm();
    setIsModalOpen(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    form.reset({
      title: item.title || "",
      subtitle: item.subtitle || "",
      image: [],
      features: item.features || [],
      metaTitle: item.metaTitle || "",
      metaDescription: item.metaDescription || "",
      metaTags: item.metaTags || [],
      metaImageAlt: item.metaImageAlt || "",
    });
    setIsModalOpen(true);
  };

  const handleDelete = (item: any) => {
    setItemToDelete(item);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    
    try {
      await deleteService({ id: itemToDelete._id }).unwrap();
      toast.success("Service deleted successfully!");
      setIsConfirmModalOpen(false);
      setItemToDelete(null);
    } catch (error) {
      handleApiError(error, "Delete service");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    resetForm();
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setItemToDelete(null);
  };

  const columns = [
    { key: "image", label: "Image",
      render: (value: string) => <Image width={60} height={60} src={value} alt="value" className="rounded-lg size-12 object-cover"/>
     },
    { key: "title", label: "Title" },
    { key: "subtitle", label: "Subtitle" },
    { 
      key: "createdAt", 
      label: "Created",
      render: (value: string) => new Date(value).toLocaleDateString()
    },
  ];

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <DataTable
        data={services}
        columns={columns}
        title="Services"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchKey="title"
      />

      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingItem ? "Edit Service" : "Add Service"}
        onSubmit={handleSubmit}
        onCancel={handleCloseModal}
        isSubmitting={isCreating || isUpdating}
        submitText={editingItem ? "Update Service" : "Add Service"}
      >
        <div className="lg:col-span-2">
          <Input
            label="Service Title"
            {...form.register("title")}
            error={form.formState.errors.title?.message}
            description="Enter a descriptive title for your service"
          />
        </div>

        <div className="lg:col-span-2">
          <Input
            label="Service Subtitle"
            {...form.register("subtitle")}
            error={form.formState.errors.subtitle?.message}
            description="Enter a brief subtitle or tagline for your service"
          />
        </div>

        <div className="lg:col-span-2">
          <FileUpload
            label="Service Image"
            value={form.watch("image")}
            onChange={(files) => form.setValue("image", files)}
            error={form.formState.errors.image?.message}
            maxFiles={1}
          />
        </div>

        <div className="lg:col-span-2">
          <MultipleInputs
            label="Service Features"
            value={form.watch("features")}
            onChange={(features) => form.setValue("features", features)}
            error={form.formState.errors.features?.message}
            placeholder="Add a feature and press enter"
            maxTags={10}
            description="List the key features of this service"
          />
        </div>

        <div className="lg:col-span-2 border-t pt-4">
          <h4 className="text-sm font-semibold mb-3">SEO & Meta Information</h4>
        </div>

        <Input
          label="Meta Title"
          {...form.register("metaTitle")}
          error={form.formState.errors.metaTitle?.message}
          description="SEO title for search engines"
        />

        <Input
          label="Meta Description"
          {...form.register("metaDescription")}
          error={form.formState.errors.metaDescription?.message}
          description="SEO description for search engines"
        />

        <div className="lg:col-span-2">
          <MultipleInputs
            label="Meta Tags"
            value={form.watch("metaTags")}
            onChange={(tags) => form.setValue("metaTags", tags)}
            error={form.formState.errors.metaTags?.message}
            placeholder="Add meta tags and press enter"
            maxTags={15}
            description="Keywords for SEO optimization"
          />
        </div>

        <Input
          label="Meta Image Alt Text"
          {...form.register("metaImageAlt")}
          error={form.formState.errors.metaImageAlt?.message}
          description="Alt text for the service image"
        />

        {/* Validation Summary */}
        {Object.keys(form.formState.errors).length > 0 && (
          <div className="lg:col-span-2 border-t pt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-red-800 mb-2">Please fix the following errors:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                {Object.entries(form.formState.errors).map(([field, error]) => (
                  <li key={field} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span><strong className="capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}:</strong> {error?.message}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </FormModal>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleCloseConfirmModal}
        onConfirm={confirmDelete}
        title="Delete Service"
        message={`Are you sure you want to delete "${itemToDelete?.title}"? This action cannot be undone.`}
        confirmText="Delete Service"
        cancelText="Cancel"
        isLoading={isDeleting}
        type="danger"
      />
    </div>
  );
};

export default ServicesPage;
