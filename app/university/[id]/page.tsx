import BlurImageAdvertisementsLoading from "@/components/BlurImageAdvertisementsLoading";
import { Programinfo } from "@/components/Programinfo";
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";
import {AdvertisementsData} from "@/db/advertisement";
import Image from "next/image";
import Link from "next/link";
import { unstable_cache } from "next/cache";



async function advertisementsData() {
  try {
    await connectToDatabase();
    const advertisements = await AdvertisementsData.find().sort({ priority: 1 });
    return await JSON.parse(JSON.stringify(advertisements));
  } catch (error) {
    console.error("Error finding universities:", error);
    throw error;
  }
}




const getUniversityById = unstable_cache(
async (id) => {
  try {
    await connectToDatabase();
    const university_data = await Universitymodel.findById(id); // Mongoose method to find by ObjectId
    // console.log(university_data._id);
    return university_data;
  } catch (error) {
    console.error("Error fetching university by ID:", error);
  }
}, ['dynamicUnis'], {tags: ['dynamicUnis']}
)

const Page = async ({ params }: { params: { id: string } }) => {
  const university = await getUniversityById(params.id);
  const advertisementDataa = await advertisementsData();
  // const university = {
  //   "location": {
  //     "province": "Punjab",
  //     "city": "Lahore"
  //   },
  //   "affiliation": {
  //     "isOpen": false,
  //     "name": null
  //   },
  //   "programs": {
  //     "bsPrograms": {
  //       "isOpen": true,
  //       "list": [
  //         "Computer Science", 
  //         "Information Technology", 
  //         "Electrical Engineering", 
  //         "Mechanical Engineering", 
  //         "Electronics and Telecommunication Engineering"
  //       ]
  //     },
  //     "mphilPrograms": {
  //       "isOpen": true,
  //       "list": [
  //         "Software Engineering",
  //         "Electrical Engineering",
  //         "Civil Engineering",
  //         "Mechanical Engineering",
  //         "Electronics and Telecommunication Engineering"
  //       ]
  //     },
  //     "phdPrograms": {
  //       "isOpen": false,
  //       "list": [
  //         ""
  //       ]
  //     },
  //     "adpPrograms": {
  //       "isOpen": true,
  //       "list": [
  //         "Electronics and Telecommunication Engineering",
  //         "Civil Engineering",
  //         "Software Engineering",
  //         "Electrical Engineering",
  //         "Mechanical Engineering",
  //       ]
  //     },
  //     "bs5thPrograms": {
  //       "isOpen": false,
  //       "list": [
  //         ""
  //       ]
  //     },
  //     "diplomaPrograms": {
  //       "isOpen": true,
  //       "list": [
  //         "Postgraduate Diploma in Environmental & Social Impact Assessment",
  //         "Postgraduate Diploma in Environmental Impact Assessment"
  //       ]
  //     }
  //   },
  //   "admissionDates": {
  //     "deadlineDate": "2024-10-21T00:00:00.000Z",
  //     "testDate": ""
  //   },
  //   "_id": "6707e1eb7b464964866f33f7",
  //   "name": "Government College University (GCU), Lahore",
  //   "sector": "Government",
  //   "priority": 8,
  //   "importantAdmission": true,
  //   "universityWebsite": "http://www.gcuonline.pk/",
  //   "hrAdmissionNotice": "https://utfs.io/f/FIJXRMN9oODgcG7TzCizFyoDp8iSnJ6mT2Nrc4EGxUldIqWs",
  //   "createdAt": "2024-10-10T14:17:15.926Z",
  //   "updatedAt": "2024-10-10T14:17:15.926Z",
  //   "__v": 0
  // };

  return (
    <>
      <div className="lg:container px-4 w-full lg:grid lg:grid-cols-12">

          <div className="University_Data lg:col-span-9  mt-12 flex flex-col gap-8 mb-12">
              <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-primary">{university.name} Admissions Open</h1>
                    
              <div className="w-[320px] sm:w-[600px] md:w-[650px] xl:w-[800px] border mx-auto">
                <table className="min-w-full border-collapse border border-primary text-primary font-semibold">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 md:py-3 xl:py-4 border border-primary text-center text-xs md:text-base lg:text-lg">Location</td>
                      <td className="px-4 py-2 md:py-3 xl:py-4 border border-primary text-center text-xs md:text-base lg:text-lg">{university.location.city}, {university.location.province}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 md:py-3 xl:py-4 border border-primary text-center text-xs md:text-base lg:text-lg">Sector</td>
                      <td className="px-4 py-2 md:py-3 xl:py-4 border border-primary text-center text-xs md:text-base lg:text-lg">{university.sector === "Government" && "Govt"} {university.sector === "Semi Government" && "Semi Govt"} {university.sector === "Private" && "Private"}</td>
                    </tr>
                    {university.affiliation.isOpen && (
                      <tr>
                        <td className="px-4 py-2 md:py-3 xl:py-4 border border-primary text-center text-xs md:text-base lg:text-lg">Affiliation</td>
                        <td className="px-4 py-2 md:py-3 xl:py-4 border border-primary text-center text-xs md:text-base lg:text-lg">{university.affiliation.name}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-4 py-2 md:py-3 xl:py-4 border border-primary text-center text-xs md:text-base lg:text-lg">Deadline to Apply</td>
                      <td className="px-4 py-2 md:py-3 xl:py-4 border border-primary text-center text-xs md:text-base lg:text-lg text-red-600 font-semibold">
                        {new Date(university.admissionDates.deadlineDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </td>
                    </tr>
                   
                    {university.admissionDates.testDate && (
                      <tr>
                        <td className="px-4 py-2 md:py-3 xl:py-4 border border-gray-400 dark:border-black  text-center text-xs md:text-base lg:text-lg">Test Dates</td>
                        <td className="px-4 py-2 md:py-3 xl:py-4 border border-gray-400 dark:border-black  text-center text-xs md:text-base lg:text-lg">{university.admissionDates.testDate}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
           

                    <div className="University_Description text-center w-[95%]">
                        <h1 className="text-xs leading-relaxed text-amber-400 font-semibold  lg:text-lg ">{university.universityDescription}</h1>
                    </div>


              <div className="University_Programs">
                    <h1 className="text-center  text-3xl md:text-4xl 2xl:text-5xl text-orange-400 font-semibold">Offered Programs</h1>

                    <Programinfo university={university} program={"bsPrograms"}/>
                    <Programinfo university={university} program={"mphilPrograms"}/>
                    <Programinfo university={university} program={"phdPrograms"}/>
                    <Programinfo university={university} program={"adpPrograms"}/>
                    <Programinfo university={university} program={"bs5thPrograms"}/>
                    <Programinfo university={university} program={"diplomaPrograms"}/>
              </div>

                    

              <div className="Advertisement_Picture flex flex-col gap-8 justify-center items-center">
                    <div>
                      <BlurImageAdvertisementsLoading university={university} />
                    </div>
                    <div>
                    <a href={university.hrAdmissionNotice} target="_blank">
                          <button className="px-10 py-3 bg-primary font-bold text-lg rounded-full text-secondary">Large Size View</button>
                        </a>
                    </div>
              </div>

              <div className="HOW_TO_APPLY? text-center flex flex-col gap-8">
                      <h1 className="text-lg md:text-xl text-primary font-semibold w-[80%] mx-auto">Click the below link to Apply for Admission in {university.name}</h1>
                      <div className="chicken w-fit h-fit mx-auto">
                        <Link href={`${university.universityWebsite}`} target="_blank">
                          <button className="chicken2">Apply Now</button>
                        </Link>
                      </div>

              </div>


          </div>

          <div className="pl-3 w-full lg:col-span-3 relative mt-12  flex flex-wrap gap-2 lg:gap-4 max-[1000px]:justify-center  justify-start lg:flex-col lg:items-start"> 
                  {advertisementDataa.map((ad) => (
                            <Link href={`/advertisement/${ad._id}`} key={ad._id}>
                              <div className="w-[190px] h-[190px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] xl:w-[280px] xl:h-[280px] 2xl:w-[320px] 2xl:h-[320px] relative top-0 left-0 fancy">
                                <Image
                                  src={ad.advertisementImg} // Assuming advertisementImg contains the image URL
                                  alt={`Advertisement ${ad.priority}`}
                                  className="object-cover"
                                  fill
                                />
                              </div>
                            </Link>
                        ))}
          </div>

      </div>
    </>
  );
};

export default Page;


export async function generateStaticParams() {
  try {
    await connectToDatabase();
    const universityData = await Universitymodel.find(); 
    return universityData.map((university)=> {
      return {id: university._id.toString()}
    })
    // Mongoose method to find by ObjectId
  } catch (error) {
    console.error("Error fetching university by ID:", error);
  }
 
}
 