import { Button } from '@/components/ui/button';
import { AnimatedContent } from '@/components/shared/animated-content';

export default function CtaSection() {
  return (
    <section className="relative bg-primary text-primary-foreground">
        <div 
            className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 bg-secondary"
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        ></div>
        <div className="relative container mx-auto px-4 md:px-6 py-20 sm:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedContent>
                    <div className="max-w-md">
                        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Best Offer - Join Us Today</h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            It is one of the best IT company & training institutes in Lucknow. Hanumant Technology offers top IT services and 100% job-oriented training programs at a reasonable price.
                        </p>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Those interested in the internship and services on web design, website development, full-stack development, graphic design, video editing, digital marketing, AutoCAD, data science, data analytics, AI, and machine learning can apply now for getting the best deal.
                        </p>
                    </div>
                </AnimatedContent>
                <AnimatedContent delay={150} className="flex justify-center md:justify-start">
                    <Button size="lg" className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto text-lg py-8 px-12 group relative overflow-hidden shadow-2xl">
                        <span className="absolute inset-0 bg-primary/10 transform scale-x-0 transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100"></span>
                        <span className="relative">Apply Now</span>
                    </Button>
                </AnimatedContent>
            </div>
        </div>
    </section>
  );
}
