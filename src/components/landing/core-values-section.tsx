import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BrainCircuit, GraduationCap, HeartHandshake, Lightbulb, Target, Eye, ArrowRight, Users, ShieldCheck } from 'lucide-react';
import { AnimatedContent } from '@/components/shared/animated-content';

const aboutUsCards = [
  {
    icon: <Target className="h-10 w-10 text-white/90" />,
    title: 'Our Mission',
    description: 'To deliver innovative and practical tech education that empowers individuals to achieve their full potential and bridges the talent gap in the industry.',
  },
  {
    icon: <Eye className="h-10 w-10 text-white/90" />,
    title: 'Our Vision',
    description: 'To be a global leader in technology training, recognized for our commitment to excellence, student success, and fostering a community of lifelong learners.',
  }
];

const values = [
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: 'Innovation',
    description: 'We foster a culture of creativity and forward-thinking, encouraging new ideas to flourish.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality in our curriculum and teaching methodologies.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-accent" />,
    title: 'Commitment',
    description: "Our students' success is our success. We are dedicated to supporting them on their journey.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: 'Adaptability',
    description: 'In a fast-paced tech world, we stay agile, constantly updating our courses to reflect industry trends.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Community',
    description: 'Building a supportive network of students, alumni, and industry partners.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Integrity',
    description: 'Upholding the highest ethical standards in all our interactions and operations.',
  },
];

export default function CoreValuesSection() {
  return (
    <section id="values" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: About Us */}
          <div className="space-y-12">
            <AnimatedContent>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">About Us</h2>
              <p className="mt-4 text-lg text-foreground/70">
                Founded on the principles of excellence and accessibility, Hanumant Technology has been a beacon for aspiring tech professionals. Our journey is one of passion, dedication, and a relentless drive to empower learners and build future leaders.
              </p>
            </AnimatedContent>
            <div className="grid sm:grid-cols-2 gap-6">
                {aboutUsCards.map((card, index) => (
                    <AnimatedContent key={card.title} delay={150 * (index + 1)}>
                        <div className="group relative rounded-2xl p-6 h-full bg-gradient-to-br from-secondary/80 to-primary/80 text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            <div className="absolute top-0 left-0 w-1/2 h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            <div className="relative z-10 space-y-4 h-full flex flex-col">
                                {card.icon}
                                <h3 className="font-headline text-2xl font-bold">{card.title}</h3>
                                <p className="text-primary-foreground/80 text-sm flex-1">{card.description}</p>
                            </div>
                        </div>
                    </AnimatedContent>
                ))}
            </div>
          </div>

          {/* Right Column: Core Values */}
          <div className="space-y-12">
            <AnimatedContent>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 text-lg text-foreground/70">
                    The principles that guide our mission to empower tech professionals.
                </p>
            </AnimatedContent>
            <TooltipProvider>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                    <AnimatedContent key={value.title} delay={index * 100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Card className="h-full text-center bg-background/60 dark:bg-card/60 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                                    <CardHeader className="items-center p-4 sm:p-6">
                                    <div className="rounded-full bg-accent/10 p-4">
                                        {value.icon}
                                    </div>
                                    <CardTitle className="font-headline text-base sm:text-lg mt-4">{value.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{value.description}</p>
                            </TooltipContent>
                        </Tooltip>
                    </AnimatedContent>
                ))}
                </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <AnimatedContent delay={500}>
            <div className="mt-24 text-center p-8 bg-background/50 rounded-2xl border shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4">Discover how our values shape your journey.</h3>
                <Button variant="secondary" size="lg" className="rounded-full group">
                    Explore Programs
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

// Add required icons to avoid breaking the build if they aren't used elsewhere.
// This is a workaround for tree-shaking issues in some environments.
const _ = { Users: Users, ShieldCheck: ShieldCheck };
