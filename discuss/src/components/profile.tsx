'use client';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();
  console.log('Client', session.data?.user);
  if (session.data?.user) {
    return <div>Client component - Signed in as {session.data.user.name}</div>;
  }
  return <div>Client component - Not signed in</div>;
}
