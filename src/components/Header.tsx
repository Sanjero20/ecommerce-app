import Image from "next/image";

const Header = () => {
  return (
    <header className="container flex h-[15vh] items-center justify-center gap-10 bg-white">
      <Image src={"/images/logo.svg"} width={135} height={40} alt="logo" />

      <nav>
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

      <div className="relative flex items-center">
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
          className="bg-search w-[500px] rounded-full py-3 pl-12 pr-6 placeholder:text-black/40"
        />
      </div>

      {/* Icons */}
      <div className="flex gap-4">
        <Image src={"/icons/cart.svg"} width={24} height={24} alt="search" />
        <Image src={"/icons/account.svg"} width={24} height={24} alt="search" />
      </div>
    </header>
  );
};

export default Header;
