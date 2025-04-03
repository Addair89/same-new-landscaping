import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">GreenScape Landscaping</h3>
            <p className="text-green-200 mb-4">
              Creating beautiful, sustainable outdoor spaces for homes and businesses since 2005.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-200 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-green-200 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-green-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-green-200 hover:text-white">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-green-200 hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-green-200 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-green-200 hover:text-white">
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-green-200 hover:text-white">
                  Garden Maintenance
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-green-200 hover:text-white">
                  Hardscaping
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-green-200 hover:text-white">
                  Irrigation Systems
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-green-200 hover:text-white">
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-green-400" />
                <span className="text-green-200">
                  123 Green Valley Road<br />
                  Springfield, IL 62701
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-green-200">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-green-200">info@greenscape.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-green-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm">
            &copy; {new Date().getFullYear()} GreenScape Landscaping. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-green-300 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-green-300 text-sm hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-green-300 text-sm hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
