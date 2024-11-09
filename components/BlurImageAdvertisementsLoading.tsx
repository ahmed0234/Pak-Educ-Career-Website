"use client";
import Image from "next/image";
import { useState } from "react";

const BlurImageAdvertisementsLoading = ({ university }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
  <div className="relative w-[350px] h-[350px] sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px]">
      <Image 
        quality={65} // {number 1-100}
        alt="Advertisement Pic"
        src={university.hrAdmissionNotice}
        fill
        objectFit="contain"
        className={`transition-all duration-300 ease-in-out  ${
          isLoading ? "blur-2xl bg-zinc-600" : "blur-0"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
</div>
  );
};

export default BlurImageAdvertisementsLoading;
