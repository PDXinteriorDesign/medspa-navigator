
import React from 'react';

const ServiceStyles: React.FC = () => {
  return (
    <style>
      {`
      .treatment-link {
        display: block;
        padding: 0.75rem 1rem;
        background-color: white;
        border: 1px solid #edf2f7;
        border-radius: 0.5rem;
        transition: all 0.2s;
        font-size: 0.95rem;
      }
      
      .treatment-link:hover {
        background-color: #f0f9ff;
        border-color: #bae6fd;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      `}
    </style>
  );
};

export default ServiceStyles;
