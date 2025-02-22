import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
        <div className="mx-auto py-8 px-6 text-center bg-gray-900">
        <p className="text-gray-100 text-xl">
            Let's work together! Feel free to reach out!.
        </p>

        {/* Contact Details */}
        <div className="mt-6 space-y-4">
            <p className="text-lg text-gray-100">
            📧 Email:  
            <a href="mailto:victor.cristian.st@gmail.com" className="text-yellow-500 font-semibold hover:underline">
                email
            </a>
            </p>
            <p className="text-lg text-gray-100">
            🔗 LinkedIn:   
            <a href="https://www.linkedin.com/in/victor-cristian-s-70577b239/" target="_blank" rel="noopener noreferrer"
                className="text-yellow-500 font-semibold hover:underline">
                linkedin
            </a>
            </p>
            <p className="text-lg text-gray-100">
            🔗 UpWork:   
            <a href="https://www.upwork.com/freelancers/~01e1278ab489979deb/" target="_blank" rel="noopener noreferrer"
                className="text-yellow-500 font-semibold hover:underline">
                upwork
            </a>
            </p>
        </div>
        
        </div>
    </section>
  );
};

export default Contact;

