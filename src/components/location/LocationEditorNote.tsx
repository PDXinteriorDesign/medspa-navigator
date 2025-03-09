
import React from "react";
import { Star } from "lucide-react";

interface LocationEditorNoteProps {
  locationName: string;
}

const LocationEditorNote = ({ locationName }: LocationEditorNoteProps) => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-100">
      <div className="flex items-center mb-4">
        <Star size={20} className="text-medspa-gold mr-2" fill="currentColor" />
        <h3 className="text-xl font-serif font-medium">Editor's Note</h3>
      </div>
      <div className="bg-medspa-blue/20 p-6 rounded-lg text-gray-700">
        <p className="mb-3">
          Our team has carefully vetted each MedSpa in {locationName} to ensure they meet our exacting standards for excellence.
        </p>
        <p>
          From state-of-the-art technology to practitioners with impeccable credentials, these establishments represent the gold standard in aesthetic medicine.
        </p>
      </div>
    </div>
  );
};

export default LocationEditorNote;
