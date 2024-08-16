import Card from "@/components/ui/Card";
import CardImage from "./ui/CardImage";

import casualImg from "../../../../public/images/dress-styles/casual.png";
import formalImg from "../../../../public/images/dress-styles/formal.png";
import partyImg from "../../../../public/images/dress-styles/party.png";
import gymImg from "../../../../public/images/dress-styles/gym.png";

const BACKGROUND_IMAGES = [
  { title: "Casual", src: casualImg, span: 2 },
  { title: "Formal", src: formalImg, span: 3 },
  { title: "Party", src: partyImg, span: 3 },
  { title: "Gym", src: gymImg, span: 2 },
];

const DressStyle = () => {
  return (
    <Card className="flex min-h-96 w-full flex-col gap-8 p-6 lg:p-12">
      <h2 className="text-center font-integral text-3xl font-bold uppercase lg:text-5xl">
        browse by dress style
      </h2>

      <div className="grid grid-cols-1 gap-y-4 text-2xl font-bold lg:grid-cols-5 lg:grid-rows-2 lg:gap-4">
        {BACKGROUND_IMAGES.map((source) => (
          <CardImage
            key={source.title}
            title={source.title}
            className={`col-span-${source.span}`}
            src={source.src}
          />
        ))}
      </div>
    </Card>
  );
};

export default DressStyle;
