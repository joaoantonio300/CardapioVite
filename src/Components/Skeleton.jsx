import React from 'react'

const Skeleton = ({id}) => {
  return (
     <div
                  key={id} className="flex flex-col items-center p-2 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow animate-pulse">
                
                  <div className="h-[7em] w-full rounded-2xl bg-gray-400" />
                
                  <div className="mt-2 h-3 w-3/4 bg-gray-600 rounded" />
              
                  <div className="mt-1 h-3 w-1/2 bg-gray-600 rounded" />
                  
                  <div className="mt-2 h-3 w-1/4 bg-gray-600 rounded self-start" />
                </div>
  )
}

export default Skeleton