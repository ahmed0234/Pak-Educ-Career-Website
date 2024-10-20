import Image from "next/image";
import Link from "next/link";


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
      <Link href={`/province/Azad Kashmir`}>Azad Kashmir</Link>
  </div>
</div>


          </div>

            <div>
                <button className="bg-white text-zinc-950 py-2 px-4 rounded text-sm">
                Contact Us
                </button>
            </div>

      </div>


  );
};

export default Naavbar;
