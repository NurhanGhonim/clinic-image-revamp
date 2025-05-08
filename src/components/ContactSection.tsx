
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help. Reach out to us with any questions or to schedule an appointment.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button className="bg-primary hover:bg-primary/90 w-full md:w-auto">Send Message</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Clinic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Medical Center Dr, Cairo, Egypt</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <p className="text-gray-600">+20 123 456 7890</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-600">info@elshefaaclinic.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon-Sat: 8:00 AM - 8:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564059046!2d31.214733973035864!3d30.059482203346373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1715130240747!5m2!1sen!2sus" 
                    width="100%" 
                    height="200" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="clinic location"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
