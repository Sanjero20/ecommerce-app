import { SocialIcon } from "./ui/Icon";
import Sublink from "./ui/Sublink";

// Social Icons
import twitterIcon from "../../public/icons/twitter.svg";
import facebookIcon from "../../public/icons/facebook.svg";
import instagramIcon from "../../public/icons/instagram.svg";
import githubIcon from "../../public/icons/github.svg";

const Footer = () => {
  return (
    <footer className="bg-footer pb-6 pt-8">
      <div className="container flex flex-col gap-6">
        {/* Column 1 */}
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-6">
          {/* Shop Info */}
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="mb-3 text-[28px] md:text-3xl md:leading-6">
                SHOP.CO
              </h2>
              <p className="text-black/60 lg:w-4/6">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              <SocialIcon src={twitterIcon} />
              <SocialIcon src={facebookIcon} inverted />
              <SocialIcon src={instagramIcon} />
              <SocialIcon src={githubIcon} />
            </div>
          </div>
          {/* End of column 1 */}

          {/* Sublinks */}
          <Sublink
            title="company"
            links={["About", "Features", "Works", "Career"]}
          />
          <Sublink
            title="help"
            links={[
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ]}
          />
          <Sublink
            title="faq"
            links={["Account", "Manage Deliveries", "Orders", "Payments"]}
          />
          <Sublink
            title="resources"
            links={[
              "Free eBooks",
              "Development Tutorial",
              "How to - Blog",
              "Youtube Playlist",
            ]}
          />
        </div>

        <hr className="col-span-6 border-black/10" />

        {/* Copyright */}
        <div className="col-span-6 flex flex-col justify-between sm:flex-row">
          <p className="text-center text-black/60">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <ul className="flex gap-2">
            <li>Visa</li>
            <li>Mastercard</li>
            <li>Paypal</li>
            <li>ePay</li>
            <li>gPay</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
