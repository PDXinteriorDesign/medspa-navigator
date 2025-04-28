
import React from "react";
import { Route } from "react-router-dom";

// Import Chemical Peels Location Pages
import ChemicalPeelsBrooklyn from "../../pages/treatments/locations/ChemicalPeelsBrooklyn";
// We'll only create the Brooklyn route for now

const ChemicalPeelsRoutes = (
  <>
    <Route path="treatments/chemical-peels/brooklyn" element={<ChemicalPeelsBrooklyn />} />
  </>
);

export default ChemicalPeelsRoutes;
