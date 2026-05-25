import { db } from '@/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function SnippetCreatePage() {
  //object formData is as common js
  async function createSnippet(formData: FormData) {
    //this needs to be a server action
    'use server';
    //Check the user's input and make they're it's valid

    //Default type is FormDataEntryValue (string or file).
    const title = formData.get('title') as string; //just assume that it's string
    const code = formData.get('code') as string;

    //Create a new record in the database
    const snippet = await db.snippet.create({ data: { title, code } });
    console.log(snippet);
    //Redirect user back to root
    redirect('/');
  }
  return (
    //action refers to function run on server for handling form submit
    <form action={createSnippet}>
      <h3 className="font-bold my-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input type="text" name="title" className="border rounded p-2 w-full" />
        </div>
        <div className="flex gap-4 items-center">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea name="code" className="border rounded p-2 w-full"></textarea>
        </div>
        <div className="flex justify-end gap-2">
          <button type="submit" className="rounded p-2 bg-blue-500 hover:bg-blue-700">
            Create
          </button>
          <Link href="/" className="rounded p-2 bg-gray-700 hover:bg-gray-600">
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
