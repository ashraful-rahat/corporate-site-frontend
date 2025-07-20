"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/form/Input";
import FileUpload from "@/components/form/FileUpload";
import DataTable from "@/components/ui/DataTable";
import FormModal from "@/components/ui/FormModal";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { IClientFeedback } from "@/types/feedback";
import { useGetAllFeedbacksQuery, useCreateFeedbackMutation, useUpdateFeedbackMutation, useDeleteFeedbackMutation } from "@/redux/api/feedbackApi";
import toast from "react-hot-toast";
import Image from "next/image";
import Textarea from "@/components/form/Textarea";
import { handleApiError } from "@/utils/handleApiError";

const defaultValues: Partial<IClientFeedback> = {
  name: "",
  companyName: "",
  feedback: "",
  image: undefined,
  rating: 5,
  designation: "",
};

const TestimonialsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<IClientFeedback | null>(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<IClientFeedback | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewItem, setViewItem] = useState<IClientFeedback | null>(null);

  // API hooks
  const { data: feedbacksResponse, isLoading: isTableLoading, refetch } = useGetAllFeedbacksQuery();
  const [createFeedback, { isLoading: isCreating }] = useCreateFeedbackMutation();
  const [updateFeedback, { isLoading: isUpdating }] = useUpdateFeedbackMutation();
  const [deleteFeedback, { isLoading: isDeleting }] = useDeleteFeedbackMutation();

  const feedbacks = feedbacksResponse?.data || [];

  const form = useForm<Partial<IClientFeedback>>({
    // No zod schema for now
    defaultValues,
    mode: "onChange",
  });

  const resetForm = () => {
    form.reset(defaultValues);
    form.clearErrors();
  };

  const handleSubmit = async () => {
    try {
      const isValid = await form.trigger();
      if (!isValid) {
        toast.error("Please fix the validation errors before submitting.");
        return;
      }
      const data = form.getValues();
      let payload: any = { ...data };
      // If image is a FileList or File[], handle accordingly
      if (data.image && Array.isArray(data.image) && data.image.length > 0) {
        const formData = new FormData();
        formData.append("data", JSON.stringify({
          name: data.name,
          companyName: data.companyName,
          feedback: data.feedback,
          rating: data.rating,
          designation: data.designation,
        }));
        formData.append("file", data.image[0]);
        payload = formData;
      }
      if (editingItem && editingItem._id) {
        await updateFeedback({ id: editingItem._id, data: payload }).unwrap();
        toast.success("Feedback updated successfully!");
      } else {
        await createFeedback(payload).unwrap();
        toast.success("Feedback created successfully!");
      }
      setTimeout(async () => {
        await refetch();
      }, 500);
      handleCloseModal();
    } catch (error) {
      handleApiError(error, editingItem ? "Feedback update" : "Feedback creation");
    }
  };

  const handleAdd = () => {
    setEditingItem(null);
    resetForm();
    setIsModalOpen(true);
  };

  const handleEdit = (item: IClientFeedback) => {
    setEditingItem(item);
    form.reset({
      name: item.name,
      feedback: item.feedback,
      companyName: item.companyName,
      rating: item.rating,
      designation: item.designation,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (item: IClientFeedback) => {
    setItemToDelete(item);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete || !itemToDelete._id) return;
    try {
      await deleteFeedback({ id: itemToDelete._id }).unwrap();
      toast.success("Feedback deleted successfully!");
      setIsConfirmModalOpen(false);
      setItemToDelete(null);
      setTimeout(async () => {
        await refetch();
      }, 500);
    } catch (error) {
      handleApiError(error, "Delete feedback");
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

  const handleView = (item: IClientFeedback) => {
    setViewItem(item);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setViewItem(null);
  };

  const columns = [
    {
      key: "image",
      label: "Image",
      render: (value: string) => value ? <Image className="size-12 rounded-lg object-cover" width={60} height={60} src={value} alt={value} /> : null,
    },
    { key: "name", label: "Name" },
    { key: "designation", label: "Designation" },
    { key: "rating", label: "Rating" },
    {
      key: "createdAt",
      label: "Created",
      render: (value: Date) => value ? new Date(value).toLocaleDateString() : "-",
    },
  ];

  if (isTableLoading) {
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
        data={feedbacks}
        columns={columns}
        title="Client Feedbacks"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        searchKey="name"
      />

      {/* Add/Edit Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingItem ? "Edit Feedback" : "Add Feedback"}
        onSubmit={handleSubmit}
        onCancel={handleCloseModal}
        isSubmitting={isCreating || isUpdating}
        submitText={editingItem ? "Update" : "Create"}
      >
        <Input label="Name" {...form.register("name")} error={form.formState.errors.name?.message} />
        <Input label="Company" {...form.register("companyName")} error={form.formState.errors.companyName?.message} />
        <Input label="Designation" {...form.register("designation")} error={form.formState.errors.designation?.message} />
        <Input label="Rating" type="number" min={1} max={5} {...form.register("rating", { valueAsNumber: true })} error={form.formState.errors.rating?.message} />
       <div className="flex flex-col col-span-2 gap-4">
         <Controller
          control={form.control}
          name="image"
          render={({ field, fieldState }) => (
            <FileUpload
              label="Image"
              onChange={(files) => field.onChange(files)}
              value={Array.isArray(field.value) ? field.value : []}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={form.control}
          name="feedback"
          render={({ field, fieldState }) => (
            <Textarea
              label="Feedback"
              {...field}
              error={fieldState.error?.message}
              rows={4}
            />
          )}
        />
       </div>
      </FormModal>

      {/* Delete Confirm Modal */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleCloseConfirmModal}
        onConfirm={confirmDelete}
        title="Delete Feedback"
        message="Are you sure you want to delete this feedback? This action cannot be undone."
        confirmText="Delete"
        isLoading={isDeleting}
        type="danger"
      />

      {/* View Modal */}
      {viewItem && (
        <FormModal
          isOpen={isViewModalOpen}
          onClose={handleCloseViewModal}
          title="Feedback Details"
          onSubmit={handleCloseViewModal}
          onCancel={handleCloseViewModal}
          isSubmitting={false}
          submitText="Close"
        >
          <div className="col-span-2 flex flex-col items-center gap-4">
            {viewItem.image && <Image src={viewItem.image} width={80} height={80} alt={viewItem.name} className="rounded-lg" />}
            <div className="text-lg font-bold">{viewItem.name}</div>
            <div className="text-sm text-gray-500">{viewItem.designation}</div>
            <div className="text-yellow-500">Rating: {viewItem.rating}</div>
            <div className="text-gray-700 mt-2">{viewItem.feedback}</div>
            <div className="text-xs text-gray-400 mt-2">{viewItem.createdAt ? new Date(viewItem.createdAt).toLocaleString() : "-"}</div>
          </div>
        </FormModal>
      )}
    </div>
  );
};

export default TestimonialsPage;
