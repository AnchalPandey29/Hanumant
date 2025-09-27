'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Loader2, CheckCircle } from 'lucide-react';
import { AnimatedContent } from '@/components/shared/animated-content';
import { useToast } from '@/hooks/use-toast';


export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const { toast } = useToast();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (email.includes('error')) {
            toast({
              title: "Subscription Failed",
              description: "Please try again later.",
              variant: "destructive",
            });
            setStatus('idle');
        } else {
            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                setEmail('');
            }, 3000);
        }
    };

    if (!isMounted) {
      return (
          <section id="contact" className="py-20 sm:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-2xl mx-auto shadow-lg border-none bg-slate-50 dark:bg-slate-900 opacity-0">
                    <CardHeader className="text-center">
                      <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-3xl">Stay Informed</CardTitle>
                      <CardDescription className="text-lg text-foreground/70 mt-2">
                        Subscribe to our newsletter for the latest in tech, course updates, and special offers.
                      </CardDescription>
                    </CardHeader>
                </Card>
            </div>
          </section>
      );
    }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent>
          <Card className="max-w-2xl mx-auto shadow-lg border-none bg-slate-50 dark:bg-slate-900">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl">Stay Informed</CardTitle>
              <CardDescription className="text-lg text-foreground/70 mt-2">
                Subscribe to our newsletter for the latest in tech, course updates, and special offers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 text-lg bg-background rounded-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status !== 'idle'}
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-14 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/40" 
                  disabled={status !== 'idle'}
                >
                  {status === 'loading' && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  {status === 'success' && <CheckCircle className="mr-2 h-5 w-5" />}
                  {status === 'idle' && 'Subscribe'}
                  {status === 'loading' && 'Subscribing...'}
                  {status === 'success' && 'Thank you for subscribing!'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedContent>
      </div>
    </section>
  );
}
