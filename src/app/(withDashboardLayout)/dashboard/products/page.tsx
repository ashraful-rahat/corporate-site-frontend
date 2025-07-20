"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "@/types/product";
import { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } from "@/redux/api/productApi";
import DataTable from '@/components/ui/DataTable';
import FormModal from '@/components/ui/FormModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import Input from '@/components/form/Input';
import Textarea from '@/components/form/Textarea';
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import FileUpload from '@/components/form/FileUpload';
import MultipleInputs from '@/components/form/MultipleInputs';
import { productSchema, ProductFormData } from '@/lib/schemas';

const ProductForm = ({
  initialValues,
  onSubmit,
  onCancel,
  loading,
  isEdit,
}: {
  initialValues: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
  loading: boolean;
  isEdit: boolean;
}) => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: initialValues.title || "",
      mode: initialValues.mode || "",
      image: [],
      brand: initialValues.brand || "",
      coreBrand: initialValues.coreBrand || "",
      category: initialValues.category || "",
      features: initialValues.features || [],
      description: initialValues.description || "",
      metaTitle: initialValues.metaTitle || "",
      metaDescription: initialValues.metaDescription || "",
      metaImageAlt: initialValues.metaImageAlt || "",
      metaTags: initialValues.metaTags || [],
    },
    mode: "onChange",
  });

  return (
    <>
      <Input label="Title" {...form.register('title')} error={form.formState.errors.title?.message} />
      <Input label="Mode" {...form.register('mode')} error={form.formState.errors.mode?.message} />
      <FileUpload label="Product Image" value={form.watch('image')} onChange={files => form.setValue('image', files)} error={form.formState.errors.image?.message} maxFiles={1} />
      <Input label="Brand" {...form.register('brand')} error={form.formState.errors.brand?.message} />
      <Input label="Core Brand" {...form.register('coreBrand')} error={form.formState.errors.coreBrand?.message} />
      <Input label="Category" {...form.register('category')} error={form.formState.errors.category?.message} />
      <MultipleInputs label="Features" value={form.watch('features') || []} onChange={features => form.setValue('features', features)} error={form.formState.errors.features?.message} placeholder="Add a feature and press enter" maxTags={10} description="List the key features of this product" />
      <Textarea label="Description" {...form.register('description')} error={form.formState.errors.description?.message} />
      <Input label="Meta Title" {...form.register('metaTitle')} error={form.formState.errors.metaTitle?.message} />
      <Textarea label="Meta Description" {...form.register('metaDescription')} error={form.formState.errors.metaDescription?.message} />
      <Input label="Meta Image Alt" {...form.register('metaImageAlt')} error={form.formState.errors.metaImageAlt?.message} />
      <MultipleInputs label="Meta Tags" value={form.watch('metaTags') || []} onChange={tags => form.setValue('metaTags', tags)} error={form.formState.errors.metaTags?.message} placeholder="Add meta tags and press enter" maxTags={15} description="Keywords for SEO optimization" />
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
      <div className="col-span-1 md:col-span-2 flex items-center gap-4 mt-2">
        <button type="button" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors" onClick={form.handleSubmit(onSubmit)} disabled={loading}>
          {loading ? (isEdit ? 'Updating...' : 'Creating...') : (isEdit ? 'Update Product' : 'Create Product')}
        </button>
        <button type="button" className="text-gray-600 px-4 py-2 rounded hover:bg-gray-100" onClick={onCancel} disabled={loading}>Cancel</button>
      </div>
    </>
  );
};

const DashboardProductsPage = () => {
  const { data: productsData = [], refetch } = useGetProductsQuery();
  // Accept FormData for create/update
  const [createProduct, { isLoading: creating }] = useCreateProductMutation();
  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();
  const [deleteProduct, { isLoading: deleting }] = useDeleteProductMutation();

  const products: IProduct[] = (productsData && 'data' in productsData && Array.isArray(productsData.data))
    ? productsData.data
    : [];

  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<IProduct | null>(null);

  const handleAdd = () => {
    setEditProduct(null);
    setIsEdit(false);
    setModalOpen(true);
  };

  const handleEdit = (product: IProduct) => {
    setEditProduct(product);
    setIsEdit(true);
    setModalOpen(true);
  };

  const handleDelete = (product: IProduct) => {
    setItemToDelete(product);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await deleteProduct({ id: (itemToDelete as unknown as { _id: string })._id }).unwrap();
      setIsConfirmModalOpen(false);
      setItemToDelete(null);
      setTimeout(async () => {
        await refetch();
      }, 500);
    } catch {
      toast.error("Failed to delete product.");
    }
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setItemToDelete(null);
  };

  const handleFormDataSubmit = async (data: ProductFormData) => {
    try {
      // Build FormData for API
      const formData = new FormData();
      const jsonData = {
        title: data.title,
        mode: data.mode,
        brand: data.brand,
        coreBrand: data.coreBrand,
        category: data.category,
        features: data.features,
        description: data.description,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaImageAlt: data.metaImageAlt,
        metaTags: data.metaTags,
      };
      formData.append("data", JSON.stringify(jsonData));
      if (data.image && data.image.length > 0) {
        formData.append("file", data.image[0]);
      }
      if (isEdit && editProduct) {
        await updateProduct({ id: (editProduct as unknown as { _id: string })._id, body: formData }).unwrap();
        toast.success("Product updated successfully!");
      } else {
        await createProduct(formData).unwrap();
        toast.success("Product created successfully!");
      }
      setModalOpen(false);
      setEditProduct(null);
      setTimeout(async () => {
        await refetch();
      }, 500);
    } catch {
      toast.error("Failed to submit product. Please check your input.");
    }
  };

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'brand', label: 'Brand' },
    { key: 'category', label: 'Category' },
    { key: 'mode', label: 'Mode' },
    { key: 'description', label: 'Description' },
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
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={isEdit ? 'Edit Product' : 'Add Product'}
        onSubmit={() => {}}
        onCancel={() => setModalOpen(false)}
        isSubmitting={creating || updating}
        submitText={isEdit ? 'Update Product' : 'Create Product'}
      >
        <ProductForm
          initialValues={editProduct ? {
            ...editProduct,
            image: [], // always start with empty image array for edit
            features: editProduct.features || [],
            metaTags: editProduct.metaTags || [],
          } : {
            title: "",
            mode: "",
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
          }}
          onSubmit={handleFormDataSubmit}
          onCancel={() => setModalOpen(false)}
          loading={creating || updating}
          isEdit={isEdit}
        />
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