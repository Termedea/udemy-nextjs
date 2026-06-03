'use client';
//useSession for handling auth in a client component. Might not need this component, but it demonstrate how to use session in client component. UseSession doesn't directly access cookies, but uses a rout to figure out client status.
import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>Client component - Signed in as {session.data.user.name}</div>;
  }
  return <div>Client component - Not signed in</div>;
}
