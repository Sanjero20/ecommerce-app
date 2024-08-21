import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string | StaticImageData;
  className?: string;
}

const Input = ({ icon, className, ...props }: Props) => {
  const styles = clsx(
    "w-full rounded-full bg-search py-3 pl-12 pr-6 placeholder:text-black/40",
    className,
  );

  return (
    <div className="relative flex w-full items-center">
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

      <input {...props} className={styles} />
    </div>
  );
};

export default Input;
