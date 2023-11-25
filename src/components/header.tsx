import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from '@nextui-org/react';
import { auth } from '@/auth';
import * as actions from '@/actions';

export default async function Header() {
  const session = await auth();

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? (
          <Avatar src={session.user.image ?? ''} />
        ) : (
          <>
            <NavbarItem>
              <form action={actions.signIn}>
                <Button type="submit" color="secondary" variant="bordered">
                  Login
                </Button>
              </form>
            </NavbarItem>
            <NavbarItem>
              <form action={actions.signIn}>
                <Button type="submit" color="secondary" variant="flat">
                  Register
                </Button>
              </form>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
