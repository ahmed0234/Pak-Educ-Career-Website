"use client";

import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill Snow theme styles

const FormWithTextEditor = () => {
  const quillRef = useRef(null);
  const editorContentRef = useRef(""); // Ref to hold editor content

  useEffect(() => {
    // Initialize Quill editor with full toolbar
    quillRef.current = new Quill("#editor", {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],    // Header dropdown
          ["bold", "italic", "underline", "strike"],    // Formatting buttons
          [{ list: "ordered" }, { list: "bullet" }],    // Lists
          [{ script: "sub" }, { script: "super" }],     // Subscript/Superscript
          [{ indent: "-1" }, { indent: "+1" }],         // Indent
          [{ direction: "rtl" }],                      // Text direction
          [{ align: [] }],                             // Text align
          ["link", "image", "video", "blockquote"],     // Link, image, video, blockquote
          ["clean"],                                   // Remove formatting
        ],
      },
    });

    // Update content ref on text change
    quillRef.current.on("text-change", () => {
      editorContentRef.current = quillRef.current.root.innerHTML;
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    formData.set("paragraph", editorContentRef.current); // Set Quill content by name

    // Log data by name
    console.log("Name:", formData.get("name"));
    console.log("Paragraph:", formData.get("paragraph"));
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-gray-900 text-white max-w-lg mx-auto rounded-lg">
      <div className="flex flex-col">
        <label className="mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
          placeholder="Enter your name"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2" htmlFor="editor">
          Paragraph:
        </label>
        <div id="editor" className="h-40 bg-white text-black"></div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default FormWithTextEditor;
