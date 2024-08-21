import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

const Footer = () => {
  return (
    <div className="mt-12">
      {/* Newsletter */}
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

      {/* Main footer */}
      <footer className="bg-footer min-h-96">
        <div className="container">Footer</div>
      </footer>
    </div>
  );
};

export default Footer;
