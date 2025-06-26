import React from "react";

const Step2_Location = ({ data, update, next, back }) => {
  const handleChange = (e) => {
    update({ [e.target.name]: e.target.value });
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
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
                  Step 2 of 4
                </p>
              </div>
              <div className="rounded bg-[#d3dce3]">
                <div
                  className="h-2 rounded bg-[#d7e7f3]"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <h3 className="text-[#101519] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Urgency
            </h3>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d3dce3] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d3dce3] bg-transparent text-transparent checked:border-[#d7e7f3] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#d7e7f3]"
                  name="urgency"
                  value="immediate"
                  checked={data.urgency === "immediate"}
                  onChange={handleChange}
                />
                <div className="flex grow flex-col">
                  <p className="text-[#101519] text-sm font-medium leading-normal">
                    Immediate
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d3dce3] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d3dce3] bg-transparent text-transparent checked:border-[#d7e7f3] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#d7e7f3]"
                  name="urgency"
                  value="24hours"
                  checked={data.urgency === "24hours"}
                  onChange={handleChange}
                />
                <div className="flex grow flex-col">
                  <p className="text-[#101519] text-sm font-medium leading-normal">
                    Within 24 Hours
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d3dce3] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d3dce3] bg-transparent text-transparent checked:border-[#d7e7f3] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#d7e7f3]"
                  name="urgency"
                  value="72hours"
                  checked={data.urgency === "72hours"}
                  onChange={handleChange}
                />
                <div className="flex grow flex-col">
                  <p className="text-[#101519] text-sm font-medium leading-normal">
                    Within 72 Hours
                  </p>
                </div>
              </label>
            </div>

            {/* description */}
             <h3 className="text-[#101519] text-lg font-bold px-4 pt-4">
              Optional Description
            </h3>
            <div className="px-4 py-2">
              <textarea
                name="description"
                value={data.description || ""}
                onChange={handleChange}
                placeholder="Provide additional details about your need (e.g., medical condition, number of people affected)..."
                rows={4}
                maxLength={500}
                className="w-full resize-none rounded-xl bg-[#e9eef1] text-[#101519] placeholder-[#5a768c] p-4 text-base font-normal focus:outline-none"
              />
              <p className="text-sm text-gray-500 mt-1 text-right">
                {data.description?.length || 0}/500 characters
              </p>
            </div>


            <div className="flex justify-between px-4 py-3">
              {/* back btn */}
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#e9eef1] text-[#101519] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={back}
              >
                <span className="truncate">Back</span>
              </button>

              {/* next btn */}
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

export default Step2_Location;
