//not found pages can be specified otherwise function just redirects to a 404.
import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';
import * as actions from '@/actions';
interface SnippetShowPageProps {
  //params are always strings
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //params is async because of dynamic route, we need to await it to get the id from the url.
  const params = await props.params;
  const id = parseInt(params.id);
  //id in db is number - param is string. Need to parse first.
  const snippet = await db.snippet.findFirst({ where: { id } });
  if (!snippet) {
    //we don't have to use not-found, we can just return jsx if we want to, but it's a way to organize stuff. Helper files can clutter, it's a balance whether to return jsx directly or to use the helper-files.
    return notFound();
  }
  return (
    <div className="p-4 my-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{snippet?.title}</h2>
        <div className="flex gap-2">
          <Link href={`/snippets/${id}/edit`} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
            Edit
          </Link>
          {/* Formdata argument as a default - bind for custom data */}
          <form action={actions.deleteSnippet.bind(null, snippet.id)}>
            <button type="submit" className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border border-gray-600 rounded  bg-gray-700 mt-4">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
}
