// src/components/Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import eventer_home from '../assets/eventer_images/home.png'
import my_own_site_home from '../assets/portfolio_my_site_images/home.png'
import ml_project from '../assets/ML_projects/q_learning.png'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-900 px-6 py-10 flex justify-center items-center">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

        {/*Card 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <a href="https://github.com/Victor152M/Eventer">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={eventer_home}
              alt="Project 1"
            />
          </a>
          <div className="p-5">
            <a href="https://github.com/Victor152M/Eventer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Eventer
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-300">
              Eventer is a full-stack app built with Flask and PostgreSQL, featuring a secure login system and a scalable database for posting and attending events.
            </p>
            <a
              href="https://github.com/Victor152M/Eventer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-yellow-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-yellow-600"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={my_own_site_home}
              alt="Project 1"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               Portfolio Website
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-300">
              A sleek, responsive site built with React and Tailwind CSS to showcase my projects and skills. It features a clean design, smooth navigation and a structured layout.
            </p>
            <a
              href="https://github.com/Victor152M/Personal_Freelancing_Site"
              className="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-yellow-400 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-yellow-600"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>


        {/* Card 3 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={ml_project}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              University Machine Learning Projects
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-300">
              Exploring CNNs for image classification, boosting algorithms for predictive modeling, and creating data visualizations. Currently working on projects to deepen my understanding of ML and data science. These are not available on GitHub.
            </p>
           
          </div>
        </div>


      </div>
    </section>
  );
};

export default Portfolio;
