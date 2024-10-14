"use client"


import { deleteexpireduniversitiesdata, revalidatelandingpage } from "@/actions/RevalidateLandingPage";
import { gotham } from "../layout";
import { useState } from "react";

const Miscellaneous = () => {
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState(null)
   

    async function revalidatingPageData(e) {
        e.preventDefault()
        setloading(true)
        try {
            const response = await revalidatelandingpage()
            setmessage(response.message)
            setTimeout(() => {
                setmessage(null)
            }, 2000);
            setloading(false)
            
        } catch (error) {
            setmessage(error.message)
            setTimeout(() => {
                setmessage(null)
            }, 2000);
        }
    }


    async function deletingexpiredunidata(e) {
        e.preventDefault()
        setloading(true)
        try {
            const response = await deleteexpireduniversitiesdata()
            setmessage(response.message)
            setTimeout(() => {
                setmessage(null)
            }, 3000);
            setloading(false)
        } catch (error) {
            setmessage(error.message)
            setTimeout(() => {
                setmessage(null)
            }, 3000);
        }
    }
  return (
    <div className=" container mb-14">
        <h1 className={`${gotham.className} text-2xl border-b inline-block text-orange-500 border-orange-500`}>Miscellaneous Things Area</h1>
        <div className="w-full flex gap-6 flex-wrap">

            <form className="block" onSubmit={revalidatingPageData}>
                <button disabled={loading} type="submit" className="bg-blue-500 hover:bg-blue-700 duration-200 text-white font-bold py-2 px-4 rounded mt-12">
                    Revalidate Data / Page
                </button>
            </form>
            
            <form  className="block" onSubmit={deletingexpiredunidata}>
                <button disabled={loading} type="submit" className="bg-rose-500 hover:bg-rose-700 duration-200 text-white font-bold py-2 px-4 rounded mt-12">
                    Delete All Expired Deadline Date Universities Data
                </button>
            </form>

        </div>
        {message && <h1 className="text-yellow-500 text-lg italic mt-4">{message} !</h1>}
    </div>
  )
}

export default Miscellaneous