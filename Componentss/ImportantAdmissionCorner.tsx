import React from 'react'

const ImportantAdmissionCorner = () => {
  return (
    <div>
        <h1 className='text-4xl text-rose-600 underline'>Important Admissions Corner !</h1>
        <div className='flex mt-6 flex-wrap gap-9'>
            <div className='universitycard px-5 py-4 bg-zinc-800 rounded-3xl'>
                    <h1 className='text-lg'>Allama Iqbal Open University AIOU</h1>
            </div>
            <div className='universitycard px-5 py-4 bg-zinc-800 rounded-3xl'>
                    <h1 className='text-lg'>Quai-E-Azam QAU</h1>
            </div>
            <div className='universitycard px-5 py-4 bg-zinc-800 rounded-3xl'>
                    <h1 className='text-lg'>Nust University</h1>
            </div>
            <div className='universitycard px-5 py-4 bg-zinc-800 rounded-3xl'>
                    <h1 className='text-lg'>GC University Lahore</h1>
            </div>
        </div>
    </div>
  ) 
}

export default ImportantAdmissionCorner