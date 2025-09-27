import { Briefcase, Users, Clock, Award } from 'lucide-react';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { AnimatedContent } from '@/components/shared/animated-content';

const stats = [
  { icon: <Briefcase className="h-10 w-10 text-secondary" />, value: 340, label: 'Projects', suffix: '+' },
  { icon: <Clock className="h-10 w-10 text-secondary" />, value: 225060, label: 'Hours Work', suffix: '+' },
  { icon: <Users className="h-10 w-10 text-secondary" />, value: 16900, label: 'Students', suffix: '+' },
  { icon: <Award className="h-10 w-10 text-secondary" />, value: 224, label: 'Awards Won', suffix: '+' },
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
