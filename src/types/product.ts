import { z } from 'zod';

export const productsValidation = {
  createProduct: z.object({
    body: z.object({
      title: z.string({ error: 'Title is required' }),
      mode: z.string({ error: 'Mode is required' }),
      image: z.string({ error: 'Image is required' }).optional(),
      brand: z.string({ error: 'Brand is required' }),
      category: z.string({ error: 'Category is required' }),
      features: z.array(z.string()).optional(),
      description: z.string({ error: 'Description is required' }),
      metaTitle: z.string({ error: 'Meta title is required' }),
      metaDescription: z.string({ error: 'Meta description is required' }),
      metaImageAlt: z.string({ error: 'Meta image alt tag is required' }),
      metaTags: z.array(z.string(), { error: 'Meta tags are required' }).optional(),
    })
  }),
  updateProduct: z.object({
    body: z.object({
      title: z.string().optional(),
      mode: z.string().optional(),
      image: z.string().optional(),
      brand: z.string().optional(),
      category: z.string().optional(),
      features: z.array(z.string()).optional(),
      description: z.string().optional(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      metaImageAlt: z.string().optional(),
      metaTags: z.array(z.string()).optional(),
    })
  })
};

export type IProduct = z.infer<typeof productsValidation.createProduct.shape.body>; 