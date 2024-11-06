import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';
interface SnippetDetailPageProps {
  /* Params is async, set type as such */
  params: Promise<{ id: string }>;
}
async function SnippetDetailPage(props: SnippetDetailPageProps) {
  const { id } = await props.params;

  await new Promise((r) => setTimeout(r, 2000));
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id)
    }
  });
  //notFound looks for the closest not-found.tsx in folder structure.
  if (!snippet) return notFound();

  return (
    <div>
      <div className="flex my-2 justify-between items-center">
        <h1 className="text-2xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <Link href="" className="p-2 border rounded">
            Delete
          </Link>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-400">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export default SnippetDetailPage;
