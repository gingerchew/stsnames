import { z, defineCollection } from 'astro:content';

const names = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        users: z.array(z.string())
    })
});

export const collections = {
    names,
}