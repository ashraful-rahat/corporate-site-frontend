"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Form from "./Form";
import Input from "./Input";
import Select from "./Select";

// Example schema for a service form
const serviceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  price: z.string().min(1, "Price is required"),
});

type ServiceFormData = z.infer<typeof serviceSchema>;

const DashboardForm = () => {
  const form = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: "",
    },
  });

  const onSubmit = async (data: ServiceFormData) => {
    try {
      // Handle form submission
      console.log(data);
      // Add your API call here
    } catch (error) {
      console.error(error);
    }
  };

  const categoryOptions = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "ui-design", label: "UI Design" },
    { value: "consulting", label: "Consulting" },
  ];

  return (
    <Form form={form} onSubmit={onSubmit} className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Service</h2>
      
      <Input
        label="Service Title"
        {...form.register("title")}
        error={form.formState.errors.title?.message}
      />

      <Input
        label="Description"
        {...form.register("description")}
        error={form.formState.errors.description?.message}
      />

      <Select
        label="Category"
        options={categoryOptions}
        value={form.watch("category")}
        onChange={(value) => form.setValue("category", value)}
        error={form.formState.errors.category?.message}
      />

      <Input
        label="Price"
        type="number"
        {...form.register("price")}
        error={form.formState.errors.price?.message}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Submitting..." : "Add Service"}
      </button>
    </Form>
  );
};

export default DashboardForm; 