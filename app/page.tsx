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
    </div>
  );
}
