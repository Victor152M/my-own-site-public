import Me from '../assets/images/Me_300x400.jpg';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900">
      <div className="flex flex-col lg:flex-row max-w-6xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center sm:py-20">
          <section className="max-w-6xl px-6 py-12 mx-auto grid grid-cols-1 lg:grid-cols-1 items-center gap-8 ">
            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-4 text-xl max-w-2xl px-3">Hey, I'm Victor 👋</h1>

            {/* Description */}
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl max-w-2xl px-3">
              I'm a <strong>full-stack software engineer</strong> specializing in <strong>backend systems</strong> and <strong>machine learning</strong>.  
              I build scalable applications and am actively sharpening my frontend skills with React & Tailwind CSS.
            </p>


            <p className="mt-2 px-3 text-lg font-semibold text-white bg-gray-900 rounded-lg max-w-2xl">
            💰 Only <span className="text-yellow-400">$10/hr</span> while I build my portfolio!
            </p>

            <div className="mt-4 px-3 transform transition duration-300 ease-in-out hover:-translate-y-1 ">
                <a href="https://www.upwork.com/freelancers/~01e1278ab489979deb?viewMode=1" className="relative px-6 py-3 font-bold text-gray-900 bg-yellow-400 rounded-lg max-w-2xl hover:bg-yellow-500">
                🚀 Work With Me
                </a>
            </div>
          </section>
        <div className="lg:mt-0 lg:col-span-5 lg:flex ml-auto mt-8 lg:mt-2 pr-7">
            <img
                src={Me}
                alt="hero"
                className="rounded-lg object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
