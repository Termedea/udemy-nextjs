'use client';
import { useActionState } from 'react';

import * as actions from '@/actions';

/* Pages are by default server components (use client for client components)
 * can use async/await
 * can't use hooks
 * can't use event handlers
 *
 * client component can't show server components as children. rendered once on the server.
 */

/* Wraps action with additional functionality and a state that can be sent to and from server from client component.  */

function SnippetCreatePage() {
  const [formState, action] = useActionState(actions.createSnippet, { message: '' });
  return (
    <form action={action}>
      <h3 className="font-bold text-xl my-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label
            htmlFor="title"
            className="w-12">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
            type="text"
          />
        </div>

        <div className="flex gap-4">
          <label
            htmlFor="PrismaClient"
            className="w-12">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full font-mono"
            name="code"
            id="code"></textarea>
        </div>
        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border-2 border-red-400 rounded">{formState.message}</div>
        ) : (
          ''
        )}
        <button
          type="submit"
          className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage;
