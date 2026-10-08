import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Carlin Nordstrom'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string().optional(),
    organization: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    order: z.number().default(0),
  }),
});

const keynotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audience: z.string().optional(),
    duration: z.string().optional(),
    outcomes: z.array(z.string()).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

const workshops = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audience: z.string().optional(),
    duration: z.string().optional(),
    format: z.enum(['in-person', 'virtual', 'hybrid']).default('in-person'),
    outcomes: z.array(z.string()).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, testimonials, keynotes, workshops };
