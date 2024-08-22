import { SocialIcon } from "./ui/Icon";
import Sublink from "./ui/Sublink";

// Social Icons
import twitterIcon from "../../public/icons/socials/twitter.svg";
import facebookIcon from "../../public/icons/socials/facebook.svg";
import instagramIcon from "../../public/icons/socials/instagram.svg";
import githubIcon from "../../public/icons/socials/github.svg";

// Payment option icons
import visa from "../../public/icons/payment/visa.svg";
import mastercard from "../../public/icons/payment/mastercard.svg";
import paypal from "../../public/icons/payment/paypal.svg";
import applePay from "../../public/icons/payment/apple-pay.svg";
import googlePay from "../../public/icons/payment/google-pay.svg";
import Image from "next/image";
import PaymentBadge from "./ui/PaymentBadge";

const Footer = () => {
  return (
    <footer className="bg-footer pb-6 pt-8">
      <div className="container flex flex-col gap-6">
        {/* Column 1 */}
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-6">
          {/* Shop Info */}
          <div className="col-span-2 flex flex-col justify-between gap-4">
            <div>
              <h2 className="mb-6 text-[28px] md:text-3xl md:leading-6">
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
        <div className="col-span-6 flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-center text-black/60">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className="flex gap-2">
            <PaymentBadge src={visa} />
            <PaymentBadge src={mastercard} />
            <PaymentBadge src={paypal} />
            <PaymentBadge src={applePay} />
            <PaymentBadge src={googlePay} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
