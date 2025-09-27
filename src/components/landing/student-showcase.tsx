'use client'

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AnimatedContent } from '@/components/shared/animated-content';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const students = [
  { name: 'Priya Sharma', company: 'Google', story: 'Landed a dream job as a Software Engineer at Google.' },
  { name: 'Rohan Verma', company: 'Microsoft', story: 'Transitioned to a Data Scientist role at Microsoft.' },
  { name: 'Anjali Mehta', company: 'Amazon', story: 'Became a Cloud Architect at AWS after our program.' },
  { name: 'Sameer Khan', company: 'Netflix', story: 'Now a Senior Frontend Developer at Netflix.' },
  { name: 'Neha Desai', company: 'Meta', story: 'Building the metaverse as a Product Manager at Meta.' },
];

export default function StudentShowcase() {
    const studentImages = PlaceHolderImages.filter(img => img.id.startsWith('student-'));

  return (
    <section id="students" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900"></div>
       <div className="absolute inset-0 opacity-20 dark:opacity-30" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'%23a0aec0\' fill-opacity=\'0.1\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M11 0l5 20-5-5L6 20 11 0zm44 0l5 20-5-5L50 20 55 0zm-22 40l5 20-5-5L28 60 33 40zm44 0l5 20-5-5L72 60 77 40z\'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")'}}></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <AnimatedContent>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Hall of Achievement</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Meet the talented individuals who have transformed their careers with us.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent delay={150}>
            <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
            >
            <CarouselContent className="-ml-4">
                {students.map((student, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1 h-full">
                    <Card className="overflow-hidden group rounded-2xl shadow-lg h-full transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 border-transparent">
                        <CardContent className="relative flex flex-col aspect-[4/5] items-center justify-center p-0">
                        <Image
                            src={studentImages[index % studentImages.length]?.imageUrl || `https://picsum.photos/seed/student${index}/400/500`}
                            alt={student.name}
                            data-ai-hint={studentImages[index % studentImages.length]?.imageHint || "person portrait"}
                            width={400}
                            height={500}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-300 group-hover:bottom-1/3">
                            <h3 className="font-headline text-2xl font-bold">{student.name}</h3>
                            <p className="text-sm text-white/80">Placed at {student.company}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-black/50 backdrop-blur-sm text-white opacity-0 transform translate-y-1/2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out h-1/3 flex items-center justify-center">
                            <p className="text-sm italic">"{student.story}"</p>
                        </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-[-50px] h-10 w-10 bg-background/80 hover:bg-background shadow-md backdrop-blur-sm" />
            <CarouselNext className="hidden sm:flex right-[-50px] h-10 w-10 bg-background/80 hover:bg-background shadow-md backdrop-blur-sm" />
            </Carousel>
        </AnimatedContent>
      </div>
    </section>
  );
}
