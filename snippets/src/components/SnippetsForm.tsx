'use client';
//interface based on spelling of table name. Naming convention to consider here.
import type { snippet } from '@prisma/client';

interface SnippetFormProps {
  snippet: snippet;
}

function SnippetForm({ snippet }: SnippetFormProps) {
  return <div></div>;
}

export default SnippetForm;
