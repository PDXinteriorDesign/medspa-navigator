
import React from "react";

export interface ComparisonItem {
  category: string;
  option1Value: string | React.ReactNode;
  option2Value: string | React.ReactNode;
}

interface ServiceComparisonProps {
  title: string;
  option1Name: string;
  option2Name: string;
  items: ComparisonItem[];
  footnote?: string;
}

const ServiceComparison = ({ 
  title, 
  option1Name, 
  option2Name, 
  items,
  footnote
}: ServiceComparisonProps) => {
  return (
    <div className="my-8 bg-white rounded-lg border border-gray-100 overflow-hidden">
      <h3 className="text-xl font-serif font-medium p-6 border-b border-gray-100">
        {title}
      </h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-medspa-teal/10">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 w-1/3"></th>
              <th className="py-3 px-6 text-left text-sm font-medium text-medspa-teal">
                {option1Name}
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-medspa-teal">
                {option2Name}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                  {item.category}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {item.option1Value}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {item.option2Value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {footnote && (
        <div className="p-4 text-sm text-gray-500 border-t border-gray-100 bg-gray-50">
          {footnote}
        </div>
      )}
    </div>
  );
};

export default ServiceComparison;
