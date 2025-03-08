
import React from "react";
import { PricingItem } from "@/utils/serviceContent";

interface ServicePricingProps {
  serviceName: string;
  pricingInfo: PricingItem[];
}

const ServicePricing = ({ serviceName, pricingInfo }: ServicePricingProps) => {
  return (
    <div className="mt-8 mb-6">
      <h3 className="text-lg font-medium mb-3">{serviceName} Pricing in NYC</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-medspa-teal text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm">Treatment Type</th>
              <th className="py-3 px-4 text-left text-sm">Average Price</th>
              <th className="py-3 px-4 text-left text-sm">Price Range</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pricingInfo.map((item, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-3 px-4 text-sm">{item.type}</td>
                <td className="py-3 px-4 text-sm">${item.averagePrice}</td>
                <td className="py-3 px-4 text-sm">${item.minPrice} - ${item.maxPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        *Prices are approximate and may vary by provider and location. Contact MedSpas directly for exact pricing.
      </p>
    </div>
  );
};

export default ServicePricing;
