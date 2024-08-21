import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

const Footer = () => {
  return (
    <>
      {/* Newsletter */}
      <div className="via-footer to-footer mt-12 bg-gradient-to-b from-white from-50% via-50%">
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

      {/* Main footer */}
      <footer className="bg-footer min-h-96 pt-6">
        <div className="container">Footer</div>
      </footer>
    </>
  );
};

export default Footer;
