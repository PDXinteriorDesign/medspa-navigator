
import React from "react";
import { Route } from "react-router-dom";

// Photofacials Location Pages
import PhotofacialsManhattan from "../../pages/treatments/locations/PhotofacialsManhattan";
import PhotofacialsSoHo from "../../pages/treatments/locations/PhotofacialsSoHo";
import PhotofacialsUpperEastSide from "../../pages/treatments/locations/PhotofacialsUpperEastSide";
import PhotofacialsTribeca from "../../pages/treatments/locations/PhotofacialsTribeca";
import PhotofacialsMidtown from "../../pages/treatments/locations/PhotofacialsMidtown";
import PhotofacialsBrooklyn from "../../pages/treatments/locations/PhotofacialsBrooklyn";
import PhotofacialsWilliamsburg from "../../pages/treatments/locations/PhotofacialsWilliamsburg";
import PhotofacialsHamptons from "../../pages/treatments/locations/PhotofacialsHamptons";

const PhotofacialsRoutes = (
  <>
    {/* Photofacials Location Routes */}
    <Route path="photofacials/manhattan" element={<PhotofacialsManhattan />} />
    <Route path="photofacials/soho" element={<PhotofacialsSoHo />} />
    <Route path="photofacials/tribeca" element={<PhotofacialsTribeca />} />
    <Route path="photofacials/upper-east-side" element={<PhotofacialsUpperEastSide />} />
    <Route path="photofacials/midtown" element={<PhotofacialsMidtown />} />
    <Route path="photofacials/brooklyn" element={<PhotofacialsBrooklyn />} />
    <Route path="photofacials/williamsburg" element={<PhotofacialsWilliamsburg />} />
    <Route path="photofacials/hamptons" element={<PhotofacialsHamptons />} />
  </>
);

export default PhotofacialsRoutes;
