import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mountain, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
  { icon: <Facebook className="h-5 w-5" />, href: '#' },
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Instagram className="h-5 w-5" />, href: '#' },
];

const puneImage = PlaceHolderImages.find(img => img.id === 'branch-pune');
const mumbaiImage = PlaceHolderImages.find(img => img.id === 'branch-mumbai');


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About & Social */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary-foreground">
                <Mountain className="h-7 w-7 text-secondary" />
                <span>Hanumant</span>
            </Link>
            <p>Empowering the next generation of tech talent through innovative and practical education.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-primary-foreground transition-colors">
                  {link.icon}
                  <span className="sr-only">{`Social media link ${index + 1}`}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link href="#students" className="hover:text-primary-foreground transition-colors">Showcase</Link></li>
              <li><Link href="#contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Branches */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-primary-foreground">Our Locations</h4>
            <div className='space-y-4'>
                <div className="flex gap-4">
                    {puneImage && <Image src={puneImage.imageUrl} data-ai-hint={puneImage.imageHint} alt="Pune branch" width={80} height={60} className="rounded-md object-cover"/>}
                    <div>
                        <h5 className="font-semibold text-primary-foreground">Pune</h5>
                        <p className="text-sm">123 Tech Park, Hinjewadi</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    {mumbaiImage && <Image src={mumbaiImage.imageUrl} data-ai-hint={mumbaiImage.imageHint} alt="Mumbai branch" width={80} height={60} className="rounded-md object-cover"/>}
                    <div>
                        <h5 className="font-semibold text-primary-foreground">Mumbai</h5>
                        <p className="text-sm">456 Innovation Hub, BKC</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-primary-foreground">Join Our Newsletter</h4>
            <p>Get updates on new courses and tech trends.</p>
            <form className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"/>
                <Button variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hanumant Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
