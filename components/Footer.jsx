import { DharmaGothicRegular } from '@/app/layout'
import Image from 'next/image'
import Script from 'next/script'


const Footer = () => {
  return (
    <footer className="relative bg-black text-white top-10">
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js" />
  {/* <!-- Wavy background --> */}
  <div className="absolute top-0 left-0 w-full h-16 bg-black">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="black" d="M0,224L1440,96L1440,320L0,320Z"></path>
    </svg>
  </div>
  
  {/* <!-- Footer content --> */}
  <div className="container mx-auto px-4 py-12 relative z-10">
    <div className=" flex flex-row max-md::flex-col justify-between items-center gap-6 flex-wrap">
      {/* <!-- Logo / Branding --> */}
      <div className="mb-6 lg:mb-0 ">
        <Image src={'/PECLOGO.png'} alt="Logo" width={120} height={120} quality={100}  priority={true} />
      </div>
      
      {/* <!-- Social Media Icons --> */}
      <div className="mb-6 lg:mb-0 flex space-x-8 text-lg  ">
        <a href="https://www.youtube.com/c/PakEduCareer1" target='_blank' className="hover:text-rose-500 hover:scale-125 duration-300"><i className="fa-brands fa-youtube text-2xl max-lg:text-xl"></i></a>
        <a href="https://www.facebook.com/PakEduCareer" target='_blank' className="hover:text-rose-500 hover:scale-125 duration-300"><i className="fab fa-facebook text-2xl max-lg:text-xl"></i></a>
        <a href="https://whatsapp.com/channel/0029VaDL9eoEwEk2fJOps31j"  target='_blank'className="hover:text-rose-500 hover:scale-125 duration-300"><i className="fa-brands fa-whatsapp text-2xl max-lg:text-xl"></i></a>
        <a href="https://www.instagram.com/pakeducareer" target='_blank' className="hover:text-rose-500 hover:scale-125 duration-300"><i className="fa-brands fa-instagram text-2xl max-lg:text-xl"></i></a>
      </div>
      {/* <!-- Social Media Icons --> */}

      {/* <!-- Copyright Text --> */}
      <div>
        <p className={`text-xl ${DharmaGothicRegular.className} `}>&copy; COPYRIGHT 2024-2025 BY PakEduCareer</p>
      </div>
    </div>
  </div>

</footer>



  )
}

export default Footer