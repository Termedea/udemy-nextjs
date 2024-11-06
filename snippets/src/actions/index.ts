'use server';
import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function createSnippet(actionState: { message: string }, formData: FormData) {
  //this needs to be a server action
  //directive used by nextjs to tell it it's a server action.
  //formData-object of type FormData (typescript)
  const title = formData.get('title');
  const code = formData.get('code');
  if (typeof title !== 'string' || title.length < 3) {
    return { message: 'Title must be longer.' };
  }
  if (typeof code !== 'string' || code.length < 10) {
    return { message: 'Code must be longer.' };
  }
  //create a new record in the database
  /*   const snippet = await db.snippet.create({
    data: {
      title,
      code
    }
  }); 
  //this is server side, log appears in terminal
  console.log(snippet);*/

  //redirect
  redirect('/');
}
export async function editSnippet(id: number, code: string) {
  await db.snippet.update({ where: { id }, data: { code } });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  redirect('/');
}
