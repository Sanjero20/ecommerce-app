import Card from "@/components/ui/Card";
import CardImage from "./ui/CardImage";

// Static image data
import casualImg from "../../../../public/images/dress-styles/casual.png";
import formalImg from "../../../../public/images/dress-styles/formal.png";
import partyImg from "../../../../public/images/dress-styles/party.png";
import gymImg from "../../../../public/images/dress-styles/gym.png";

const DressStyle = () => {
  return (
    <Card className="flex min-h-96 w-full flex-col gap-8 p-6 lg:p-12">
      <h2 className="text-center">browse by dress style</h2>

      <div className="grid grid-cols-1 gap-y-4 text-2xl font-bold lg:grid-cols-5 lg:grid-rows-2 lg:gap-4">
        <CardImage title="Casual" src={casualImg} className="col-span-2" />
        <CardImage title="Formal" src={formalImg} className="col-span-3" />
        <CardImage title="Party" src={partyImg} className="col-span-3" />
        <CardImage title="Gym" src={gymImg} className="col-span-2" />
      </div>
    </Card>
  );
};

export default DressStyle;
