"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import DataTable from '@/components/ui/DataTable';
import FormModal from '@/components/ui/FormModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import Input from '@/components/form/Input';
import Textarea from '@/components/form/Textarea';
import FileUpload from '@/components/form/FileUpload';
import MultipleInputs from '@/components/form/MultipleInputs';
import Select from '@/components/form/Select';
import { productSchema, ProductFormData } from '@/lib/schemas';
import { IProduct } from "@/types/product";
import { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } from "@/redux/api/productApi";
import Image from "next/image";


const DashboardProductsPage = () => {
  const { data: productsData = [], refetch } = useGetProductsQuery();
  const [createProduct, { isLoading: creating }] = useCreateProductMutation();
  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();
  const [deleteProduct, { isLoading: deleting }] = useDeleteProductMutation();

  const products: IProduct[] = (productsData && 'data' in productsData && Array.isArray(productsData.data))
    ? productsData.data
    : [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<IProduct | null>(null);
  const [itemToDelete, setItemToDelete] = useState<IProduct | null>(null);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      model: "",
      isFeatured: false,
      image: [],
      brand: "",
      coreBrand: "",
      category: "",
      features: [],
      description: "",
      metaTitle: "",
      metaDescription: "",
      metaImageAlt: "",
      metaTags: [],
    },
    mode: "onChange",
  });

  const resetForm = () => {
    form.reset({
      title: "",
      model: "",
      image: [],
      brand: "",
      isFeatured: false,
      coreBrand: "",
      category: "",
      features: [],
      description: "",
      metaTitle: "",
      metaDescription: "",
      metaImageAlt: "",
      metaTags: [],
    });
    form.clearErrors();
  };

  const handleAdd = () => {
    setEditingItem(null);
    resetForm();
    setIsModalOpen(true);
  };

  const handleEdit = (item: IProduct) => {
    setEditingItem(item);
    form.reset({
      title: item.title || "",
      model: item.model || "",
      image: [],
      brand: item.brand || "",
      coreBrand: item.coreBrand || "",
      category: item.category || "",
      features: item.features || [],
      description: item.description || "",
      metaTitle: item.metaTitle || "",
      metaDescription: item.metaDescription || "",
      metaImageAlt: item.metaImageAlt || "",
      metaTags: item.metaTags || [],
    });
    setIsModalOpen(true);
  };

  const handleDelete = (item: IProduct) => {
    setItemToDelete(item);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await deleteProduct({ id: (itemToDelete as unknown as { _id: string })._id }).unwrap();
      toast.success("Product deleted successfully!");
      setIsConfirmModalOpen(false);
      setItemToDelete(null);
      setTimeout(async () => {
        await refetch();
      }, 500);
    } catch {
      toast.error("Failed to delete product.");
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

  const handleSubmit = async () => {
    try {
      const isValid = await form.trigger();
      if (!isValid) {
        toast.error("Please fix the validation errors before submitting.");
        return;
      }
      const data = form.getValues();
      const validatedData = productSchema.parse(data);
      const formData = new FormData();
      const jsonData = {
        title: validatedData.title,
        model: validatedData.model,
        brand: validatedData.brand,
        coreBrand: validatedData.coreBrand,
        category: validatedData.category,
        features: validatedData.features,
        description: validatedData.description,
        metaTitle: validatedData.metaTitle,
        metaDescription: validatedData.metaDescription,
        metaImageAlt: validatedData.metaImageAlt,
        metaTags: validatedData.metaTags,
        isFeatured: validatedData.isFeatured || false,
      };
      formData.append("data", JSON.stringify(jsonData));
      if (validatedData.image && validatedData.image.length > 0) {
        formData.append("file", validatedData.image[0]);
      }
      if (editingItem) {
        await updateProduct({ id: (editingItem as unknown as { _id: string })._id, body: formData }).unwrap();
        toast.success("Product updated successfully!");
      } else {
        if (!validatedData.image || validatedData.image.length === 0) {
          toast.error("Image is required for new product.");
          return;
        }
        await createProduct(formData).unwrap();
        toast.success("Product created successfully!");
      }
      setTimeout(async () => {
        await refetch();
      }, 500);
      handleCloseModal();
    } catch {
      toast.error("Failed to submit product. Please check your input.");
    }
  };

  const columns = [
    { key: 'image', label: 'Image', render: (item: string) => <Image src={item} alt="product_image" height={200} width={200} className="size-14 rounded-full object-cover"/> },
    { key: 'title', label: 'Title' },
    { key: 'brand', label: 'Brand' },
    { key: 'category', label: 'Category' },
    { key: 'description', label: 'Description' },
  ];

  const categoryOptions = [
    { value: "Routers", label: "Routers" },
    { value: "Switch", label: "Switch" },
    { value: "Wi-Fi AP", label: "Wi-Fi AP" },
    { value: "Radio Device", label: "Radio Device" },
    { value: "Accessories", label: "Accessories" },
    { value: "POE Injector", label: "POE Injector" },
    { value: "SFP Module", label: "SFP Module" },
    { value: "LAN Accessories", label: "LAN Accessories" },
    { value: "Network Rack", label: "Network Rack" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <DataTable
        columns={columns}
        data={products}
        title="Products"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchKey="title"
      />
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingItem ? 'Edit Product' : 'Add Product'}
        onSubmit={handleSubmit}
        onCancel={handleCloseModal}
        isSubmitting={creating || updating}
        submitText={editingItem ? 'Update Product' : 'Create Product'}
      >
        <div className="lg:col-span-2">
          <Input label="Title" {...form.register('title')} error={form.formState.errors.title?.message} />
        </div>
        <div className="lg:col-span-2">
          <FileUpload label="Product Image" value={form.watch('image')} onChange={files => form.setValue('image', files)} error={form.formState.errors.image?.message} maxFiles={1} />
          {/* Image name preview */}
          {(() => {
            const images = form.watch('image');
            if (Array.isArray(images) && images.length > 0 && images[0] && typeof images[0].name === 'string') {
              return (
                <div className="mt-2 text-sm text-gray-600">
                  Selected file: <span className="font-medium">{images[0].name}</span>
                </div>
              );
            }
            return null;
          })()}
        </div>
        <div className="lg:col-span-2">
          <Input label="Brand" {...form.register('brand')} error={form.formState.errors.brand?.message} />
        </div>
        <div className="lg:col-span-2">
          <Input label="Core Brand" {...form.register('coreBrand')} error={form.formState.errors.coreBrand?.message} />
        </div>
        <div className="lg:col-span-2">
          <Select
            label="Category"
            options={categoryOptions}
            value={form.watch('category')}
            onChange={val => form.setValue('category', val, { shouldValidate: true })}
            error={form.formState.errors.category?.message}
            placeholder="Select a category"
          />
        </div>
        <div className="lg:col-span-2">
          <Input label="Model" {...form.register('model')} error={form.formState.errors.model?.message} />
        </div>
        <div className="lg:col-span-2">
          <MultipleInputs label="Features" value={form.watch('features') || []} onChange={features => form.setValue('features', features)} error={form.formState.errors.features?.message} placeholder="Add a feature and press enter" maxTags={10} description="List the key features of this product" />
        </div>
        <div className="lg:col-span-2">
          <Textarea label="Description" {...form.register('description')} error={form.formState.errors.description?.message} />
        </div>
        <div className="lg:col-span-2">
          <Select
            label="Featured Product?"
            options={[
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ]}
            value={form.watch('isFeatured') ? "true" : "false"}
            onChange={val => form.setValue('isFeatured', val === "true", { shouldValidate: true })}
            error={form.formState.errors.isFeatured?.message}
            placeholder="Select if featured"
            description="Mark as featured to highlight this product."
          />
        </div>
        <div className="lg:col-span-2 border-t pt-4">
          <h4 className="text-sm font-semibold mb-3">SEO & Meta Information</h4>
        </div>
        <div className="lg:col-span-2">
          <Input label="Meta Title" {...form.register('metaTitle')} error={form.formState.errors.metaTitle?.message} />
        </div>
        <div className="lg:col-span-2">
          <Textarea label="Meta Description" {...form.register('metaDescription')} error={form.formState.errors.metaDescription?.message} />
        </div>
        <div className="lg:col-span-2">
          <Input label="Meta Image Alt" {...form.register('metaImageAlt')} error={form.formState.errors.metaImageAlt?.message} />
        </div>
        <div className="lg:col-span-2">
          <MultipleInputs label="Meta Tags" value={form.watch('metaTags') || []} onChange={tags => form.setValue('metaTags', tags)} error={form.formState.errors.metaTags?.message} placeholder="Add meta tags and press enter" maxTags={15} description="Keywords for SEO optimization" />
        </div>
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
        title="Delete Product"
        message={`Are you sure you want to delete "${itemToDelete?.title}"? This action cannot be undone.`}
        confirmText="Delete Product"
        cancelText="Cancel"
        isLoading={deleting}
        type="danger"
      />
    </div>
  );
};

export default DashboardProductsPage; 