import React from 'react';
import example from "./mock/example"
import { getCelsiusValue } from './utils/utils'

function App() {
  const { recentData } = example
  return (
    <div className="flex justify-center bg-gradient-to-b from-blue-900 to-purple-500 h-screen">
      <div className="flex-1 flex flex-col bg-gray-200 mt-10 mx-6 rounded-t-2xl">
        <div className="mt-4 mx-4 flex flex-col justify-center items-center text-gray-800">
          <p className="text-2xl">{recentData.date}</p>
          <div className="flex items-center">
            <p className="text-4xl">{getCelsiusValue(recentData.temperature)}</p>
            <div className="flex flex-col items-center text-lg ml-2">
              <p>{getCelsiusValue(recentData.max)}</p>
              <p>{getCelsiusValue(recentData.min)}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 mx-4 bg-red-700">
        </div>        
      </div>
    </div>
  )
}

export default App;
