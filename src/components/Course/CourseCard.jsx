import React, { useState } from "react";
import "animate.css";
import {decode} from 'html-entities';
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  let { id, title, meta } = course;
  const [mousein, setMouseIn] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setTimeout(() => {
          setMouseIn(true);
        }, 1500);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setMouseIn(false);
        }, 1500);
      }}
      className="p-2 cs-shadow cursor-pointer mb-8 rounded-md min-h-[257px] md:max-h-max"
    >
      <div
        onClick={() => setMouseIn(true)}
        className="relative overflow-hidden"
      >
        {/* Course main */}
        <div className="grid md:grid-cols-3 w-full">
          {/* Course Image */}
          <div
            style={{
              backgroundImage:
                `url(${meta.thumbnile})`,
            }}
            className="w-[100vw] cs-shadow md:grid-cols-1 block h-[250px] md:h-[180px] md:w-full bg-cover bg-no-repeat bg-center p-2"
          ></div>

          {/* Course Provider and Details */}
          <div className="p-2 col-span-2 space-y-2 md:pr-0 pr-24">
            {/* Course Provider */}
            <span className="text-sm mt-2 bg-gray-50 px-3 py-1 rounded-full text-green-500 font-bold ">
              {meta.type}
            </span>
            {/* Course Name */}
            <h1 className="md:text-xl text-lg font-bold text-blue-900 italic duration-1000 ease-linear overflow-ellipsis overflow-hidden">
              {decode(title.rendered)}
            </h1>
            {/* Course Subtitle */}
            <h1 className="text-sm mt-2 text-gray-500 font-thin overflow-ellipsis overflow-hidden">
              {decode(meta?.subtitle)}
            </h1>
          </div>
        </div>

        {/* Course Extras */}
        <div className="mt-1 p-2 md:flex gap-4 justify-between">
          <div className="flex flex-wrap gap-4">
            <div className="px-6 flex items-center justify-center font-bold py-1 text-gray-700 border rounded-full">
              Online
            </div>
            <div className="px-6 flex items-center justify-center font-bold py-1 text-gray-700 border rounded-full">
              Certificate(s) included
            </div>
            <div className="px-6 flex items-center justify-center font-bold py-1 text-gray-700 border rounded-full">
              Tutor Support
            </div>
            <div className="px-6 flex items-center justify-center font-bold py-1 text-gray-700 border rounded-full">
            {(Number(meta.duration) / 60).toFixed(2)} hours · Self-paced
            </div>
          </div>
          <div className="px-6 flex items-center justify-center font-bold py-1 shadow rounded-full">
            <h1 className="text-2xl text-green-600 animate-pulse">
              ${meta.price}
            </h1>
          </div>
        </div>

        {/* Hover Div */}
        {mousein && (
          <div className="bg-blue-500 rounded-md animate__animated animate__fadeInLeft absolute left-0 md:top-0 bottom-0 z-20 w-full md:w-[300px] h-[240px] p-2">
            {/* Price */}
            <h1 className="text-5xl text-white font-extralight text-center my-4">
            ${meta.price}
            </h1>
            {/* Read More */}
            <Link
              to={`/course/details/${id}`}
              className="block bg-white text-blue-500 py-3 duration-300 cs-shadow text-center w-[230px] my-2 mx-auto rounded-md text-lg font-bold"
            >
              View Details
            </Link>
            {/* Add to Cart */}
            <button className="block bg-green-500 text-white py-3 duration-300 text-center w-[230px] my-2 mx-auto rounded-md text-lg font-bold">
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
