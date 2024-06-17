import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-md w-full max-h-screen overflow-y-auto">
      <div className="flex justify-end">
        <button className="text-gray-500 hover:text-gray-800 focus:outline-none" onClick={onClose}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  </div>
  );
};

export default Modal;