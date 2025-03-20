
/// <reference types="vite/client" />

interface Window {
  hbspt?: {
    forms: {
      create: (config: {
        portalId: string;
        formId: string;
        region: string;
        target?: string;
      }) => void;
    };
  };
}
