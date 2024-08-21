import Image, { StaticImageData } from "next/image";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string | StaticImageData;
}

const Input = ({ icon, ...props }: Props) => {
  return (
    <div className="relative hidden flex-1 items-center lg:flex">
      {icon && (
        <Image
          src={icon}
          className="absolute ml-4 select-none contrast-0 filter"
          width={24}
          height={24}
          alt="search"
          draggable="false"
        />
      )}

      <input
        className="w-full rounded-full bg-search py-3 pl-12 pr-6 placeholder:text-black/40"
        {...props}
      />
    </div>
  );
};

export default Input;
