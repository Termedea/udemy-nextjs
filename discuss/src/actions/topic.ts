'use server';
import * as auth from '@/helpers/auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import paths from '@/helpers/paths';
import { db } from '@/db';
import type { Topic } from '@prisma/client';
import { z } from 'zod';
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)

    .regex(/^[A-Za-z-]+$/, 'Name must contain only letters and hyphens'),
  description: z.string().min(10)
});

export interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[]; // for form-level errors not related to specific fields
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description')
  });

  console.log('Validation result:', result);
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth.auth();
  if (!session || !session.user) {
    return {
      errors: { _form: ['You must be logged in to create a topic'] }
    };
  }
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description
      }
    });
  } catch (e: any) {
    return { errors: { _form: [e?.message || 'Failed to create topic'] } };
  }
  //revalidate home
  revalidatePath(paths.home());
  //redirect works by throwing an error, can't be in try
  redirect(paths.topicShow(topic.slug));
}
