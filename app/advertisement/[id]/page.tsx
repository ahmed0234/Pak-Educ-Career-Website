import { AdvertisementsData } from "@/db/advertisement";
import { connectToDatabase } from "@/db/connectDB";
import Image from "next/image";



async function getAdvertisement(id) {
    await connectToDatabase();
    const advertisement = await AdvertisementsData.findById(id);
    return advertisement;
}

const Page = async ({params}) => {
    // Fetch advertisement data with priority set to 5
    const advertisementData = await getAdvertisement(params.id); // Pass the desired priority

    return (
        <div className="container py-20 min-h-screen px-4 ">
            {advertisementData ? (
                <>

                    <Image src={advertisementData.advertisementImg} alt="pic" width={500} height={500} className="mx-auto"/>
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

export async function generateStaticParams() {
    await connectToDatabase();
    const advertisements = await AdvertisementsData.find().lean();

    return advertisements.map((ad) => ({
        id: ad._id.toString(),
    }));
}