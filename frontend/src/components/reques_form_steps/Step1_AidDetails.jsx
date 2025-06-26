import React from "react";

const Step1_AidDetails = ({ data, update,next }) => {
  const handleChange = (e) => {
    update({ aidType: e.target.value });
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101519] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Request Aid
              </p>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-[#101519] text-base font-medium leading-normal">
                  Step 1 of 4
                </p>
              </div>
              <div className="rounded bg-[#d3dce3]">
                <div
                  className="h-2 rounded bg-[#d7e7f3]"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            <h3 className="text-[#101519] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Aid Details
            </h3>
            <div className="flex flex-wrap gap-3 p-4">
              <label
                className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border px-4 h-11 text-[#101519] relative cursor-pointer ${
                  data.aidType === "medical"
                    ? "border-[3px] px-3.5 border-[#d7e7f3]"
                    : "border border-[#d3dce3]"
                }`}
              >
                Medical
                <input
                  type="radio"
                  className="invisible absolute"
                  name="aid-type"
                  value="medical"
                  checked={data.aidType === "medical"}
                  onChange={handleChange}
                />
              </label>
              <label
                className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border px-4 h-11 text-[#101519] relative cursor-pointer ${
                  data.aidType === "food"
                    ? "border-[3px] px-3.5 border-[#d7e7f3]"
                    : "border border-[#d3dce3]"
                }`}
              >
                Food
                <input
                  type="radio"
                  className="invisible absolute"
                  name="aid-type"
                  value="food"
                  checked={data.aidType === "food"}
                  onChange={handleChange}
                />
              </label>
              <label
                className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border px-4 h-11 text-[#101519] relative cursor-pointer ${
                  data.aidType === "shelter"
                    ? "border-[3px] px-3.5 border-[#d7e7f3]"
                    : "border border-[#d3dce3]"
                }`}
              >
                Shelter
                <input
                  type="radio"
                  className="invisible absolute"
                  name="aid-type"
                  value="shelter"
                  checked={data.aidType === "shelter"}
                  onChange={handleChange}
                />
              </label>
              <label
                className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border px-4 h-11 text-[#101519] relative cursor-pointer ${
                  data.aidType === "other"
                    ? "border-[3px] px-3.5 border-[#d7e7f3]"
                    : "border border-[#d3dce3]"
                }`}
              >
                Other
                <input
                  type="radio"
                  className="invisible absolute"
                  name="aid-type"
                  value="other"
                  checked={data.aidType === "other"}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#d7e7f3] text-[#101519] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={() => {
                  if (!data.aidType) {
                    alert("Please select an aid type");
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

export default Step1_AidDetails;
