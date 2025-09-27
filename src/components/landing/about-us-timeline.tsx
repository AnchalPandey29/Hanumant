import { AnimatedContent } from '@/components/shared/animated-content';
import { Building, Rocket, Trophy, Users } from 'lucide-react';

const timelineEvents = [
  {
    year: '2018',
    title: 'Inception',
    description: 'Hanumant Technology was founded with a vision to revolutionize tech education.',
    icon: <Rocket className="h-5 w-5 text-background" />,
  },
  {
    year: '2019',
    title: 'First 100 Students',
    description: 'We proudly trained our first batch of 100 students, launching their careers in tech.',
    icon: <Users className="h-5 w-5 text-background" />,
  },
  {
    year: '2021',
    title: 'Expanded Curriculum',
    description: 'Introduced new courses in Data Science and Cloud Computing to meet industry demands.',
    icon: <Building className="h-5 w-5 text-background" />,
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Awarded "Best Emerging Tech Training Institute" for our commitment to excellence.',
    icon: <Trophy className="h-5 w-5 text-background" />,
  },
];

export default function AboutUsTimeline() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Journey</h2>
            <p className="mt-4 text-lg text-foreground/70">
              A timeline of our growth, milestones, and achievements.
            </p>
          </div>
        </AnimatedContent>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-12">
              <AnimatedContent className="w-full flex" delay={index * 200}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left ml-auto'}`}>
                  <div className="p-6 rounded-xl bg-background shadow-md border">
                    <p className="font-headline text-2xl font-bold text-secondary">{event.year}</p>
                    <h3 className="font-headline text-xl font-semibold mt-2 text-primary">{event.title}</h3>
                    <p className="mt-2 text-foreground/70">{event.description}</p>
                  </div>
                </div>
              </AnimatedContent>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center ring-8 ring-slate-50 dark:ring-slate-900">
                {event.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
