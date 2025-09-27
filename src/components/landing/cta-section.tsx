import { Button } from '@/components/ui/button';
import { AnimatedContent } from '@/components/shared/animated-content';
import Image from 'next/image';

export default function CtaSection() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute top-0 right-0 -bottom-1/4 w-full lg:w-2/3 bg-gradient-to-l from-secondary/40 via-secondary/20 to-transparent" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}>
             <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NTg5NTMwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaborating"
                data-ai-hint="team meeting"
                fill
                className="object-cover opacity-10"
            />
        </div>

        <div className="relative container mx-auto px-4 md:px-6 py-20 sm:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedContent>
                    <div className="max-w-lg">
                        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-white">Best Offer - Join Us Today</h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            It is one of the best IT company & training institutes in Lucknow. Hanumant Technology offers top IT services and 100% job-oriented training programs at a reasonable price.
                        </p>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Those interested in the internship and services on web design, website development, full-stack development, graphic design, video editing, digital marketing, AutoCAD, data science, data analytics, AI, and machine learning can apply now for getting the best deal.
                        </p>
                         <div className="mt-10">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg py-8 px-12 group relative overflow-hidden shadow-2xl shadow-secondary/20 hover:shadow-secondary/40 transition-shadow duration-300">
                                <span className="absolute inset-0 bg-white/10 transform scale-x-0 transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100"></span>
                                <span className="relative">Contact Now</span>
                            </Button>
                        </div>
                    </div>
                </AnimatedContent>
                
                {/* Empty div for grid layout */}
                <div></div>
            </div>
        </div>
    </section>
  );
}
