"use client";

import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
 
  return (
    <>
      <div className="container border-b Navbar font-[family-name:var(--font-geist-sans)] flex justify-between items-center px-4 py-8">
         <Link href={`/`} className="Logos Navbar">
            <div className="flex  items-center justify-center gap-4">
          
              <Image src={'/logo.jpg'} alt="Logo" width={45} height={45}/>
              <Image src={'/PECLOGO.png'} alt="Logo" width={130} height={130} quality={100}  priority={true} />
              </div>
          </Link>

    <div className="flex gap-4"> 

              <div className="1 dropdown z-40">
                <button className="dropbtn">Cities</button>
                <div className="dropdown-content">
                    <Link href={`/city/Islamabad`}>Islamabad</Link>
                    <Link href={`/city/Rawalpindi`}>Rawalpindi</Link>
                    <Link href={`/city/Lahore`}>Lahore</Link>
                    <Link href={`/city/Karachi`}>Karachi</Link>
                    <Link href={`/city/Peshawar`}>Peshawar</Link>
                    <Link href={`/city/Faislabad`}>Faislabad</Link>
                </div>
              </div>

              
              <div className="2 dropdown z-40">
                <button className="dropbtn">Programs</button>
                <div className="dropdown-content">
                    <Link href={`/programs/bsPrograms`}>Bs</Link>
                    <Link href={`/programs/mphilPrograms`}>Mphil</Link>
                    <Link href={`/programs/phdPrograms`}>Phd</Link>
                    <Link href={`/programs/adpPrograms`}>ADP</Link>
                    <Link href={`/programs/diplomaPrograms`}>Diploma</Link>
                    <Link href={`/programs/bs5thPrograms`}>Bs5th Semester</Link>
                    diplomaPrograms
                </div>
              </div>
              
              <div className="2 dropdown z-40">
                <button className="dropbtn">Sector</button>
                <div className="dropdown-content">
                    <Link href={``}>Govt</Link>
                    <Link href={``}>Semi-Govt</Link>
                    <Link href={``}>Private</Link>
                </div>
              </div>

              <div className="2 dropdown z-40">
                <button className="dropbtn">Province</button>
                <div className="dropdown-content">
                    <Link href={``}>Punjab</Link>
                    <Link href={``}>Sindh</Link>
                    <Link href={``}>KPK</Link>
                    <Link href={``}>Azad Kashmir</Link>
                </div>
              </div>


       </div>


          <div>
          <button className="bg-white text-zinc-950 py-2 px-4 rounded">
            Contact Us
            </button>
          </div>
      </div>

    </>
  );
};

export default Navbar;
