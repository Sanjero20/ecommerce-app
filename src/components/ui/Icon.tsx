import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  size?: number;
}

const Icon = ({ src, size = 24 }: Props) => {
  return <Image src={src} width={size} height={size} alt="" />;
};

export default Icon;
