
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">El-Shefaa Clinic</h3>
            <p className="mb-4">
              Providing quality healthcare services to improve the health and wellbeing of our community.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#doctors" className="hover:underline">Our Doctors</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: 10:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/30 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} El-Shefaa Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
