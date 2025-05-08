import React, { useState } from 'react';
import { 
  Coffee, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="contact" className="bg-coffee-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Coffee className="w-8 h-8" />
              <h3 className="text-xl font-bold">Caffeine Culture</h3>
            </div>
            <p className="text-cream opacity-80 mb-6">
              Serving quality coffee and food in a welcoming atmosphere since 2013. Join us for your daily dose of caffeine and culture.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-cream hover:text-cream-light transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-cream hover:text-cream-light transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-cream hover:text-cream-light transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Coffee Street, Cafe District, City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@caffeineculture.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-cream opacity-80">7:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-cream opacity-80">8:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-cream opacity-80">9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-cream opacity-80 mb-4">
              Subscribe to get updates on new menu items, events, and special offers.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-4 py-3 flex-grow bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cream text-white placeholder:text-white/50"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-cream text-coffee-dark rounded-md font-medium hover:bg-cream-light transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
              {subscribed && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-green-300"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-cream opacity-70">
          <p>&copy; {new Date().getFullYear()} Caffeine Culture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;