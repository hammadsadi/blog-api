import { z } from 'zod';

// Create Blog Validation Schemas
const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Please Provide Your Blog Title' }),
    content: z.string({ required_error: 'Please Provide Your Blog Content' }),
  }),
});

// Update Blog Validation Schemas
const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Please Provide Your Blog Title' })
      .optional(),
    content: z
      .string({ required_error: 'Please Provide Your Blog Content' })
      .optional(),
  }),
});

export const BlogValidationSchemas = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
