'use client';
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
//these actually also use the auth-helper but it's prettier to package all of it in actions. Could import from just actions, since everything is re-exported there, but this is more explicit.
import { signIn, signOut } from '@/actions/auth';

export default function HeaderAuth() {
  //in useSession, the session data is in session.data.
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === 'loading') {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <NavbarItem>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar
              className="cursor-pointer"
              src={session.data.user.image || ''}
              alt={session.data.user.name || ''}
            />
          </PopoverTrigger>
          <PopoverContent>
            <form action={signOut}>
              <Button type="submit" color="danger" variant="flat">
                Sign out
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      </NavbarItem>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" color="primary" variant="solid">
              Sign in
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={signIn}>
            {/* Will work the same as sign in but there could have been a redirect to connect the github account here */}
            <Button type="submit" color="primary" variant="flat">
              Sign up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
