"use client"

import DataTable from '@/components/ui/DataTable';
import Modal from '@/components/ui/Modal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { useState } from 'react';
import BlogForm from './BlogForm';
import { IBlog } from '@/types/blog';
import {
  useGetAllBlogsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} from '@/redux/api/blogApi/blogApi';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { handleApiError } from "@/utils/handleApiError";

const DashboardBlogPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState<IBlog | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<IBlog | null>(null);

  const { data, refetch } = useGetAllBlogsQuery();
  const [createBlog, { isLoading: creating }] = useCreateBlogMutation();
  const [updateBlog, { isLoading: updating }] = useUpdateBlogMutation();
  const [deleteBlog, { isLoading: isDeleting }] = useDeleteBlogMutation();

  const handleAdd = () => {
    setEditBlog(null);
    setIsEdit(false);
    setModalOpen(true);
  };

  const handleEdit = (blog: IBlog) => {
    setEditBlog(blog);
    setIsEdit(true);
    setModalOpen(true);
  };

  const handleDelete = (blog: IBlog) => {
    setItemToDelete(blog);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await deleteBlog({ id: (itemToDelete as any)._id }).unwrap();
      toast.success('Blog deleted successfully!');
      setIsConfirmModalOpen(false);
      setItemToDelete(null);
      setTimeout(async () => {
        await refetch();
      }, 500);
    } catch (error) {
      handleApiError(error, "Delete blog");
    }
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setItemToDelete(null);
  };

  const handleFormDataSubmit = async (formData: FormData) => {
    try {
      if (isEdit && editBlog) {
        await updateBlog({ id: (editBlog as any)._id, data: formData }).unwrap();
        toast.success('Blog updated successfully!');
      } else {
        await createBlog(formData).unwrap();
        toast.success('Blog created successfully!');
      }
      setModalOpen(false);
      setEditBlog(null);
      setTimeout(async () => {
        await refetch();
      }, 500);
    } catch (error: any) {
      handleApiError(error, isEdit ? "Blog update" : "Blog creation");
    }
  };

  const columns = [
    {key: 'image', label: "Image", render: (value: string) => <Image alt={value} height={80} width={60} src={value} className='rounded-lg object-cover'/>},
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'createdAt', label: 'Created At' },
  ];

  const blogs: IBlog[] = data?.data || [];

  return (
    <div>
      <DataTable
        columns={columns}
        data={blogs}
        title="Blogs"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchKey="title"
      />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={isEdit ? 'Edit Blog' : 'Add Blog'}>
        <BlogForm
          initialValues={editBlog || {}}
          onSubmit={handleFormDataSubmit}
          onCancel={() => setModalOpen(false)}
          loading={creating || updating}
          isEdit={isEdit}
        />
      </Modal>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleCloseConfirmModal}
        onConfirm={confirmDelete}
        title="Delete Blog"
        message={`Are you sure you want to delete "${itemToDelete?.title}"? This action cannot be undone.`}
        confirmText="Delete Blog"
        cancelText="Cancel"
        isLoading={isDeleting}
        type="danger"
      />
    </div>
  );
};

export default DashboardBlogPage; 