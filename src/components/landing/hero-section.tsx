import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedContent } from '../shared/animated-content';

const GridPattern = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 h-full w-full fill-secondary/10 stroke-secondary/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="80"
        height="80"
        patternUnits="userSpaceOnUse"
        x="100%"
        y="-1"
        patternTransform="translate(-50)"
      >
        <path d="M.5 80V.5H80" fill="none"></path>
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
  </svg>
);


export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center bg-gradient-to-br from-background via-sky-50 to-blue-100 overflow-hidden">
      <GridPattern />
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
            <AnimatedContent>
                <div className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
                    Innovate. Educate. Elevate.
                </div>
            </AnimatedContent>
            <AnimatedContent delay={150}>
                <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                    Shaping the Future of Technology, One Student at a Time.
                </h1>
            </AnimatedContent>
            <AnimatedContent delay={300}>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
                    At Hanumant Technology, we bridge the gap between ambition and expertise with cutting-edge training programs designed for the tech leaders of tomorrow.
                </p>
            </AnimatedContent>
            <AnimatedContent delay={450}>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Button size="lg" variant="secondary">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-background/50">
                    About Us
                    </Button>
                </div>
            </AnimatedContent>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
