
import React from "react";
import { Route } from "react-router-dom";

// Fillers Location Pages
import FillersManhattan from "../../pages/treatments/locations/FillersManhattan";
import FillersSoHo from "../../pages/treatments/locations/FillersSoHo";
import FillersUpperEastSide from "../../pages/treatments/locations/FillersUpperEastSide";
import FillersTribeca from "../../pages/treatments/locations/FillersTribeca";
import FillersMidtown from "../../pages/treatments/locations/FillersMidtown";
import FillersBrooklyn from "../../pages/treatments/locations/FillersBrooklyn";
import FillersWilliamsburg from "../../pages/treatments/locations/FillersWilliamsburg";
import FillersHamptons from "../../pages/treatments/locations/FillersHamptons";

const FillersRoutes = (
  <>
    {/* Fillers Location Routes */}
    <Route path="fillers/manhattan" element={<FillersManhattan />} />
    <Route path="fillers/soho" element={<FillersSoHo />} />
    <Route path="fillers/tribeca" element={<FillersTribeca />} />
    <Route path="fillers/upper-east-side" element={<FillersUpperEastSide />} />
    <Route path="fillers/midtown" element={<FillersMidtown />} />
    <Route path="fillers/brooklyn" element={<FillersBrooklyn />} />
    <Route path="fillers/williamsburg" element={<FillersWilliamsburg />} />
    <Route path="fillers/hamptons" element={<FillersHamptons />} />
  </>
);

export default FillersRoutes;
