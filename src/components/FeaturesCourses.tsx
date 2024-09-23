"use client";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { Button } from "@/components/ui/moving-borders";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturesCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 bg-transparent">
      <div>
        <div className="text-center">
          <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">
            FEATURES COURSES
          </h2>
          <p className="text-2xl mt-2 leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn From Master Of Music
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image src={course.image} alt="image" width={300} height={300} className="rounded-2xl p-2"/>
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`} className="text-yellow-200 mt-3">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <Button className="text-white border-none font-bold text-[15px]">
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturesCourses;
