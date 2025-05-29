import { sampleData } from "@/sampleData";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getPageData = (slug: string) => {
  return sampleData.find((sample) => sample.slug === slug);
};
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params; // انتظر params
  const slug = resolvedParams.slug;

  const data = getPageData(slug);
  if (!data) return notFound();

  return (
    <>
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center ">
        <div className="w-[350px] h-[450px] md:w-[500px] md:h-[600px]  relative">
          <Image
            src={data.url}
            alt="url"
            fill
            className=" size-full object-top object-cover"
          />
        </div>
        <div className=" absolute left-5 md:left-20 top-15 md:bottom-20">
          <h1 className=" font-bold">{data.author}</h1>
        </div>
      </section>
      <section className=" h-[60vh] md:h-screen  flex items-center justify-start md:justify-end">
        <div className="relative w-[350px] h-[450px] md:w-[500px] md:h-[600px]">
          <Image
            src={data.images[1]}
            alt={`Thumbnail`}
            fill
            className="object-cover object-top size-full"
          />
        </div>
      </section>
      <section className=" h-[80vh] md:h-screen flex items-center justify-end md:justify-start">
        <div className="relative w-[350px] h-[450px] md:w-[500px] md:h-[600px]">
          <Image
            src={data.images[2]}
            alt={`Thumbnail`}
            fill
            className="object-cover object-top size-full"
          />
        </div>
      </section>
      <section className=" w-full md:w-2/3 h-[60vh] md:h-screen flex items-center justify-center gap-24">
        <div className="relative w-[500px] h-[300px] md:w-[250px] md:h-[350px]">
          <Image
            src={data.images[3]}
            alt={`Thumbnail`}
            fill
            className="object-cover object-top size-full"
          />
        </div>
        <div className="relative w-[500px] h-[400px] md:w-[250px] md:h-[450px] ">
          <Image
            src={data.images[0]}
            alt={`Thumbnail`}
            fill
            className="object-cover object-top size-full"
          />
        </div>
      </section>
      <section className=" md:mr-56 h-[60vh] md:h-screen flex items-center justify-end gap-24">
        <div className=" mt-96 relative w-[400px] h-[550px] md:w-[400px] md:h-[550px]">
          <Image
            src={data.images[4]}
            alt={`Thumbnail`}
            fill
            className="object-cover object-top size-full"
          />
        </div>
        <div className="relative w-[300px] h-[250px] md:w-[250px] md:h-[350px]">
          <Image
            src={data.images[2]}
            alt={`Thumbnail`}
            fill
            className="object-cover object-top size-full"
          />
        </div>
      </section>
    </>
  );
};

export default Page;
