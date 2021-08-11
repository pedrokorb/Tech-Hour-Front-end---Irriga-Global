import React from 'react';
import example from "./mock/example"
import { getCelsiusValue } from './utils/utils'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function App() {
  const { recentData, forecast } = example
  return (
    <div className="flex justify-center bg-gradient-to-b from-blue-900 to-purple-600 h-screen">
      <div className="flex-1 flex flex-col bg-gray-200 mt-10 mx-6 rounded-t-2xl max-w-screen-lg">
        <div className="mt-4 mx-4 flex flex-col justify-center items-center text-gray-700">
          <p className="text-2xl">{recentData.date}</p>
          <div className="flex items-center my-2">
            <p className="text-4xl font-bold">{getCelsiusValue(recentData.temperature)}</p>
            <div className="flex flex-col text-lg ml-2">
              <div className="flex items-center">
                <FaArrowUp className="text-red-700"/>
                <p>{getCelsiusValue(recentData.max)}</p>
              </div>
              <div className="flex items-center">
                <FaArrowDown className="text-blue-700"/>
                <p>{getCelsiusValue(recentData.min)}</p>
              </div>
            </div>
            <img className="ml-4 w-16 h-16" src={`assets/${recentData.condition}.png`} alt={recentData.condition} />
          </div>
          <p className="font-bold">{example.city}</p>
        </div>
        
        <div className="flex-1 flex flex-col items-center mt-4 bg-gray-400 rounded-t-2xl">
          <h2 className="text-gray-800 font-bold text-lg my-4 px-2">Previsão para os próximos dias:</h2>
          <div className="flex flex-col sm:flex-row w-full p-2">
            {forecast.map(day => (
              <div className="flex flex-col flex-1 justify-center p-4 m-2 bg-white rounded-xl shadow-lg">
                <p className="text-gray-800 text-center font-bold">{day.date}</p>
                <div className="flex justify-around px-4">
                  <div className="flex">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <FaArrowUp className="text-red-700"/>
                        <p>{getCelsiusValue(day.max)}</p>
                      </div>
                      <div className="flex items-center">
                        <FaArrowDown className="text-blue-700"/>
                        <p>{getCelsiusValue(day.min)}</p>
                      </div>
                    </div>
                  </div>
                  <img className="ml-4 w-10 h-10" src={`assets/${day.condition}.png`} alt={day.condition} />
                </div>
              </div>
            ))}
          </div>
          
        </div>        
      </div>
    </div>
  )
}

export default App;
