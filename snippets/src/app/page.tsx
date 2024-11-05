import { db } from '@/db';
import Link from 'next/link';
/* Async to fetch data */
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <Link
      className="gap-3 flex justify-between items-center p-2 border rounded"
      href={`/snippets/${snippet.id}`}
      key={snippet.id}>
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));
  return (
    <div>
      <div className="flex my-2 justify-between items-center">
        <h1 className="text-2xl font-bold mb-6">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>

      <div className="flex flex-col gap-2 w-full">{renderedSnippets}</div>
    </div>
  );
}
