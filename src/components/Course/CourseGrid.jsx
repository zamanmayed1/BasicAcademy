import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";
import CategoryList from "./CategoryList";
import Loader from '../../components/Child/Loader'

const CourseGrid = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true when fetching data
    axios
      .get("http://basicacademy-backend.local/wp-json/wp/v2/course")
      .then(function (response) {
        setCourses(response.data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, [courses.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto  p-2 md:gap-10 gap-1 rounded-md bg-white  ">
      <div className="p-2 border col-span-1 w-full hidden md:block  mx-auto rounded-md h-auto animate__animated animate__animated">
      
       <CategoryList />
      </div>
      <div className="p-2 col-span-3 rounded-md">
        {isLoading ? (
          // Render a loader component while loading
          <Loader/>
        ) : (
          // Render the course cards when data is available
          courses.map((course, id) => {
            return <CourseCard course={course} key={id} />;
          })
        )}
      </div>
    </div>
  );
};

export default CourseGrid;
