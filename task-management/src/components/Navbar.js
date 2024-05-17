import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      {/* Add more links here */}
    </nav>
  );
};

export default Navbar;