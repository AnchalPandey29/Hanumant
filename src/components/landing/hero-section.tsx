import { Button } from '@/components/ui/button';
import { AnimatedContent } from '../shared/animated-content';
import { InteractiveVisual } from './interactive-visual';

const GridPattern = () => (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-blue-950/40 stroke-blue-500/30 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
          <path d="M.5 80V.5H80" fill="none" strokeDasharray="4 4"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
    </svg>
  );


export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-900 opacity-90"></div>
      <GridPattern />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiPjxwYXRoIGQ9Ik0wIC41SDMybTAtMTZ2MzJNMTAgMC41SDIybTAtMTZ2MzJNMjAgMC41SDIybTAtMTZ2MzJNMCAxMC41SDMybTAtMTZ2MzJNMCAyMC41SDMybTAtMTZ2MzIiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <AnimatedContent>
                    <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                        Best IT Company & No.1 Training Institute
                    </h1>
                </AnimatedContent>
                <AnimatedContent delay={150}>
                    <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-white/80 md:text-xl">
                        Hanumant Technology is the Best IT Company & Training Institute in Lucknow. We provide #1 IT Services and Training programs with 100% job placement.
                    </p>
                </AnimatedContent>
                <AnimatedContent delay={300} className="slide-up">
                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg py-7 px-8">
                            Start Learning Today
                        </Button>
                        <Button size="lg" variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400/10 hover:text-teal-300 rounded-full text-lg py-7 px-8">
                            Explore Programs
                        </Button>
                    </div>
                </AnimatedContent>
            </div>
            <div className="hidden md:block">
                <AnimatedContent delay={200}>
                    <InteractiveVisual />
                </AnimatedContent>
            </div>
        </div>
      </div>
    </section>
  );
}
