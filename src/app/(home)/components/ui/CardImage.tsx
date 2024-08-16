import Image, { StaticImageData } from "next/image";
import Card from "@/components/ui/Card";

interface Props {
  title: string;
  src: string | StaticImageData;
  className?: string;
}

const CardImage = ({ title, src, className }: Props) => {
  return (
    <Card
      className={`${className} relative flex h-48 overflow-hidden bg-white p-6 lg:h-72`}
    >
      <p className="z-[2]">{title}</p>
      <Image
        src={src}
        className="absolute right-0 top-0 object-cover"
        style={{ width: "auto", height: "100%" }}
        unoptimized
        alt=""
      />
    </Card>
  );
};

export default CardImage;
