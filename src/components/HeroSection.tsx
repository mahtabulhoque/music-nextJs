import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
           <div className='p-4 relative z-10 w-full text-center'>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Welcome To Master of Music</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Master of Music is your ultimate destination for exploring the world of melodies, harmonies, and rhythm. Whether you are a passionate musician, a budding artist, or simply a music lover, we bring you the finest content to deepen your understanding and appreciation of music.
            </p>
            <div className="mt-4">
                <Link href={'/courses'}>
                  Explore Courses
                </Link>
            </div>
           </div>
        </div>
        
    );
};

export default HeroSection;