import { AdvertisementsData } from "@/db/advertisement";
import { connectToDatabase } from "@/db/connectDB";
import Image from "next/image";



async function getAdvertisement(priority) {
    await connectToDatabase();
    const data = await AdvertisementsData.findOne({ priority }).exec();
    console.log(data);
    return data;
}

const Page = async () => {
    // Fetch advertisement data with priority set to 5
    const advertisementData = await getAdvertisement(1); // Pass the desired priority

    return (
        <div className="container py-20 min-h-screen">
            {advertisementData ? (
                <>

                    <Image src={advertisementData.advertisementImg} alt="pic" width={400} height={400}/>
                    <br />
                    <br />
                    <br />
                    <div 
                        className="w-full md:w-4/5 mx-auto dangerousHtml"
                        dangerouslySetInnerHTML={{ __html: advertisementData.contentPara }}
                    />
                </>
            ) : (
                <p>No advertisement data found
                </p>
            )}
        </div>
    );
}

export default Page;
