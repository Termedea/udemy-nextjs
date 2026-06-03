'use server';

import { z } from 'zod';
const createTopicSchema = z.object({
  title: z
    .string()
    .min(3)
    .regex(
      /^[a-z-]+$/,
      'Title must be lowercase and can only contain letters and hyphens'
    ),
  description: z.string().min(10)
});

export interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description')
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }
  return { errors: {} };

  //revalidate home
}
