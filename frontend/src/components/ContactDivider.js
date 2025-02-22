const ContactDivider = () => {
  return (
    <div className="flex items-center my-0 bg-gray-900 py-12 justify-center">
      <div className="flex-grow h-px bg-gradient-to-r from-gray-900 to-yellow-400 max-w-2xl"></div>
      <span className="mx-4 text-yellow-400 font-bold text-2xl">Contact Me</span>
      <div className="flex-grow h-px bg-gradient-to-r from-yellow-400 to-gray-90 max-w-2xl"></div>
    </div>
  );
};

export default ContactDivider;
