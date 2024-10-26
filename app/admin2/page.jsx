"use client";

import { useState, useTransition } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { submitContentAction } from "@/actions/advertisements";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditorForm = () => {
  const [editorContent, setEditorContent] = useState("");
  const [priority, setpriority] = useState('');
  const [advertisementImage, setadvertisementImage] = useState(null);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();


  const handleEditorChange = (content) => {
    setEditorContent(content);
    if (content) setError(""); // Clear error on valid input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    startTransition(async () => {
      try {
        const result = await submitContentAction({
            content: editorContent,
            priority: priority,
            advertisementImage: advertisementImage, // Include image URL here
          });
          alert(result.message);
          setEditorContent("");
          setpriority("");
          setadvertisementImage(null);
      } catch (err) {
        console.error("Submission error:", err);
        setError("Submission failed. Please try again.");
      }
    });
  };
  const editorModules = {
    toolbar: [
        [{ header: [1, 2, 3] }], // H1, H2, H3
        ["bold", "italic"],      // Bold, Italic
        [{ list: "bullet" }],    // Bullet points list
        ["link"],                // Link
        ["clean"],               // Clear formatting
    ],
};

  return (
    <div className="pt-20 min-h-screen">


    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg "
    >
      <h2 className="text-xl font-semibold mb-4">Advertisement Details Portal</h2>

      <div className="mb-4">
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={editorModules}
          theme="snow" // Use 'snow' for light toolbar in dark mode
          className="bg-gray-800 text-white rounded"
          placeholder="Write something amazing..."
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

         <div className="flex flex-col">
            <label htmlFor="priority" className="mb-2 font-semibold">
              Priority of Advertisement
            </label>
            <input
                value={priority}
                onChange={(e)=> setpriority(e.target.value)}
              type="number"
              id="priority"
              name="priority"
              className="border border-gray-300 text-black font-[family-name:var(--font-geist-sans)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

            <br />

          <div className=" h-fit w-fit flex gap-6  ">
              <div className="border h-fit px-6 flex flex-col gap-6 w-fit rounded-2xl text-center py-6">
                <h1>Advertisement Image Upload</h1>
                <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      alert("Upload Completed");
                      setadvertisementImage(res[0].url);
                    }}
                    onUploadError={(error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
              </div>

              {
              advertisementImage &&  
              <div className="w-fit h-fit">
                <Image src={advertisementImage} alt="Image" width={200} height={200} />        
              </div>
              }
            
             
            </div>

      <button
        type="submit"
        disabled={isPending}
        className={`w-full py-2 mt-4 rounded ${
          isPending ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
        } text-white font-bold`}
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
    </div>
  );
};

export default EditorForm;
