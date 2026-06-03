import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input
} from '@nextui-org/react';
//use our own auth helper to get the session in a server component.
//import { auth } from '@/helpers/auth';

import HeaderAuth from './headerAuth';

export default async function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search..." />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{<HeaderAuth />}</NavbarContent>
    </Navbar>
  );
}
