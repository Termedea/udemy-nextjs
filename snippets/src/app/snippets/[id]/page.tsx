import { notFound } from 'next/navigation';
import { db } from '@/db';
import * as actions from '@/actions';
import Link from 'next/link';
interface SnippetDetailPageProps {
  /* Params is async, set type as such */
  params: Promise<{ id: string }>;
}
export default async function SnippetDetailPage(props: SnippetDetailPageProps) {
  const { id } = await props.params;

  await new Promise((r) => setTimeout(r, 2000));
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id)
    }
  });
  //notFound looks for the closest not-found.tsx in folder structure.
  if (!snippet) return notFound();
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div>
      <div className="flex my-2 justify-between items-center">
        <h1 className="text-2xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button
              type="submit"
              className="p-2 border rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-400">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
//function to make dynamic (due to [id]) pages static with cached data and control re-cache on changes instead (done in actions with revalidate path)
export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString()
    };
  });
}
