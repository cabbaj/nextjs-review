import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-4 text-xl font-bold bg-neutral-900">
        <div className="flex gap-4 ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/form">Form</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
      <hr className="text-neutral-700" />
    </div>
  );
};
export default Navbar;
