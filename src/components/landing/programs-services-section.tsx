import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Server, Briefcase, Laptop } from 'lucide-react';
import { AnimatedContent } from '@/components/shared/animated-content';

const programs = [
  { icon: <Code className="h-8 w-8 text-secondary" />, title: 'Full Stack Development', description: 'Master both front-end and back-end technologies.' },
  { icon: <Laptop className="h-8 w-8 text-secondary" />, title: 'Data Science & ML', description: 'Unlock insights from data with Python, and ML frameworks.' },
  { icon: <Server className="h-8 w-8 text-secondary" />, title: 'Cloud & DevOps', description: 'Learn to build and manage scalable infrastructure.' },
];

const services = [
  { icon: <Briefcase className="h-8 w-8 text-accent" />, title: 'Corporate Training', description: 'Upskill your workforce with custom-tailored tech programs.' },
  { icon: <Laptop className="h-8 w-8 text-accent" />, title: 'IT Consulting', description: 'Leverage our expertise to solve your most complex business challenges.' },
  { icon: <Code className="h-8 w-8 text-accent" />, title: 'Software Development', description: 'End-to-end development services to bring your ideas to life.' },
];

export default function ProgramsServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">What We Offer</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Comprehensive training and professional services to accelerate your growth.
            </p>
          </div>
        </AnimatedContent>

        <Tabs defaultValue="programs" className="w-full max-w-4xl mx-auto">
          <AnimatedContent delay={150}>
            <TabsList className="grid w-full grid-cols-2 h-12">
              <TabsTrigger value="programs" className="text-base">Training Programs</TabsTrigger>
              <TabsTrigger value="services" className="text-base">Professional Services</TabsTrigger>
            </TabsList>
          </AnimatedContent>
          
          <TabsContent value="programs">
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
              {programs.map((item, index) => (
                <AnimatedContent key={item.title} delay={index * 150}>
                  <Card className="h-full text-center hover:bg-slate-50 dark:hover:bg-card/80 transition-colors shadow-sm hover:shadow-md">
                    <CardHeader className="items-center">
                      {item.icon}
                      <CardTitle className="font-headline mt-2 text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedContent>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="services">
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
              {services.map((item, index) => (
                <AnimatedContent key={item.title} delay={index * 150}>
                  <Card className="h-full text-center hover:bg-slate-50 dark:hover:bg-card/80 transition-colors shadow-sm hover:shadow-md">
                    <CardHeader className="items-center">
                      {item.icon}
                      <CardTitle className="font-headline mt-2 text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedContent>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
