'use client';
import { createSnippet } from '@/actions/snippets';
import { useActionState } from 'react';
import Link from 'next/link';

export default function SnippetCreatePage() {
  //formState = the object containing message from server, action instead of original server action.
  const [formState, action] = useActionState(createSnippet, { message: '' });

  return (
    //action refers to function run on server for handling form submit
    <form action={action}>
      {formState.message && <p className="text-red-500">{formState.message}</p>}
      <h2 className="text-2xl font-bold mb-4">Create New Snippet</h2>
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
