//not found pages can be specified otherwise function just redirects to a 404.
import { notFound } from 'next/navigation';
import { db } from '@/db';
interface SnippetShowPageProps {
  //params are always strings
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  //params is async because of dynamic route, we need to await it to get the id from the url.
  const { id } = await props.params;
  //id in db is number - param is string. Need to parse first.
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) {
    return notFound();
  }
  return <div>{snippet?.title}</div>;
}
