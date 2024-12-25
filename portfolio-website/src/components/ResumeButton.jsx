import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import Resume from "../assets/resume.pdf"

const ResumeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        type="button" 
        onClick={() => setIsOpen(true)}
        className="px-2 text-md text-center font-medium text-white h-12 w-30 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-800 active:bg-blue-900 active:scale-95 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-0"
      >
        <FileText size={20} />
        <p>My Resume</p>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-lg w-full max-w-4xl h-[80vh] p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <iframe
              src={Resume}
              className="w-full h-[calc(100%-2rem)]"
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeButton;