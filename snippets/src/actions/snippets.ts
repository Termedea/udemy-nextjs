'use server';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({ where: { id }, data: { code } });

  //added static params for the dynamic routes, so added revalidatepath here to control that caching too.
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });

  revalidatePath(`/`);
  redirect(`/`);
}

//object formData is as common js
export async function createSnippet(formState: { message: string }, formData: FormData) {
  try {
    //this needs to be a server action - now whole file is "use server", not needed here
    //'use server';
    //Check the user's input and make they're it's valid

    //Default type is FormDataEntryValue (string or file).
    const title = formData.get('title'); //as string; just assume that it's string
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
      return { message: 'Title must be at least 3 characters long.' };
    }
    if (typeof code !== 'string' || code.length < 10) {
      return { message: 'Code must be at least 10 characters long.' };
    }
    //Create a new record in the database
    await db.snippet.create({ data: { title, code } });

    //throw new Error('This is an error');
  } catch (error: unknown) {
    console.error('Error creating snippet:', error);
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'An unknown error occurred while creating the snippet. Please try again.' };
    }
  }
  revalidatePath(`/`);
  //Redirect user back to root
  redirect('/');
}
