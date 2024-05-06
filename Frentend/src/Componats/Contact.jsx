import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-6">
            Have a question or feedback? We'd love to hear from you! Feel free to reach out to us using any of the following methods:
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0a10 10 0 015.787 16.978L17.75 20l-1.768-2.683A10 10 0 1110 0zm0 2a8 8 0 100 16A8 8 0 0010 2zm-.666 12.834A4 4 0 1114 10c0 .553-.047 1.092-.136 1.624-.248.662-.496 1.18-.67 1.352-.174.173-.69.42-1.384.42-.693 0-1.21-.248-1.384-.42-.174-.173-.422-.69-.67-1.352C7.048 11.092 7 10.553 7 10c0-1.104.447-1.684.667-2.001.22-.318.721-.507 1.333-.507.612 0 1.113.19 1.333.507.22.317.666.897.666 2.001z" clipRule="evenodd" />
              </svg>
              <span>Phone: 123-456-7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.293 3.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-9-9a1 1 0 111.414-1.414L8 10.586V5a1 1 0 112 0v5.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Email: info@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 4a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12zm-4.34 5.614l-1.106 3.527a.308.308 0 01-.29.234h-.548a.308.308 0 01-.29-.234L11.34 9.614 8.84 14h2.32c.171 0 .324.097.4.25l1.12 2.25 1.12-2.25c.076-.153.229-.25.4-.25h2.32l-2.5-4.386zM4 6a2 2 0 00-2 2v8a2 2 0 002 2h2v-2H4V8h10V6H4z" clipRule="evenodd" />
              </svg>
              <span>Address: 123 Bookstore Street, Cityville, ABC123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
