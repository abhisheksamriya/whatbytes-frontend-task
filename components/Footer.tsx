import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white px-8 md:px-16 py-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        <div>
          <h4 className="font-bold mb-3 uppercase tracking-wider">Filters</h4>
          <div className="flex flex-wrap gap-4 text-gray-300">
            <a href='/' >All</a >
            <a href='/?category=electronics' >Electronics</a >
            <a href='/?category=clothing' >Clothing</a >
            <a href='/?category=home' >Home</a >
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3 uppercase tracking-wider">About Us</h4>
          <p className="text-gray-300 mb-1 cursor-pointer hover:underline">About Us</p>
          <p className="text-gray-300 cursor-pointer hover:underline">Contact</p>
        </div>

        <div>
          <h4 className="font-bold mb-3 uppercase tracking-wider">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center hover:opacity-90 transition">
              <FacebookIcon />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center hover:opacity-90 transition">
              <TwitterIcon />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center hover:opacity-90 transition">
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/20 mt-8 pt-4 text-xs text-gray-300 flex justify-start">
        © 2024 American
      </div>
    </footer>
  );
};

export default Footer;