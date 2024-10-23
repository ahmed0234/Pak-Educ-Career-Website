import Image from "next/image";
import Link from "next/link";
import "./components.css"
import HamburgerSidebar from "@/components/client/Hamburger";

const Naavbar = () => {
 
  return (

      <div className="container border-b Navbar font-[family-name:var(--font-geist-sans)] flex justify-between items-center px-4 py-8">
         <Link href={`/`} className="Logos Navbar">
            <div className="flex  items-center justify-center gap-4">
          
              <Image src={'/logo.jpg'} alt="Logo" width={45} height={45}/>
              <Image src={'/PECLOGO.png'} alt="Logo" width={130} height={130} quality={100}  priority={true} />
              </div>
          </Link>


         <div className=" gap-4 lg:flex hidden"> 

        <div className="1 dropdown z-40">
          <button className="dropbtn text-sm">Cities</button>
          <div className="dropdown-content text-xs">
              <Link href={`/city/Islamabad`}>Islamabad</Link>
              <Link href={`/city/Rawalpindi`}>Rawalpindi</Link>
              <Link href={`/city/Lahore`}>Lahore</Link>
              <Link href={`/city/Karachi`}>Karachi</Link>
              <Link href={`/city/Peshawar`}>Peshawar</Link>
              <Link href={`/city/Multan`}>Multan</Link>
              <Link href={`/city/Faislabad`}>Faislabad</Link>
          </div>
        </div>


        <div className="2 dropdown z-40">
          <button className="dropbtn text-sm">Programs</button>
          <div className="dropdown-content text-sm">
              <Link href={`/programs/bsPrograms`}>BS</Link>
              <Link href={`/programs/bs5thPrograms`}>BS 5th Semester</Link>
              <Link href={`/programs/adpPrograms`}>ADP</Link>
              <Link href={`/programs/mphilPrograms`}>MPhil</Link>
              <Link href={`/programs/phdPrograms`}>PhD</Link>
              <Link href={`/programs/diplomaPrograms`}>Diploma</Link>
          </div>
        </div>

        <div className="2 dropdown z-40">
          <button className="dropbtn text-sm">Sector</button>
          <div className="dropdown-content text-sm">
              <Link href={`/sector/Government`}>Govt</Link>
              <Link href={`/sector/Semi Government`}>Semi Govt</Link>
              <Link href={`/sector/Private`}>Private</Link>
          </div>
        </div>

        <div className="2 dropdown z-40">
          <button className="dropbtn text-sm">Province</button>
          <div className="dropdown-content text-sm">
              <Link href={`/province/Punjab`}>Punjab</Link>
              <Link href={`/province/Sindh`}>Sindh</Link>
              <Link href={`/province/KPK`}>KPK</Link>
              <Link href={`/province/AJK`}>AJK</Link>
              <Link href={`/province/Balochistan`}>Balochistan</Link>
          </div>
        </div>


        </div>
              <button type="button" className="Navbtn hidden lg:block">
                  <strong>Contact Us</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
              </button>


              <HamburgerSidebar />
    </div>


  );
};

export default Naavbar;
