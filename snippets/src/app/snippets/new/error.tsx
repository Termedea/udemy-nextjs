'use client';
interface SnippetCreateErrorPageProps {
  error: Error;
  reset: () => void;
}
function SnippetCreateErrorPage({ error }: SnippetCreateErrorPageProps) {
  return <div>{error.message}</div>;
}

export default SnippetCreateErrorPage;
