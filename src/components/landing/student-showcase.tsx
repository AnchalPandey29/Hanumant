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
    <section id="students" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Alumni Success</h2>
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
            className="w-full max-w-5xl mx-auto"
            >
            <CarouselContent>
                {students.map((student, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    <Card className="overflow-hidden group rounded-xl">
                        <CardContent className="relative flex aspect-square items-center justify-center p-0">
                        <Image
                            src={studentImages[index % studentImages.length]?.imageUrl || `https://picsum.photos/seed/student${index}/400/400`}
                            alt={student.name}
                            data-ai-hint={studentImages[index % studentImages.length]?.imageHint || "person portrait"}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 opacity-100 group-hover:opacity-0">
                            <h3 className="font-headline text-2xl font-bold text-white">{student.name}</h3>
                            <p className="text-sm text-white/80">Placed at {student.company}</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                            <p className="text-white italic">"{student.story}"</p>
                        </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </AnimatedContent>
      </div>
    </section>
  );
}
