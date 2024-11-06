'use client';
import Editor from '@monaco-editor/react';
import * as actions from '@/actions';
//interface based on spelling of table name. Naming convention to consider here.
import type { Snippet } from '@prisma/client';
import { useState } from 'react';

interface SnippetFormProps {
  snippet: Snippet;
}

function SnippetForm({ snippet }: SnippetFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditiorChange = (value: string = '') => {
    setCode(value);
  };

  //opt 2, more react-y way.
  /* const handleClick = () => {
    //makes sure that navigation doesnt happen before finished data.
    startTransition(async () => {
      await actions.saveSnippet(code);
    });
  }; */
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height="40vh"
        value={code}
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        onChange={handleEditiorChange}></Editor>
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="border rounded p-2 bg-blue-400">
          Save
        </button>
      </form>
    </div>
  );
}

export default SnippetForm;
