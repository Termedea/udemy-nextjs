import { Button } from '@nextui-org/react';
import { signIn, signOut } from '@/actions/';
import { auth } from '@/helpers/auth';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();
  console.log(session?.user);
  return (
    <div>
      {session?.user ? (
        <div>
          Signed in as {session.user.name}
          <form action={signOut}>
            <Button type="submit">Sign out</Button>
          </form>
        </div>
      ) : (
        <div>
          Not signed in
          <form action={signIn}>
            <Button type="submit">Sign in with GitHub</Button>
          </form>
        </div>
      )}
      <Profile />
    </div>
  );
}
