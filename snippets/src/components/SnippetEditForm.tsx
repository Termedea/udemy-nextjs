'use client';
import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import Link from 'next/link';
import { useState } from 'react';
import * as actions from '@/actions/snippets';

//prisma already defines interfaces for models.
interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = '') {
    setCode(value);
  }

  //binds pre defined values to the function, so when it's called, it will call editSnippet with those values. "pre loaded" with required values.
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        options={{ minimap: { enabled: false } }}
        theme="vs-dark"
        height="200px"
        language="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />
      <div className="mt-4 flex justify-end gap-2">
        <form action={editSnippetAction}>
          <button type="submit" className="rounded p-2 bg-blue-500 hover:bg-blue-700">
            Save
          </button>
        </form>
        <Link href={`/snippets/${snippet.id}`} className="rounded p-2 bg-gray-700 hover:bg-gray-600">
          Cancel
        </Link>
      </div>
    </div>
  );
}
