import { db } from '@/db';
export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <h1>Homepage</h1>
      {snippets.map((snippet) => (
        <div key={`snippet_${snippet.id}`}>
          <p>{snippet.title}</p>
        </div>
      ))}
    </div>
  );
}
