import { defineCollection, reference, z } from 'astro:content';

const planifications = defineCollection({
	schema: ({ image }) =>
		z.object({
			ejes: z.array(reference('ejes-tematicos')),
			title: z.string(),
			authors: z.array(z.string()),
			target: z.enum(['primer ciclo', 'segundo ciclo']),
			resumen: z.string().max(300),
			cover: image(),
			coverAlt: z.string(),
		}),
});

const ejesTematicos = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			resumen: z.string().max(400),
			slug: z.string(),
			image: image(),
		}),
});

export const collections = { ejesTematicos, planifications };
