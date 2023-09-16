import React, { useEffect, useState } from "react";
import Curriculum from "../components/Course/Curriculum";
import { useParams } from "react-router-dom";
import axios from "axios";
import {decode} from 'html-entities';

const SingleCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  // Important Data
  const { title, meta ,content} = course;
  const courseTitle =  title?.rendered;
  const courseSubtitle = meta?.subtitle;
  const price = meta?.price;
  const duration = meta?.duration;
  const courseType = meta?.type;
  const thumbnile = meta?.thumbnile;
  const overview = content?.rendered;

  let url = `https://guaranteesteel.s3-tastewp.com/wp-json/wp/v2/course/${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setCourse(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);


  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto p-4 rounded-md bg-white">
        <div className="grid grid-cols-12 gap-8">
          {/* Course Details */}
          <div className="col-span-12 md:col-span-9 p-4 bg-gray-50">
            {/* Course Title */}
            <h1 id="Title" className="text-2xl font-bold text-gray-800">{decode(courseTitle)}</h1>
            {/* Course Subtitle */}
            <p className="text-gray-600 text-md mt-2">{decode(courseSubtitle)}</p>

            {/* Course Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {/* Price */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-gray-600 font-semibold">Price</p>
                <p className="text-lg font-bold text-indigo-700">${price}</p>
              </div>

              {/* Study Method */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-gray-600 font-semibold">Study Method</p>
                <p className="text-lg text-indigo-700">Online, self-paced</p>
              </div>

              {/* Duration */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-gray-600 font-semibold">Duration</p>
                <p className="text-lg text-indigo-700">
                  {(Number(duration) / 60).toFixed(2)} hours
                </p>
              </div>

              {/* Access to Content */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-gray-600 font-semibold">Access to Content</p>
                <p className="text-lg text-indigo-700">Lifetime access</p>
              </div>

              {/* Qualification */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-gray-600 font-semibold">Course Type</p>
                <p className="text-lg text-indigo-700">{courseType}</p>
              </div>

              {/* Certificates */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-gray-600 font-semibold">Certificates</p>
                <p className="text-lg text-indigo-700">
                  Certificate of completion - Free
                </p>
              </div>
            </div>
          </div>

          {/* Course Image and small info */}
          <div className="col-span-12 md:col-span-3 ">
            {/* Course Image */}
            <div
              style={{
                backgroundImage: `url(${thumbnile})`,
              }}
              className="w-full h-[250px] md:h-[180px] bg-cover border-2 cs-shadow bg-no-repeat bg-center rounded-md"
            ></div>
            {/* Other Info */}
             {/* Add to Cart */}
             <button className="block bg-green-500 hover:bg-green-600 duration-500 text-white py-3 text-center w-[230px] my-2 mx-auto rounded-md text-lg font-bold">
              Add to Cart
            </button>
          </div>
        </div>
        {/* Course Details */}
        <div className="p-4 ">
          {/* Overview */}
          <div>
            <h1 className="text-xl font-bold ">Overview</h1>
            <hr className="mb-2" />
            {/* Overview Content */}
            <div className="my-4"
              dangerouslySetInnerHTML={{
                __html: `${overview}`,
              }}
            ></div>
          </div>
          {/* Course Curriculum */}
          {/* <div>
            <h1 className="text-xl font-bold">Course Curriculum</h1>
            <hr className="mb-2" />
            Course Units and lessons

            <Curriculum />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
