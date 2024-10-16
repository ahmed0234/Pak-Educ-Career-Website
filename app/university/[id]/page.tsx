import BlurImageAdvertisementsLoading from "@/Componentss/BlurImageAdvertisementsLoading";
import { Programinfo } from "@/Componentss/Programinfo";
import { connectToDatabase } from "@/db/connectDB";
import Universitymodel from "@/db/UniversitiesSchema";


const getUniversityById = async (id) => {
  try {
    await connectToDatabase();
    const university_data = await Universitymodel.findById(id); // Mongoose method to find by ObjectId
    // console.log(university_data._id);
    return university_data;
  } catch (error) {
    console.error("Error fetching university by ID:", error);
  }
};

const Page = async ({ params }: { params: { id: string } }) => {
  const university = await getUniversityById(params.id);
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
    <div className="University_Data container mt-12 flex flex-col gap-16 pb-28 max-xl:px-4">

      <div className="University Introduction flex flex-col gap-4">
        <h1 className="text-4xl max-xl:text-3xl text-center font-bold text-emerald-400">{university.name} Admission Opens</h1>
        <h2 className="text-lg">Location: {university.location.city}, {university.location.province}</h2>
        <h2 className="text-lg">Sector: {university.sector}</h2>
        <h2> The last date of application is: <span className="text-rose-500 font-bold">
            {new Date(university.admissionDates.deadlineDate).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}</span></h2>
          {university.affiliation.isOpen && <h2 className="text-lg"><span className="text-rose-500 italic font-bold tracking-wider text-xl">Affiliation: </span> {university.affiliation.name}</h2>}
      </div>

      <div className="University_Programs">
            <h1 className="text-3xl text-orange-400">Available Programs</h1>

            <Programinfo university={university} program={"bsPrograms"}/>
            <Programinfo university={university} program={"mphilPrograms"}/>
            <Programinfo university={university} program={"phdPrograms"}/>
            <Programinfo university={university} program={"adpPrograms"}/>
            <Programinfo university={university} program={"bs5thPrograms"}/>
            <Programinfo university={university} program={"diplomaPrograms"}/>
      </div>

      <div className="HOW_TO_APPLY? text-center flex flex-col gap-8">
              <h1 className="text-3xl text-yellow-500">How to apply for {university.name} <br />Admission?</h1>
              <div>
                <a href={university.universityWebsite} target="_blank">
                  <button className="px-10 py-3 bg-red-600 font-bold text-lg rounded-full">Apply Now</button>
                </a>
              </div>
      </div>  

      <div className="Advertisement_Picture flex flex-col gap-8 justify-center items-center">
            <div>
              <BlurImageAdvertisementsLoading university={university} />
            </div>
            <div>
            <a href={university.hrAdmissionNotice} target="_blank">
                  <button className="px-10 py-3 bg-red-600 font-bold text-lg rounded-full">Advertisement Link</button>
                </a>
            </div>
      </div>

    </div>
  );
};

export default Page;


// export async function generateStaticParams() {
//   try {
//     await connectToDatabase();
//     const university_data = await Universitymodel.find(); 
//     return university_data.map((university) => ({
//       id: university._id.toString(),
//     }))
//     // Mongoose method to find by ObjectId
//   } catch (error) {
//     console.error("Error fetching university by ID:", error);
//   }
 
// }
 