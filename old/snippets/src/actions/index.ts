'use server';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';

export async function createSnippet(formState: { message: string }, formData: FormData) {
  //this needs to be a server action
  //directive used by nextjs to tell it it's a server action.
  //formData-object of type FormData (typescript)
  try {
    const title = formData.get('title');
    const code = formData.get('code');
    if (typeof title !== 'string' || title.length < 3) {
      return { message: 'Title must be longer.' };
    }
    if (typeof code !== 'string' || code.length < 10) {
      return { message: 'Code must be longer.' };
    }

    //don't throw errors, use form message instead
    //throw new Error('Failed to save to database');

    //create a new record in the database
    await db.snippet.create({
      data: {
        title,
        code
      }
    });
    //this is server side, log appears in terminal
  } catch (err: unknown) {
    if (err instanceof Error) return { message: err.message };
    return { message: 'Something went wrong' };
  }
  //redirect
  //forces cache reset on home page
  revalidatePath('/');
  //throws error NEXT_REDIRECT to communicate inside nextjs, not an error, just the way next internally communicates. Never put them inside try-catch
  redirect('/');
}
export async function editSnippet(id: number, code: string) {
  await db.snippet.update({ where: { id }, data: { code } });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  //forces cache reset on home page
  revalidatePath('/');
  redirect('/');
}
