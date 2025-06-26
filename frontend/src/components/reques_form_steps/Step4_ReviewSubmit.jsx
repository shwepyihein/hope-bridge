import React from "react";

const Step4_Contact = ({ data, update, next, back, onSubmit }) => {
  const handleChange = (e) => {
    update({ [e.target.name]: e.target.value });
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
                  Step 4 of 4
                </p>
              </div>
              <div className="rounded bg-[#d3dce3]">
                <div
                  className="h-2 rounded bg-[#d7e7f3]"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <h3 className="text-[#101519] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Contact Information
            </h3>

            {/* Primary Phone Number */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  name="phone"
                  placeholder="Phone Number (Required)"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101519] focus:outline-0 focus:ring-0 border-none bg-[#e9eef1] focus:border-none h-14 placeholder:text-[#5a768c] p-4 text-base font-normal leading-normal"
                  value={data.phone || ""}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Secondary Phone Number (Optional) */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  name="secondaryPhone"
                  placeholder="Alternative Phone Number (Optional)"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101519] focus:outline-0 focus:ring-0 border-none bg-[#e9eef1] focus:border-none h-14 placeholder:text-[#5a768c] p-4 text-base font-normal leading-normal"
                  value={data.secondaryPhone || ""}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Email */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  name="email"
                  placeholder="Email (Optional)"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101519] focus:outline-0 focus:ring-0 border-none bg-[#e9eef1] focus:border-none h-14 placeholder:text-[#5a768c] p-4 text-base font-normal leading-normal"
                  value={data.email || ""}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Navigation Buttons */}
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
                  if (!data.phone) {
                    alert("Please provide at least one phone number");
                    return;
                  }
                  onSubmit();
                  next();
                }}
              >
                <span className="truncate">Submit Request</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4_Contact;
