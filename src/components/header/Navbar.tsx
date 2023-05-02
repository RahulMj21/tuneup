import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Dashboard</Link>
            <Link href="#">Support Us</Link>
            <Link href="#">Contact</Link>
        </nav>
    );
};

export default Navbar;
