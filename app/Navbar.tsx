"use client";
import Image from "next/image";
import Link from "next/link";
import "./components.css"
import HamburgerSidebar from "@/components/client/Hamburger";
import { ModeToggle } from "@/components/theme-toggle";


const Naavbar = () => {
 
  return (

      <div className="container border-b dark:border-zinc-900 Navbar font-[family-name:var(--font-geist-sans)] flex justify-between items-center px-4 py-8 ">
         <Link href={`/`} className="Logos Navbar">
            <div className="flex  items-center justify-center gap-4">
          
              <Image src={'/logo.jpg'} alt="Logo" width={45} height={45}/>
              <Image src={'/PECLOGO.png'} alt="Logo" width={130} height={130} quality={100}  priority={true} />
              </div>
          </Link>


         <div className="max-lg:hidden gap-4 lg:flex"> 

        <div className="1 dropdown z-40 bg-primary text-secondary rounded-xl">
          <button className="dropbtn text-sm text-secondary">Cities</button>
          <div className="dropdown-content text-xs bg-primary text-secondary">
              <Link href={`/city/Islamabad`}>Islamabad</Link>
              <Link href={`/city/Rawalpindi`}>Rawalpindi</Link>
              <Link href={`/city/Lahore`}>Lahore</Link>
              <Link href={`/city/Karachi`}>Karachi</Link>
              <Link href={`/city/Peshawar`}>Peshawar</Link>
              <Link href={`/city/Multan`}>Multan</Link>
              <Link href={`/city/Faisalabad`}>Faisalabad</Link>
          </div>
        </div>


        <div className="2 dropdown z-40 bg-primary text-secondary rounded-xl">
          <button className="dropbtn text-sm text-secondary">Programs</button>
          <div className="dropdown-content text-sm bg-primary text-secondary">
              <Link href={`/programs/adpPrograms`}>ADP</Link>
              <Link href={`/programs/bsPrograms`}>BS</Link>
              <Link href={`/programs/bs5thPrograms`}>BS 5th Semester</Link>
              <Link href={`/programs/mphilPrograms`}>MPhil</Link>
              <Link href={`/programs/fcpsPrograms`}>FCPS</Link>
              <Link href={`/programs/mspsPrograms`}>MSPS</Link>
              <Link href={`/programs/phdPrograms`}>PhD</Link>
              <Link href={`/programs/diplomaPrograms`}>Diploma</Link>
          </div>
        </div>

        <div className="2 dropdown z-40 bg-primary text-secondary rounded-xl">
          <button className="dropbtn text-sm text-secondary">Sector</button>
          <div className="dropdown-content text-sm bg-primary text-secondary">
              <Link href={`/sector/Government`}>Govt</Link>
              <Link href={`/sector/Semi Government`}>Semi Govt</Link>
              <Link href={`/sector/Private`}>Private</Link>
          </div>
        </div>

        <div className="2 dropdown z-40 bg-primary text-secondary rounded-xl">
          <button className="dropbtn text-sm text-secondary">Province</button>
          <div className="dropdown-content text-sm bg-primary text-secondary">
              <Link href={`/province/Punjab`}>Punjab</Link>
              <Link href={`/province/Sindh`}>Sindh</Link>
              <Link href={`/province/KPK`}>KPK</Link>
              <Link href={`/province/AJK`}>AJK</Link>
              <Link href={`/province/Balochistan`}>Balochistan</Link>
          </div>
        </div>


        </div>

        <div className="flex gap-4 items-center justify-center ">


          <Link href={`/contact`}>
                <button type="button" className="Navbtn max-lg:hidden lg:block">
                    <strong>Contact Us</strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>

                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                </button>
          </Link>


          <ModeToggle mobileshow={false}/>

          {/* <Themetoggle mobileshow={false}/> */}

        </div>



        <HamburgerSidebar />
    </div>


  );
};

export default Naavbar;
