import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Step3_Location = ({ data, update, next, back }) => {
  const [location, setLocation] = useState(data.location || "");
  const [coords, setCoords] = useState(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    if (location) {
      fetchCoordinates(location);
    }
  }, [location]);

  const fetchCoordinates = async (address) => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );
      const data = await res.json();
      if (data.status === "OK") {
        const loc = data.results[0].geometry.location;
        setCoords(loc);
      } else {
        setCoords(null);
      }
    } catch (err) {
      console.error("Error fetching coordinates:", err);
      setCoords(null);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    update({ location: value });
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101519] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Request Aid
              </p>
            </div>

            {/* Step Indicator */}
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-[#101519] text-base font-medium leading-normal">
                  Step 3 of 4
                </p>
              </div>
              <div className="rounded bg-[#d3dce3]">
                <div
                  className="h-2 rounded bg-[#d7e7f3]"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            {/* Location Input */}
            <h3 className="text-[#101519] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Location
            </h3>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#5a768c] flex border-none bg-[#e9eef1] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Enter your location"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101519] focus:outline-0 focus:ring-0 border-none bg-[#e9eef1] focus:border-none h-full placeholder:text-[#5a768c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={location}
                    onChange={handleLocationChange}
                  />
                </div>
              </label>
            </div>

            {/* Map Preview */}
            <div className="flex px-4 py-3 h-64">
              {loadError ? (
                <p className="text-red-500">Failed to load map</p>
              ) : !isLoaded ? (
                <p className="text-gray-500">Loading map...</p>
              ) : coords ? (
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  center={coords}
                  zoom={14}
                >
                  <Marker position={coords} />
                </GoogleMap>
              ) : (
                <div className="flex items-center justify-center w-full bg-gray-200 rounded-xl">
                  <p className="text-gray-500">Map preview will appear here</p>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#e9eef1] text-[#101519] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={back}
              >
                <span className="truncate">Back</span>
              </button>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#d7e7f3] text-[#101519] text-sm font-bold leading-normal tracking-[0.015em] ml-4"
                onClick={() => {
                  if (!location) {
                    alert("Please enter your location");
                    return;
                  }
                  next();
                }}
              >
                <span className="truncate">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3_Location;
