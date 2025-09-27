import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, GraduationCap, HeartHandshake, Lightbulb } from 'lucide-react';
import { AnimatedContent } from '@/components/shared/animated-content';

const values = [
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: 'Innovation',
    description: 'We foster a culture of creativity and forward-thinking, encouraging new ideas to flourish.',
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-accent" />,
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality in our curriculum and teaching methodologies.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-accent" />,
    title: 'Commitment',
    description: 'Our students\' success is our success. We are dedicated to supporting them on their journey.',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: 'Adaptability',
    description: 'In a fast-paced tech world, we stay agile, constantly updating our courses to reflect industry trends.',
  },
];

export default function CoreValuesSection() {
  return (
    <section id="values" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-foreground/70">
              The principles that guide our mission to empower tech professionals.
            </p>
          </div>
        </AnimatedContent>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <AnimatedContent key={value.title} delay={index * 150}>
              <Card className="h-full text-center bg-background/60 dark:bg-card/60 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    {value.icon}
                  </div>
                  <CardTitle className="font-headline mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
