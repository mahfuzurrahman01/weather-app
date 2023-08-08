"use client";
import { ILocation, IWeather } from "@/interface/interface";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const styling1 = {
  backgroundImage: `url('/weatherCard.jpg')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const recentSearch = [
  "Bangladesh",
  "Italy",
  "France",
  "Turkey",
  "India",
  "Dubai",
];

export default function Home() {
  // ================= these are the state ===============
  const [searchedText, setSearchedText] = useState<string>("");
  const [weatherDetails, setWeatherDetails] = useState<IWeather>(
    {} as IWeather
  );
  const [locationDetails, setLocationDetails] = useState<ILocation>(
    {} as ILocation
  );

  //==============input field value handler ===============
  const searchFieldInputHandler = (e: HTMLInputElement | any) => {
    e.preventDefault();
    setSearchedText(e.target.value);
  };

  // initially its shows result for Bangladesh
  const initial = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=25910174a87a4c63a6c141019230506&q=Bangladesh&aqi=no`
      );
      if (response.data) {
        setLocationDetails(response.data.location);
        setWeatherDetails(response.data.current);
        setSearchedText("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initial();
  }, []);

  //============== on searched button click =================
  const search = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=25910174a87a4c63a6c141019230506&q=${searchedText}&aqi=no`
      );
      if (response.data) {
        setLocationDetails(response.data.location);
        setWeatherDetails(response.data.current);

        setSearchedText("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //============== on search from recent search list =============
  const searchWith = async (name: string | any) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=25910174a87a4c63a6c141019230506&q=${name}&aqi=no`
      );
      if (response.data) {
        setLocationDetails(response.data.location);
        setWeatherDetails(response.data.current);
        setSearchedText("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center relative bg-gradient-to-tl bg-opacity-80 bg-orange-600 from-gray-500">
      {weatherDetails?.condition && (
        <div
          className="flex lg:w-3/4 w-11/12 mx-auto rounded-tl-2xl lg:flex-row flex-col rounded-br-2xl"
          style={styling1}
        >
          {/* *******weather details********* */}
          <div className="lg:w-4/6 w-4/5 lg:relative bg-opacity-50 mx-auto lg:h-[560px] h-300px lg:p-0 p-3">
            <div className=" p-1 lg:my-7 my-4 ml-16">
              <Image
                src={`https:${weatherDetails?.condition?.icon}`}
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:absolute lg:bottom-10 lg:left-0 lg:right-0 text-center flex lg:flex-row flex-col lg:justify-center justify-between items-center lg:gap-10 gap-3"
            >
              <p className="lg:text-8xl text-5xl font-sans font-semibold text-gray-100 flex items-center">
                {Math.round(weatherDetails.temp_c)}{" "}
                <sup className="lg:text-5xl text-2xl">o </sup>
                <span className="lg:text-7xl text-4xl"> C</span>
              </p>
              <div className="lg:w-[30%] w-full">
                <p className="lg:text-4xl text-xl text-gray-100">
                  {locationDetails.country}
                </p>
                <p className="text-gray-100 lg:text-sm text-xs">
                  <span className="font-semibold text-md">
                    {locationDetails.name}{" "}
                  </span>
                  {locationDetails.localtime}
                </p>
              </div>
              <div className="text-md text-gray-200 lg:block hidden">
                <p className="lg:text-lg text-sm text-gray-100">
                  {weatherDetails?.condition?.text}
                </p>
                <small className="flex flex-col">
                  <span>Humidity: {weatherDetails.humidity}%</span>
                  <span>Wind:{weatherDetails.wind_kph} km/h</span>
                </small>
              </div>
            </motion.div>
          </div>

          {/* *********** extra info ************* */}
          <div className="flex-grow bg-opacity-70 bg-slate-600 rounded-br-2xl p-4 relative">
            <div className="w-full p-2">
              <input
                value={searchedText}
                type="text"
                onChange={searchFieldInputHandler}
                className="text-gray-100 w-[80%] bg-transparent border rounded-md px-2 py-1 border-gray-100"
                placeholder="Search here"
              />
              <button
                onClick={search}
                className="w-[18%] py-1 ml-1 bg-white text-amber-600 rounded"
              >
                Search
              </button>
            </div>
            <div className="my-4 p-2">
              <p className="font-light text-white">Recent search</p>
              <hr />
              <div className="my-3  flex flex-col gap-2">
                {recentSearch.map((place: string) => (
                  <p
                    onClick={() => searchWith(`${place}`)}
                    key={place}
                    className="cursor-pointer text-gray-100 bg-gray-700 bg-opacity-40 px-3 py-1 rounded hover:bg-gray-200 hover:text-amber-700 hover:scale-105 duration-300"
                  >
                    {place}
                  </p>
                ))}
              </div>
            </div>
            <div className="absolute lg:bottom-10 bottom-[-60px] left-0 right-0 text-center">
              <small className="text-gray-100">
                Developed by{" "}
                <a href="https://mahfuzur01.netlify.app/" target="_blank" className="text-sm font-light text-amber-700 bg-white p-1 rounded-md">
                  Mahfuzur Rahman
                </a>
              </small>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
