import { revalidatelandingpage } from "@/actions/RevalidateLandingPage";
import AdmissionTableList from "@/Componentss/Admissiontable";
import ImportantAdmissionCorner from "@/Componentss/ImportantAdmissionCorner";

// export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="container h-[150vh] px-4 mt-14 font-[family-name:var(--font-geist-sans)] bg-[#0a0a0a] ">
      <ImportantAdmissionCorner />

      <div className="mt-12">
        <AdmissionTableList />
      </div>
      <form action={revalidatelandingpage}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12">
            Revalidate Landing Page
        </button>
      </form>
    </div>
  );
}
