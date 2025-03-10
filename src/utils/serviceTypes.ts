
import React from "react";

export interface Review {
  rating: number;
  text: string;
  author: string;
  location: string;
  date: string;
}

export interface SeoContent {
  introduction: string[];
  beforeTreatment: string[];
  afterTreatment: string[];
  reviews: Review[];
  [key: number]: string;
  map: (callback: (paragraph: string, index: number) => React.ReactNode) => React.ReactNode[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingItem {
  type: string;
  averagePrice: number;
  minPrice: number;
  maxPrice: number;
}
