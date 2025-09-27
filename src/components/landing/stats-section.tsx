import { Briefcase, Smile, Star, Users } from 'lucide-react';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { AnimatedContent } from '@/components/shared/animated-content';

const stats = [
  { icon: <Smile className="h-10 w-10 text-secondary" />, value: 5000, label: 'Happy Students', suffix: '+' },
  { icon: <Briefcase className="h-10 w-10 text-secondary" />, value: 350, label: 'Partner Companies', suffix: '+' },
  { icon: <Star className="h-10 w-10 text-secondary" />, value: 4.9, label: 'Average Rating', decimals: 1 },
  { icon: <Users className="h-10 w-10 text-secondary" />, value: 50, label: 'Expert Instructors', suffix: '+' },
];

export default function StatsSection() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedContent key={index} delay={index * 150} className="text-center flex flex-col items-center">
              {stat.icon}
              <div className="mt-4 font-headline text-5xl font-bold text-primary">
                <AnimatedCounter value={stat.value} decimals={stat.decimals || 0} />
                {stat.suffix}
              </div>
              <p className="mt-2 text-foreground/70">{stat.label}</p>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
