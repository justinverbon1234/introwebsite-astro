import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/data/journal',
    }),

    schema: z.object({
        title: z.string(),

        category: z.enum([
            'Article',
            'Project',
            'Thought',
        ]),

        date: z.coerce.date(),

        eyebrow: z.string(),

        description: z.string(),

        readTime: z.string().optional(),

        status: z.string().optional(),
    }),
});

export const collections = {
    journal,
};