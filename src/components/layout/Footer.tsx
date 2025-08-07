import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import statgridLogo from "@/assets/statgrid-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={statgridLogo} alt="StatGrid" className="h-10 w-10" />
              <div>
                <div className="text-xl font-bold">StatGrid</div>
                <div className="text-sm text-white/80">Government of Telangana</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Connecting citizens with government services through technology. 
              Real-time updates, transparent communication, better governance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Live Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Public Notices
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Government</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.telangana.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
                >
                  Telangana Government
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://ghmc.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
                >
                  GHMC Official
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span>+91 40 2111 1111</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>support@statgrid.telangana.gov.in</span>
              </div>
              <div className="flex items-start space-x-2 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Secretariat Building<br />
                  Hyderabad, Telangana 500022
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-white/80 text-sm">
              © 2024 StatGrid - Government of Telangana. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};