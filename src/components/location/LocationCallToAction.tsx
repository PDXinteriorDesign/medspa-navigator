
import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

interface LocationCallToActionProps {
  locationName: string;
}

const LocationCallToAction = ({ locationName }: LocationCallToActionProps) => {
  return (
    <div className="bg-medspa-teal/10 rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-3">Book a MedSpa in {locationName}</h3>
      <p className="text-sm text-gray-700 mb-4">
        Ready to experience the best aesthetic treatments {locationName} has to offer? Compare providers, read reviews, and book your appointment today.
      </p>
      <Button className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
        <CalendarDays size={18} className="mr-2" />
        Find Available Appointments
      </Button>
    </div>
  );
};

export default LocationCallToAction;
