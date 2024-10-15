import { gotham } from '@/app/layout'
import Link from 'next/link'
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
    <div className="flex flex-row max-md::flex-col justify-between items-center flex-wrap">
      {/* <!-- Logo / Branding --> */}
      <div className="mb-6 lg:mb-0">
      <h1 className={`text-2xl ${gotham.className} glowy_2 text-white`}>
            <Link href={"/"}>Pak Edu Career</Link>{" "}
          </h1>
      </div>
      
      {/* <!-- Social Media Icons --> */}
      <div className="mb-6 lg:mb-0 flex space-x-6 text-xl">
        <a href="#" className="hover:text-gray-400"><i class="fa-brands fa-youtube"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook"></i></a>
        <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-gray-400"><i class="fa-brands fa-instagram"></i></a>
        
      </div>
      {/* <!-- Social Media Icons --> */}

      {/* <!-- Copyright Text --> */}
      <div>
        <p className="text-sm">&copy; COPYRIGHT 2024 BY Pak Edu Career</p>
      </div>
    </div>
  </div>

</footer>



  )
}

export default Footer