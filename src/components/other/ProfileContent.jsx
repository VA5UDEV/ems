import React from 'react'

const ProfileContent = ({data}) => {
  return (
    <div className="flex flex-1 flex-col gap-6">
    <h1 className="text-3xl font-semibold">Your Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-[#00d4ff]">{data.firstName}</h2>
        <p className="text-gray-300">Position: {data.position}</p>
        <p className="text-gray-300">Department: {data.department}</p>
      </div>
  </div>
  )
}


export default ProfileContent