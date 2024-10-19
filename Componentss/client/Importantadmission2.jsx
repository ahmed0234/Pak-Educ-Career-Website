"use client"
import Link from "next/link";
import { Navigation, Scrollbar,  Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";



const Importantadmission2 = ({data}) => {
  return (
    <div className="slider-container mt-8">
    <Swiper
        spaceBetween={30} // space between slides
        slidesPerView={1} // shows 4 slides at once
        navigation={true} // enables navigation arrows
        pagination={{ clickable: true }} // enables pagination (optional)
        autoplay={{
            delay: 3200, // autoplay every 3 seconds
            disableOnInteraction: false, // autoplay won't stop after user interaction
        }}
        loop={true} // loop the slides
        modules={[Navigation, Autoplay, Scrollbar]} // importing necessary modules
        breakpoints={{
            1024: {
                slidesPerView: 2,
            },
          }}
        >

            {data?.map((university, idx)=> (
                    <SwiperSlide key={idx}>
                        <Link href={`/university/${university._id}`}>
                         <div className="flex gap-4 px-4 py-2 h-[26rem] w-full bg-zinc-900 rounded-xl"> 
                            <div className="h-full w-1/2 max-2xl:w-full border relative">
                                <Image src={university.hrAdmissionNotice} alt="Picture" fill quality={100} priority={true}/>
                            </div>
                            <div className="h-full my-auto flex flex-col gap-6 justify-center">
                                <div className=" px-5 py-3  rounded-full bg-gradient-to-b from-[#fee02d] to-[#fa8900]">
                                    <h1 class={`max-2xl:text-sm text-center text-transparent bg-clip-text bg-gradient-to-b from-black to-black  font-bold`}>{university.name}</h1>
                                </div>

                                <div className=" px-5 py-3  rounded-full bg-gradient-to-b from-[#fee02d] to-[#fa8900]">
                                    <h1 class={`max-2xl:text-sm text-transparent bg-clip-text bg-gradient-to-b from-black to-black font-bold`}>Sector: {university.sector}</h1>
                                </div>

                                <div className=" px-5 py-3  rounded-full bg-gradient-to-b from-[#fee02d] to-[#fa8900]">
                                    <h1 className={`text-transparent bg-clip-text bg-gradient-to-b from-black to-black font-bold`}>
                                            Deadline-Date: {new Date(university.admissionDates.deadlineDate).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                    </h1>
                                </div>

                                <div className=" px-5 py-3  rounded-full bg-gradient-to-b from-[#fee02d] to-[#fa8900]">
                                        <h1 className={`max-2xl:text-sm text-transparent bg-clip-text bg-gradient-to-b from-black to-black font-bold`}>Programs Offering: {" "}
                                            {university.programs.bsPrograms.isOpen && `BS, `} 
                                            {university.programs.mphilPrograms.isOpen && `Mphil, `} 
                                            {university.programs.phdPrograms.isOpen && `Phd, `} 
                                            {university.programs.adpPrograms.isOpen && `ADP, `} 
                                            {university.programs.bs5thPrograms.isOpen && `Bs5th, `} 
                                            {university.programs.diplomaPrograms.isOpen && `Diploma`}
                                        </h1>
                                </div>


                            </div>
                         </div>
                         </Link>
                    </SwiperSlide>
            ))}
    
        
        </Swiper>
  </div>
  )
}

export default Importantadmission2