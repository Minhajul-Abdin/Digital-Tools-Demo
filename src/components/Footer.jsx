import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#101727] text-white pt-30">
        <div className="w-[80%] mx-auto">
              <footer className="footer sm:footer-horizontal text-base-content pb-20">
  <aside className="text-white">
    <h6 className="font-bold text-4xl">DigiTools</h6>
    <p>
      Premium digital tools for creators,<br/> professionals, and businesses. Work smarter<br/> with our suite of powerful tools.
    </p>
  </aside>
  <nav className="text-white">
    <h6 className="footer-title text-white">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav className="text-white">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav className="text-white">
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav className="text-white">
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4 ">
      <a className="text-xl p-2 rounded-full bg-white text-black"><FaInstagramSquare /></a>
      <a className="text-xl p-2 rounded-full bg-white text-black" ><FaFacebook /></a>
      <a className="text-xl p-2 rounded-full bg-white text-black"><FaXTwitter /></a>
    </div>
  </nav>
</footer>
<hr className="text-gray-100 opacity-25"/>
  <footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <p>© {new Date().getFullYear()} Digitools. All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>Privacy Policy</a>
    <a>Terms of Service</a>
    <a>Cookies</a>
  </nav>
</footer>
        </div>
        </div>
    );
};

export default Footer;