import one from "@/assets/Elegant Portrait Close-Up.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <section className=" py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-center md:gap-32">
          <div className=" relative">
            <Image
              src={one}
              alt="one"
              className=" w-[280px] h-[400px] object-cover"
            />
          </div>
          <div className=" mt-10 md:mt-0 text-sm md:text-[16px] font-semibold">
            <ul className=" uppercase">
              <li>Visualbusiness</li>
              <li>Milan/New York/Barcellona</li>
            </ul>
            <ul className=" mt-2 uppercase">
              <li>Humans</li>
              <li>Production</li>
              <li>Direction</li>
              <li>Media</li>
            </ul>
            <ul className=" mt-4 ml-16">
              <li>Milan</li>
              <li>Via dell&apos;Orto 46.</li>
              <li>20129 italy</li>
            </ul>
            <ul className=" mt-2 ml-16">
              <li>Barcellona</li>
              <li>Private Office</li>
              <li>Spain</li>
            </ul>
            <ul className=" mt-2 ml-16">
              <li>New York</li>
              <li>Private Office</li>
              <li>United States</li>
            </ul>
            <ul className=" mt-4 uppercase">
              <li>Contact</li>
              <li>Generic</li>
              <li>Work</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
