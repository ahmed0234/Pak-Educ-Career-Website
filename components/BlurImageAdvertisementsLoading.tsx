"use client";

const BlurImageAdvertisementsLoading = ({ university }) => {
  return (
    <div className="relative w-[350px] h-[350px] sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px]">
      <img
        alt="Advertisement Pic"
        src={university.hrAdmissionNotice}
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
  );
};

export default BlurImageAdvertisementsLoading;
