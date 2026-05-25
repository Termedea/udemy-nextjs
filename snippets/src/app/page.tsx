import Link from 'next/link';

import { db } from '@/db';
export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="mt-6 flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Homepage</h1>
        <button>
          <Link href="/snippets/new" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
            Create new snippet
          </Link>
        </button>
      </div>
      {snippets.map((snippet) => (
        <div key={`snippet_${snippet.id}`}>
          <Link className="my-2 flex justify-between items-center p-2 border rounded" href={`/snippets/${snippet.id}`}>
            <div>{snippet.title}</div>
            <div>View</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
