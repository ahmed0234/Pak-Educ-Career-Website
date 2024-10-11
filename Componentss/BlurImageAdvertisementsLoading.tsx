"use client";
import Image from "next/image";
import { useState } from "react";

const BlurImageAdvertisementsLoading = ({ university }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      quality={65} // {number 1-100}
      alt="Advertisement Pic"
      src={university.hrAdmissionNotice}
      width={600}
      height={600}
      objectFit="cover"
      className={`transition-all duration-300 ease-in-out ${
        isLoading ? "blur-3xl bg-zinc-600" : "blur-0"
      }`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default BlurImageAdvertisementsLoading;
