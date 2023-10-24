"use client";
import Image from "next/image";
import arrow from "../public/assets/images/icon-arrow.svg";
import useAgeCalculator from "@/app/hooks/useAgeCalculator";

export default function Home() {
  const {
    day,
    month,
    years,
    age,
    validationMessages,
    handleChangeDay,
    handleChangeMonth,
    handleChangeYears,
    calculateAge,
  } = useAgeCalculator();

  return (
    <section className="flex min-h-screen justify-center items-center  p-24 bg-gray-100 ">
      <div className="w-[50em] border p-12 bg-white shadow-sm flex  flex-col justify-between gap-2 rounded-br-[12em] rounded-3xl">
        <div className="flex items-center justify-start px-2">
          <label className=" text-slate-500 relative  ml-0">
            <p
              className={`mb-2 uppercase font-semibold ${
                validationMessages.day ? "text-red-400 " : "text-slate-500"
              }`}
            >
              day
            </p>
            <input
              type="text"
              placeholder="DD"
              value={day}
              onChange={handleChangeDay}
              className={`border w-1/2 rounded p-4 placeholder:text-2xl placeholder:font-bold text-2xl text-slate-900 font-bold ${
                validationMessages.day ? "border-red-400 " : "border-slate-500"
              }`}
            />
            {validationMessages.day && (
              <p className="text-red-400 italic absolute -bottom-8 left-2">
                {validationMessages.day}
              </p>
            )}
          </label>
          <label className=" text-gray-500 relative  ml-[-6em]">
            <p
              className={`mb-2 uppercase font-semibold ${
                validationMessages.month ? "text-red-400" : "text-slate-500"
              } `}
            >
              month
            </p>
            <input
              type="text"
              placeholder="MM"
              value={month}
              onChange={handleChangeMonth}
              className={`border w-1/2 rounded p-4 placeholder:text-2xl  placeholder:font-bold text-2xl text-slate-900 font-bold ${
                validationMessages.month ? "border-red-400" : "border-slate-500"
              }`}
            />
            {validationMessages.month && (
              <p className="text-red-400 italic absolute -bottom-8 left-2">
                {validationMessages.month}
              </p>
            )}
          </label>
          <label className=" text-gray-500 relative ml-[-6em] ">
            <p
              className={`mb-2 uppercase font-semibold ${
                validationMessages.year ? "text-red-400 " : "text-slate-500"
              }`}
            >
              year
            </p>
            <input
              type="text"
              placeholder="YYYY"
              value={years}
              onChange={handleChangeYears}
              className={`border w-1/2 rounded p-4 placeholder:text-2xl placeholder:font-bold text-2xl text-slate-900 font-bold ${
                validationMessages.year ? "border-red-400 " : "border-slate-500"
              }`}
            />
            {validationMessages.year && (
              <p className="text-red-400 italic absolute -bottom-8 left-2">
                {validationMessages.year}
              </p>
            )}
          </label>
        </div>
        <div className="flex items-center justify-between p-4 mt-[-1em]">
          <hr className="w-full  bg-slate-600 border-1 dark:bg-gray-700 " />
          <button
            className="bg-violet-500 rounded-full p-6 hover:bg-black shadow-md "
            onClick={calculateAge}
          >
            <Image src={arrow} alt="Flecha" className="w-full" />
          </button>
        </div>
        <div className="px-2 ">
          <ul className="flex flex-col text-transform:cursive">
            <li className="flex justify-start gap-2">
              <span className="text-8xl font-bold text-violet-500 italic">
                {age.years}
              </span>
              <p className="text-8xl font-bold italic">years</p>
            </li>
            <li className="flex justify-start gap-2">
              <span className="text-8xl font-bold text-violet-500 italic">
                {age.months}
              </span>
              <p className="text-8xl font-bold italic">months</p>
            </li>
            <li className="flex justify-start gap-2">
              <span className="text-8xl font-bold text-violet-500 italic">
                {age.days}
              </span>
              <p className="text-8xl font-bold italic">days</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
