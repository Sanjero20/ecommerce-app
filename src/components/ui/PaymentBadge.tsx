import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
}

const PaymentBadge = ({ src }: Props) => {
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded bg-white">
      <Image src={src} style={{ width: "auto", height: "auto" }} alt="" />
    </div>
  );
};

export default PaymentBadge;
