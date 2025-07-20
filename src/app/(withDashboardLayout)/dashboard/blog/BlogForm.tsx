import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import FileUpload from '@/components/form/FileUpload';
import MultipleInputs from '@/components/form/MultipleInputs';
import { IBlog } from '@/types/blog';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

// Base schema without image validation
const baseBlogSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters')
    .trim(),
  subtitle: z
    .string()
    .min(1, 'Subtitle is required')
    .min(10, 'Subtitle must be at least 10 characters')
    .max(200, 'Subtitle must be less than 200 characters')
    .trim(),
  author: z
    .string()
    .min(1, 'Author is required')
    .min(2, 'Author name must be at least 2 characters')
    .max(50, 'Author name must be less than 50 characters')
    .trim(),
  content: z
    .string()
    .min(1, 'Content is required')
    .min(50, 'Content must be at least 50 characters')
    .trim(),
  tags: z
    .array(z.string().min(1, 'Tag cannot be empty').max(20, 'Tag must be less than 20 characters'))
    .min(1, 'At least one tag is required')
    .max(10, 'Maximum 10 tags allowed')
    .optional(),
  metaTitle: z
    .string()
    .min(1, 'Meta title is required')
    .min(10, 'Meta title must be at least 10 characters')
    .max(60, 'Meta title must be less than 60 characters for SEO')
    .trim(),
  metaDescription: z
    .string()
    .min(1, 'Meta description is required')
    .min(20, 'Meta description must be at least 20 characters')
    .max(160, 'Meta description must be less than 160 characters for SEO')
    .trim(),
  metaTags: z
    .array(z.string().min(1, 'Meta tag cannot be empty').max(20, 'Meta tag must be less than 20 characters'))
    .max(10, 'Maximum 10 meta tags allowed')
    .optional(),
  metaImageAlt: z
    .string()
    .min(1, 'Meta image alt is required')
    .min(5, 'Meta image alt must be at least 5 characters')
    .max(125, 'Meta image alt must be less than 125 characters')
    .trim(),
});

// Function to create schema based on edit mode
const createBlogSchema = (isEdit: boolean) => {
  const imageSchema = isEdit 
    ? z.any().optional() // Optional for edit mode
    : z
        .any()
        .refine((file) => file && file.length > 0, 'Image is required')
        .refine(
          (file) => {
            if (!file || !file[0]) return false;
            const fileSize = file[0].size;
            const maxSize = 5 * 1024 * 1024; // 5MB
            return fileSize <= maxSize;
          },
          'Image size must be less than 5MB'
        )
        .refine(
          (file) => {
            if (!file || !file[0]) return false;
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
            return allowedTypes.includes(file[0].type);
          },
          'Only JPEG, PNG, and WebP images are allowed'
        );

  return baseBlogSchema.extend({
    image: imageSchema,
  });
};

type BlogFormData = z.infer<ReturnType<typeof createBlogSchema>>;

interface BlogFormProps {
  initialValues?: Partial<IBlog>;
  onSubmit: (values: FormData) => void;
  onCancel: () => void;
  loading?: boolean;
  isEdit?: boolean;
}

const BlogForm = ({ initialValues = {}, onSubmit, onCancel, loading, isEdit }: BlogFormProps) => {
  const blogSchema = createBlogSchema(isEdit || false);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: initialValues.title || '',
      subtitle: initialValues.subtitle || '',
      author: initialValues.author || '',
      content: initialValues.content || '',
      image: undefined,
      tags: initialValues.tags || [],
      metaTitle: initialValues.metaTitle || '',
      metaDescription: initialValues.metaDescription || '',
      metaTags: initialValues.metaTags || [],
      metaImageAlt: initialValues.metaImageAlt || '',
    },
  });

  // For edit mode, reset form when initialValues change
  useEffect(() => {
    reset({
      title: initialValues.title || '',
      subtitle: initialValues.subtitle || '',
      author: initialValues.author || '',
      content: initialValues.content || '',
      image: undefined,
      tags: initialValues.tags || [],
      metaTitle: initialValues.metaTitle || '',
      metaDescription: initialValues.metaDescription || '',
      metaTags: initialValues.metaTags || [],
      metaImageAlt: initialValues.metaImageAlt || '',
    });
  }, [initialValues, reset]);

  // Watchers
  const tags = watch('tags');
  const metaTags = watch('metaTags');
  const image = watch('image');
  const content = watch('content');

  // File upload handler
  const handleFileChange = (files: File[]) => {
    setValue('image', files);
  };

  // MDEditor handler
  const handleContentChange = (val: string | undefined) => {
    setValue('content', val || '');
  };

  // Tag handlers
  const handleTagsChange = (newTags: string[]) => {
    setValue('tags', newTags);
  };

  const handleMetaTagsChange = (newTags: string[]) => {
    setValue('metaTags', newTags);
  };

  // On submit, convert to FormData
  const onFormSubmit = (data: BlogFormData) => {
    const formData = new FormData();
    
    // Create JSON data object
    const jsonData = {
      title: data.title,
      subtitle: data.subtitle,
      author: data.author,
      content: data.content,
      tags: data.tags || [],
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      metaTags: data.metaTags || [],
      metaImageAlt: data.metaImageAlt,
    };
    
    // Append JSON data as string
    formData.append('data', JSON.stringify(jsonData));
    
    // Append file if exists
    if (data.image && data.image[0]) {
      formData.append('file', data.image[0]);
    }
    
    onSubmit(formData);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900">
          {isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h2>
        <p className="text-gray-600 mt-1">
          Fill in the details below to {isEdit ? 'update' : 'create'} your blog post
        </p>
      </div>

      <form className="p-6 space-y-8" onSubmit={handleSubmit(onFormSubmit)}>
        {/* Basic Information Section */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Title" 
                {...register('title')} 
                error={errors.title?.message} 
                  
                placeholder="Enter blog post title"
              />
              <Input 
                label="Subtitle" 
                {...register('subtitle')} 
                error={errors.subtitle?.message} 
                  
                placeholder="Enter blog post subtitle"
              />
              <Input 
                label="Author" 
                {...register('author')} 
                error={errors.author?.message} 
                  
                placeholder="Enter author name"
              />
              <div className="md:col-span-2">
                <FileUpload  
                  label="Featured Image" 
                  value={image} 
                  onChange={handleFileChange} 
                  error={errors.image?.message as string | undefined} 
                  maxFiles={1}
                  accept={{
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/png": [".png"],
                    "image/webp": [".webp"]
                  }}
                />
                <p className="text-sm text-gray-500 mt-1">
                  {isEdit 
                    ? "Optional: Upload a new image to replace the current one. Recommended size: 1200x630px. Max file size: 5MB. Supported formats: JPEG, PNG, WebP"
                    : "Required: Upload a featured image. Recommended size: 1200x630px. Max file size: 5MB. Supported formats: JPEG, PNG, WebP"
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Content</h3>
            <div>
              <label className="block font-medium text-gray-700 mb-2">Blog Content</label>
              <div data-color-mode="light" className="border border-gray-300 rounded-md">
                <MDEditor 
                  value={content} 
                  onChange={handleContentChange} 
                  height={400}
                  preview="edit"
                />
              </div>
              {errors.content && (
                <div className="text-red-500 text-sm mt-2">{errors.content.message}</div>
              )}
              <p className="text-sm text-gray-500 mt-2">
                Write your blog content using Markdown. Minimum 50 characters required.
              </p>
            </div>
          </div>

          {/* Tags Section */}
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tags & Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MultipleInputs
                label="Tags"
                value={tags || []}
                onChange={handleTagsChange}
                placeholder="Type and press enter to add tags"
                error={errors.tags?.message as string | undefined}
                maxTags={10}
                description="Add relevant tags for your blog post. Maximum 10 tags allowed."
              />
              <MultipleInputs
                label="Meta Tags"
                value={metaTags || []}
                onChange={handleMetaTagsChange}
                placeholder="Type and press enter to add meta tags"
                error={errors.metaTags?.message as string | undefined}
                maxTags={10}
                description="Add SEO meta tags. Maximum 10 tags allowed."
              />
            </div>
          </div>

          {/* SEO Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">SEO & Meta Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Meta Title" 
                {...register('metaTitle')} 
                error={errors.metaTitle?.message} 
                  
                placeholder="SEO optimized title (max 60 characters)"
              />
              <Input 
                label="Meta Image Alt Text" 
                {...register('metaImageAlt')} 
                error={errors.metaImageAlt?.message} 
                  
                placeholder="Descriptive alt text for the image"
              />
              <div className="md:col-span-2">
                <Input 
                  label="Meta Description" 
                  {...register('metaDescription')} 
                  error={errors.metaDescription?.message} 
                    
                  placeholder="SEO description (max 160 characters)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel} 
            disabled={loading}
            className="px-6 py-2"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            disabled={loading}
            className="px-6 py-2"
          >
            {loading ? 'Saving...' : isEdit ? 'Update Blog Post' : 'Create Blog Post'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm; 