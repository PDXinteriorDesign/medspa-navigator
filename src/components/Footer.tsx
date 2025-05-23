
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-medspa-darkblue py-12">
      <div className="medspa-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-bold text-white">MedSpas<span className="text-medspa-gold">NYC</span></span>
            </Link>
            <p className="text-sm text-white mb-4">
              Your guide to the best medical spas in New York City, offering premium beauty and wellness treatments.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Popular Services</h3>
            <ul className="space-y-2">
              <li><Link to="/treatments/botox" className="text-gray-300 hover:text-medspa-teal transition">Botox</Link></li>
              <li><Link to="/treatments/coolsculpting" className="text-gray-300 hover:text-medspa-teal transition">CoolSculpting</Link></li>
              <li><Link to="/treatments/laser-hair-removal" className="text-gray-300 hover:text-medspa-teal transition">Laser Hair Removal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Popular Locations</h3>
            <ul className="space-y-2">
              <li><Link to="/manhattan" className="text-gray-300 hover:text-medspa-teal transition">Manhattan</Link></li>
              <li><Link to="/brooklyn" className="text-gray-300 hover:text-medspa-teal transition">Brooklyn</Link></li>
              <li><Link to="/the-hamptons" className="text-gray-300 hover:text-medspa-teal transition">The Hamptons</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/locations" className="text-gray-300 hover:text-medspa-teal transition">Med Spa Directory</Link></li>
              <li><Link to="/treatments" className="text-gray-300 hover:text-medspa-teal transition">All Treatments</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-medspa-teal/20">
          <p className="text-center text-sm text-white">
            © {new Date().getFullYear()} MedSpasNYC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
