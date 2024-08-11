import { defineCollection, reference, z } from 'astro:content';

const boiler = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const planifications = defineCollection({
	schema: z.object({
		ejes: z.array(reference('ejes-tematicos')),
		title: z.string(),
		authors: z.array(z.string()),
		target: z.enum(['primer ciclo', 'segundo ciclo']),
		resumen: z.string().max(300).optional(),
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

export const collections = { boiler, ejesTematicos, planifications };
