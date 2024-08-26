import Image from "next/image";
import Link from "next/link";
import Input from "./ui/Input";
import { Icon } from "./ui/Icon";

const Header = () => {
  return (
    <header className="container flex h-16 items-center justify-between gap-10 bg-white lg:h-24">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile */}
          <div className="mt-1">
            <Icon src={"/icons/hamburger.svg"} />
          </div>

          {/* Mobile Logo */}
          <Link href="/">
            <div className="font-integral text-2xl">SHOP.CO</div>
          </Link>
        </div>

        {/* Desktop Logo */}
        <Link href="/">
          <Image
            src={"/images/logo.svg"}
            className="hidden lg:block"
            width={135}
            height={40}
            alt="logo"
          />
        </Link>

        {/* Navbar */}
        <nav className="hidden lg:block">
          <ul className="links flex gap-6">
            <li className="flex gap-1">
              Shop
              <Icon src={"/icons/caret-down.svg"} size={16} />
            </li>
            <li>
              <Link href="/on-sale">On Sale</Link>
            </li>
            <li>
              <Link href="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hidden flex-1 lg:flex">
        <Input
          icon={"/icons/search.svg"}
          placeholder="Search for products..."
        />
      </div>

      {/* Icons */}
      <div className="flex gap-4">
        <div className="lg:hidden">
          <Icon src={"/icons/search.svg"} />
        </div>
        <Link href={"/cart"}>
          <Icon src={"/icons/cart.svg"} />
        </Link>
        <Link href={"/account"}>
          <Icon src={"/icons/account.svg"} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
