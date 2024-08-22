import Button from "./ui/Button";
import Card from "./ui/Card";
import Input from "./ui/Input";

const NewsLetter = () => {
  return (
    <div className="mt-12 bg-gradient-to-b from-white from-50% via-footer via-50% to-footer">
      <div className="container">
        <Card className="flex flex-col items-center gap-4 bg-primary p-6 text-white md:flex-row">
          <h2 className="w-full md:w-2/3">
            stay upto date about our latest offers
          </h2>

          <div className="flex w-full flex-1 flex-col gap-4">
            <Input
              icon="icons/mail.svg"
              className="bg-white"
              placeholder="Enter your email address"
            />

            <Button className="w-full bg-white py-3 text-black">
              Subscribe to Newsletter
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewsLetter;
