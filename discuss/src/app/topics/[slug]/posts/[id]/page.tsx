export default function PostShowPage({ params }: { params: { topicSlug: string; postId: string } }) {
  return (
    <div>
      Post Show Page: {params.postId} in topic: {params.topicSlug}
    </div>
  );
}
