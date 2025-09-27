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
import Autoplay from "embla-carousel-autoplay"


const students = [
    { name: 'Abhishek Saini', role: 'Graphic Designer' },
    { name: 'Abhishek Tiwari', role: 'Full-Stack Developer' },
    { name: 'Akriti Kumari', role: 'Data Analyst' },
    { name: 'Nitika Pandey', role: 'Full-Stack Developer' },
    { name: 'Nida Ansari', role: 'Graphic Designer' },
    { name: 'Ankesh Kumar', role: 'Data Analyst' },
    { name: 'Arshlan', role: 'Data Scientist' },
    { name: 'Asha Sharma', role: 'Full-Stack Developer' },
    { name: 'Shivam Pandey', role: 'Digital Marketing' },
    { name: 'Preeti Kumari', role: 'Digital Marketing' },
    { name: 'Harshit Mishra', role: 'AutoCAD Engineer' },
    { name: 'Anuj Singh', role: 'AutoCAD Engineer' },
];


export default function StudentShowcase() {
    const studentImages = PlaceHolderImages.filter(img => img.id.startsWith('student-'));

  return (
    <section id="students" className="py-20 sm:py-32 bg-slate-100/50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5" style={{maskImage: "linear-gradient(to bottom, transparent, black, black, transparent)"}}></div>

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
                plugins={[
                    Autoplay({
                      delay: 2000,
                      stopOnInteraction: true,
                    }),
                  ]}
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="w-full max-w-7xl mx-auto"
            >
                <CarouselContent className="-ml-4">
                    {students.map((student, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
                        <div className="p-1 h-full">
                        <Card className="h-full overflow-hidden group rounded-2xl shadow-lg border border-transparent hover:border-secondary transition-all duration-300">
                            <CardContent className="relative flex flex-col aspect-[3/4] items-center justify-end p-0">
                                <Image
                                    src={studentImages[index % studentImages.length]?.imageUrl || `https://picsum.photos/seed/student${index}/400/500`}
                                    alt={student.name}
                                    data-ai-hint={studentImages[index % studentImages.length]?.imageHint || "person portrait"}
                                    width={400}
                                    height={500}
                                    className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                <div className="relative p-6 text-white text-center w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                                    <h3 className="font-headline text-2xl font-bold">{student.name}</h3>
                                    <p className="text-sm text-secondary font-semibold uppercase tracking-wider">{student.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex left-[-50px] h-12 w-12 bg-background/80 hover:bg-background shadow-lg backdrop-blur-sm" />
                <CarouselNext className="hidden sm:flex right-[-50px] h-12 w-12 bg-background/80 hover:bg-background shadow-lg backdrop-blur-sm" />
            </Carousel>
        </AnimatedContent>
      </div>
       <style jsx>{`
        .bg-grid-slate-900\\[\\/0\\.04\\] {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%230f172a' stroke-dasharray='1 31'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-400\\[\\/0\\.05\\] {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%2394a3b8' stroke-dasharray='1 31'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
    `}</style>
    </section>
  );
}
