import { APPS } from "./constant";

export const getApp = () => {
   const subdomain = getSubdomain(window.location.hostname);

   const main = APPS.find((app) => app.main);

   if (!main) throw new Error("Must have a main app");

   if (subdomain === "") return main.app;

   const app = APPS.find((app) => subdomain === app.subdomain);

   return app ? app.app : main.app;
};


const getSubdomain = (location) => {
    const locationParts = location.split(".");

    let sliceTill = -2; 

    const isLocalHost = locationParts.slice(-1)[0] === "localhost";
    if (isLocalHost) sliceTill = -1; 

    return locationParts.length > Math.abs(sliceTill) 
        ? locationParts.slice(0, sliceTill).join(".") 
        : "";
};
