import React from 'react'

const SideBar = () => {
  return (
    <div className="flex-grow bg-[#DBE2EF] dark:bg-[#282828] rounded-lg px-6 py-6 h-fit">
    <div className="flex flex-col gap-4">
      {/* <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-4 rounded-lg p-4">Search</div> */}
      <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-60 rounded-lg p-4">
        Trendings
      </div>
      <div className="bg-white dark:bg-[#3e3e3e] w-full min-h-48 rounded-lg p-4">
        Who to follows
      </div>
    </div>
  </div>
  )
}

export default SideBar