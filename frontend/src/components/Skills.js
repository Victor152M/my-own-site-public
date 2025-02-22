import React from 'react';


const Skills = () => {
  return (
    <section className="bg-gray-900 ">
        <div className="max-w-6xl mx-auto px-10 py-15">
            <div className="flex flex-wrap gap-3">
                {/* Frontend */}
                <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Frontend</h3>
                    <ul className="space-y-2 text-lg text-gray-200">
                    <li>React</li>
                    <li>HTML & CSS</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    </ul>
                </div>

                {/* Backend */}
                <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Backend</h3>
                    <ul className="space-y-2 text-lg text-gray-200">
                    <li>Python</li>
                    <li>Flask</li>
                    <li>SQL</li>
                    <li>Java</li>
                    </ul>
                </div>

                {/* Machine Learning */}
                <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Machine Learning</h3>
                    <ul className="space-y-2 text-lg text-gray-200">
                    <li>Scikit-learn</li>
                    <li>NumPy</li>
                    <li>Pandas</li>
                    <li>Matplotlib</li>
                    </ul>
                </div>

                {/* Other */}
                <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Other</h3>
                    <ul className="space-y-2 text-lg text-gray-200">
                    <li>Git & GitHub</li>
                    <li>C & C++</li>
                    <li>PostgreSQL</li>
                    <li>Linux</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;
