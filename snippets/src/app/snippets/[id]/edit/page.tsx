import { db } from '@/db';
import notFound from '../not-found';
import SnippetEditForm from '@/components/SnippetEditForm';
interface SnippetEditPageProps {
  //params are always strings
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const params = await props.params;
  const id = parseInt(params.id);

  const snippet = await db.snippet.findFirst({ where: { id } });
  if (!snippet) {
    return notFound();
  }

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{snippet?.title}</h2>
      </div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
