import { Link } from "react-router-dom";
import FacebookIcon from "../assets/Icons/facebook.png";
import InstagramIcon from "../assets/Icons/instagram.png";
import XIcon from "../assets/Icons/twitter.png";  

const footerColumns = [
  {
    heading: "Need Help",
    links: ["Contact Us", "Track Order", "Returns & Refunds", "FAQs", "My Account"],
  },
  {
    heading: "Company",
    links: ["About Us", "Investor Relation", "Careers", "Gift Vouchers", "Community Initiatives"],
  },
  {
    heading: "More Info",
    links: ["T&C", "Privacy Policy", "Sitemap", "Get Notified", "Blogs"],
  },

];

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-200 px-4 pb-8 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="mb-5 text-3xl font-black uppercase text-red-500">
                {column.heading}
              </h3>
              <div className="space-y-4">
                {column.links.map((link) => (
                  link === "T&C" ? (
                    <Link
                      key={link}
                      className="block font-semibold text-neutral-600"
                      to="/terms"
                    >
                      {link}
                    </Link>
                  ) : (
                    <a
                      key={link}
                      className="block font-semibold text-neutral-600"
                      href="/#"
                      onClick={(event) => event.preventDefault()}
                    >
                      {link}
                    </a>
                  )
                ))}
              </div>
            </div>
          ))}

          <div className="xl:pl-6">
            <h3 className="mb-5 text-3xl font-black uppercase text-red-500">
              About SSS Clothing
            </h3>
            <div className="space-y-4 text-neutral-600">
              <p className="leading-7">
                At SSS Clothing, we believe that what you wear should express
                who you are. We focus on stylish and unique T-Shirts anf Shirts that help
                you stand out.
              </p>
              <p className="leading-7">
                Our collection brings fresh, creative, and different designs
                that feel modern, comfortable, and easy to wear.
              </p>
              <p className="leading-7">
                Our mission is to provide high-quality, trendy clothing that
                gives you confidence every time you wear it.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-8 border-t border-black/10 pt-8 xl:flex-row xl:items-center">
     

          <div className="flex flex-wrap items-center gap-3 xl:justify-end">
            <span className="font-semibold text-neutral-600">Follow Us:</span>
            <a
              className="rounded-full bg-white px-4 py-3 font-bold"
              href="/#"
              onClick={(event) => event.preventDefault()}
            >
              <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              className="rounded-full bg-white px-4 py-3 font-bold"
              href="/#"
              onClick={(event) => event.preventDefault()}
            >
              <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
            
          </div>
        </div>

        <div className="mt-8 border-t border-black/10 pt-6 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-3 font-bold">
              100% Secure Payment
            </span>
            <span className="rounded-full bg-white px-4 py-3 font-bold">
              Shipping Partners
            </span>
            <span className="rounded-full bg-white px-4 py-3 font-bold">
              Cash on Delivery
            </span>
          </div>
          <p className="mt-5 text-lg font-semibold text-neutral-600">
            (c) SSS STORE 2026-27
          </p>
        </div>
      </div>
    </footer>
  );
}
