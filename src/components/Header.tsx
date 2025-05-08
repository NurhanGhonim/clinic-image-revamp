
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">El-Shefaa Clinic</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
          <a href="#doctors" className="text-gray-600 hover:text-primary transition-colors">Doctors</a>
          <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90">Book Appointment</Button>
      </div>
    </header>
  );
};

export default Header;
