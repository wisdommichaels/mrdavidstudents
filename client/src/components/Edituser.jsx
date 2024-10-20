import React from 'react'

const Edituser = () => {
  return (
    <div>
         <div className="container mx-auto px-4">
   
   <div className="flex flex-col md:flex-row gap-6">


     <div className="md:w-[55%] bg-[#E8B4B8] p-6 rounded-lg shadow-md">
       <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
       <form >
         <div className="flex flex-col md:flex-row gap-4">
           <div className="w-full">
             <label for="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
             <input type="text" id="first_name" name="first_name" className="mt-1 block w-full  border-b-2  border-[#67595E] border-b-2-b-2 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="John"/>
           </div>
           <div className="w-full">
             <label for="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
             <input type="text" id="last_name" name="last_name" className="mt-1 block w-full  border-b-2   border-[#67595E] shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Doe"/>
           </div>
         </div>

         <div className="mt-5">
           <label for="location" className="block text-sm font-medium text-gray-700">Country/State</label>
           <input type="text" id="email" name="email" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="johndoe@example.com"/>
         </div>

         <div className="mt-5">
           <label for="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
           <input type="tel" id="phone" name="phone" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="+1234567890"/>
         </div>
         <div className="mt-5">
           <label for="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
           <input type="tel" id="phone" name="phone" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="+1234567890"/>
         </div>
         <div className="mt-5">
           <label for="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
           <input type="tel" id="phone" name="phone" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="+1234567890"/>
         </div>
         <div className="mt-5">
           <label for="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
           <input type="tel" id="phone" name="phone" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="+1234567890"/>
         </div>

         <div className="mt-6">
           <button type="submit" className="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]">Save Personal Details</button>
         </div>
       </form>
     </div>

  
     <div className="md:w-[45%] space-y-6">
    
       <div className="bg-[#E8B4B8] p-6 rounded-lg shadow-md">
         <h2 className="text-xl font-semibold mb-4">Education</h2>
         <form action="#" method="POST">
           <div>
             <label for="degree" className="block text-sm font-medium text-gray-700">Highest Degree</label>
             <input type="text" id="degree" name="degree" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Bachelor's"/>
           </div>

           <div className="mt-4">
             <label for="university" className="block text-sm font-medium text-gray-700">University</label>
             <input type="text" id="university" name="university" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Harvard University"/>
           </div>

           <div className="mt-6">
             <button type="submit" className="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]">Save Education</button>
           </div>
         </form>
       </div>


       <div className="bg-[#E8B4B8] p-6 rounded-lg shadow-md">
         <h2 className="text-xl font-semibold mb-4">Experience</h2>
         <form action="#" method="POST">
           <div>
             <label for="job_title" className="block text-sm font-medium text-gray-700">Job Title</label>
             <input type="text" id="job_title" name="job_title" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Software Developer"/>
           </div>

           <div className="mt-4">
             <label for="company" className="block text-sm font-medium text-gray-700">Company</label>
             <input type="text" id="company" name="company" className="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Google Inc."/>
           </div>

           <div className="mt-6">
             <button type="submit" className="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]">Save Experience</button>
           </div>
         </form>
       </div>
     </div>
   </div>
 </div>
    </div>
  )
}

export default Edituser