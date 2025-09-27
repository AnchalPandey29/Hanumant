
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mountain, Linkedin, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
  { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
];

const usefulLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#', label: 'Verify Certificate' },
    { href: '#', label: 'Career' },
    { href: '#contact', label: 'Contact Us' },
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Privacy & Policy' },
    { href: '#', label: 'Terms & Conditions' },
];

const servicesLinks = [
    { href: '#services', label: 'Website Development' },
    { href: '#services', label: 'Website Designing' },
    { href: '#services', label: 'Graphic Designing' },
    { href: '#services', label: 'Digital Marketing' },
    { href: '#services', label: 'App Development' },
    { href: '#services', label: 'AutoCAD' },
    { href: '#services', label: 'Data Science & Data Analytics' },
];


export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground/80 pt-24 sm:pt-32 pb-12">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[150px] fill-current text-slate-50 dark:text-slate-900"
          >
              <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.3-16.72-168.19-17.73-250.45-.39-55.23,11.35-115.54,23.46-176.16,40.27-119.27,33.18-289.54,54.2-417.23,43.06V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              ></path>
          </svg>
      </div>


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1: About & Social */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-white">
                <Mountain className="h-7 w-7 text-secondary" />
                <span>Hanumant</span>
            </Link>
            <p className="max-w-md">Empowering the next generation of tech talent through innovative and practical education.</p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-secondary/30">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-white">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors duration-200 relative group"><span>{link.label}</span><span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span></Link></li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors duration-200 relative group"><span>{link.label}</span><span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span></Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-sm">Subscribe to get the latest updates and offers.</p>
            <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:ring-secondary"/>
                <Button variant="secondary" size="icon" aria-label="Subscribe"><Mail className="w-5 h-5"/></Button>
            </form>
          </div>

        </div>

        {/* Contact Info and Branches */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
                <div className="text-secondary mt-1"><Phone size={20} /></div>
                <div>
                    <h5 className="font-semibold text-white">Call Us</h5>
                    <a href="tel:+919454461808" className="block text-sm hover:text-white transition-colors">+91-9454461808</a>
                    <a href="tel:+916386198028" className="block text-sm hover:text-white transition-colors">+91-6386198028</a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="text-secondary mt-1"><Mail size={20} /></div>
                <div>
                    <h5 className="font-semibold text-white">Email Us</h5>
                    <a href="mailto:info@hanumanttechnology.com" className="block text-sm hover:text-white transition-colors">info@hanumanttechnology.com</a>
                    <a href="mailto:hanumanttechnology@gmail.com" className="block text-sm hover:text-white transition-colors">hanumanttechnology@gmail.com</a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="text-secondary mt-1"><MapPin size={20} /></div>
                <div>
                    <h5 className="font-semibold text-white">Lucknow - Aashiyana</h5>
                    <p className="text-sm">1st Floor, Sadafal Plaza, Sector I, Lucknow-226012</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                 <div className="text-secondary mt-1"><MapPin size={20} /></div>
                <div>
                    <h5 className="font-semibold text-white">Lucknow - Aliganj</h5>
                    <p className="text-sm">2nd Floor, Hira Tower 1, Sector C, Aliganj, Lucknow-226024</p>
                </div>
            </div>
        </div>


        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hanumant Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
