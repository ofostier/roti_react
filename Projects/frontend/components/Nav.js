import Link from 'next/link';
//import { useCart } from '../lib/cartState';
//import CartCount from './CartCount';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  //const user = false;
  //const { openCart } = useCart();
  return (
    <NavStyles>
      <Link href="/">Dashboard</Link>
      <Link href="/rotis">Rotis</Link>
      {user && (
        <>
          <Link href="/create">Create</Link>
          <Link href="/account">Account</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/contact">Contact</Link>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
