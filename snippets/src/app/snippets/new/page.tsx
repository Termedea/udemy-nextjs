import { redirect } from 'next/navigation';
import { db } from '@/db';
/* Pages are by default server components (use client for client components)
 * can use async/await
 * can't use hooks
 * can't use event handlers
 *
 * client component can't show server components as children. rendered once on the server.
 */
function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    //this needs to be a server action
    //directive used by nextjs to tell it it's a server action.
    'use server';
    //formData-object of type FormData (typescript)
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    //create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code
      }
    });
    //this is server side, log appears in terminal
    console.log(snippet);
    //redirect
    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold text-xl my-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input name="title" id="title" className="border rounded p-2 w-full" type="text" />
        </div>

        <div className="flex gap-4">
          <label htmlFor="PrismaClient" className="w-12">
            Code
          </label>
          <textarea className="border rounded p-2 w-full font-mono" name="code" id="code"></textarea>
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Send
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage;
