import React from 'react'
import example from "./mock/example"
import { getCelsiusValue } from './utils/utils'
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

function App() {
  const { recentData, forecast } = example
  return (
    <div className="flex justify-center bg-gradient-to-b from-blue-900 to-purple-600 h-screen">
      <div className="flex flex-col flex-1 bg-gray-200 mt-10 mx-6 rounded-t-2xl max-w-screen-lg">
        <div className="flex flex-col justify-center items-center text-gray-700 mt-4 mx-4">
          <p className="text-2xl">{recentData.date}</p>
          <div className="flex items-center my-2">
            <p className="text-4xl font-bold">{getCelsiusValue(recentData.temperature)}</p>
            <div className="flex flex-col text-lg ml-2">
              <div className="flex items-center">
                <FaArrowUp className="text-red-700" />
                <p>{getCelsiusValue(recentData.max)}</p>
              </div>
              <div className="flex items-center">
                <FaArrowDown className="text-blue-700" />
                <p>{getCelsiusValue(recentData.min)}</p>
              </div>
            </div>
            <img src={`assets/${recentData.condition}.png`} alt={recentData.condition} className="ml-4 w-16 h-16" />
          </div>
          <p className="font-bold">{example.city}</p>
        </div>

        <div className="flex flex-col flex-1 items-center mt-4 bg-gray-400 rounded-t-2xl">
          <p className="text-gray-800 font-bold text-lg my-4 px-2">
            Previsão para os próximos dias:
          </p>
          <div className="flex flex-col w-full p-2 sm:flex-row">
            {forecast.map((day, index) => (
              <div key={index} className="flex flex-col flex-1 justify-center p-4 m-2 bg-white rounded-xl shadow-lg">
                <p className="text-gray-800 text-center font-bold">{day.date}</p>
                <div className="flex justify-around p-4">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <FaArrowUp className="text-red-700" />
                      <p>{getCelsiusValue(day.max)}</p>
                    </div>
                    <div className="flex items-center">
                      <FaArrowDown className="text-blue-700" />
                      <p>{getCelsiusValue(day.min)}</p>
                    </div>
                  </div>
                  <img src={`assets/${day.condition}.png`} alt={day.condition} className="ml-4 w-10 h-10" />
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
