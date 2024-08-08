import Image from "next/image";

const Header = () => {
  return (
    <header className="container flex h-[15vh] items-center justify-between gap-10 bg-white">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile */}
          <Image
            src={"/icons/hamburger.svg"}
            className="mt-1"
            width={24}
            height={24}
            alt=""
          />

          {/* Mobile Logo */}
          <div className="font-integral text-2xl">SHOP.CO</div>
        </div>

        {/* Desktop Logo */}
        <Image
          src={"/images/logo.svg"}
          className="hidden lg:block"
          width={135}
          height={40}
          alt="logo"
        />

        {/* Navbar */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            <li className="flex gap-1">
              Shop
              <Image
                src={"/icons/caret-down.svg"}
                width={16}
                height={16}
                alt=""
              />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </nav>
      </div>

      <div className="relative hidden flex-1 items-center lg:flex">
        {/* Search icon */}
        <Image
          src={"/icons/search.svg"}
          className="absolute ml-4 select-none contrast-0 filter"
          width={24}
          height={24}
          alt="search"
          draggable="false"
        />

        <input
          placeholder="Search for products..."
          className="bg-search w-full rounded-full py-3 pl-12 pr-6 placeholder:text-black/40"
        />
      </div>

      {/* Icons */}
      <div className="flex gap-4">
        <Image
          src={"/icons/search.svg"}
          width={24}
          height={24}
          alt=""
          className="lg:hidden"
        />
        <Image src={"/icons/cart.svg"} width={24} height={24} alt="" />
        <Image src={"/icons/account.svg"} width={24} height={24} alt="" />
      </div>
    </header>
  );
};

export default Header;
