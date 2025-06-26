import React, { useState } from "react";
import Step1_AidDetails from "../components/reques_form_steps/Step1_AidDetails";
import Step3_Contact from "../components/reques_form_steps/Step3_Contact";
import Step4_ReviewSubmit from "../components/reques_form_steps/Step4_ReviewSubmit";
import Step2_Location from "../components/reques_form_steps/Step2_Location";

const AidRequestForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    aidType: "",
    description: "",
    location: "",
    phone: "",
    secondaryPhone: "",
    email: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData) =>
    setFormData((prev) => ({ ...prev, ...newData }));

  const handleSubmit = () => {
    console.log("Submitting full form:", formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1_AidDetails
            data={formData}
            update={updateFormData}
            next={nextStep}
          />
        );
      case 2:
        return (
          <Step2_Location
            data={formData}
            update={updateFormData}
            next={nextStep}
            back={prevStep}
          />
        );
      case 3:
        return (
          <Step3_Contact
            data={formData}
            update={updateFormData}
            next={nextStep}
            back={prevStep}
          />
        );
      case 4:
        return (
          <Step4_ReviewSubmit
            data={formData}
            update={updateFormData}
            onSubmit={handleSubmit}
            next={nextStep}
            back={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[960px] flex-1">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AidRequestForm;
