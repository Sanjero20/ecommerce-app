import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  size?: number;
}

export const Icon = ({ src, size = 24 }: Props) => {
  return <Image src={src} width={size} height={size} alt="" />;
};

interface SocialIconProps extends Props {
  inverted?: boolean;
}

export const SocialIcon = ({
  src,
  size,
  inverted = false,
}: SocialIconProps) => {
  const styles = clsx(
    "flex h-8 w-8 items-center justify-center rounded-full border border-black/60",
    "hover:cursor-pointer",
    inverted ? "bg-black" : "",
  );

  return (
    <div className={styles}>
      <Image src={src} width={size} height={size} alt="" />
    </div>
  );
};
