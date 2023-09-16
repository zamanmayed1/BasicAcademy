import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseCard from '../components/Course/CourseCard'
import CategoryList from '../components/Course/CategoryList'
import Loader from '../components/Child/Loader'
const Archive = () => {
  const { id, slug } = useParams();
  const url = `https://guaranteesteel.s3-tastewp.com/wp-json/wp/v2/course?coursecategory=${id}`;
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true when fetching data
    axios
      .get(url)
      .then(function (response) {
        setCourses(response.data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, [id]);

  return (
    <div className="p-4 bg-[#f8f8f8] min-h-screen">    
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto p-2 md:gap-10 gap-1 rounded-md bg-white">
        <div className="p-2 col-span-3 rounded-md">
          <div className='mb-4 p-3 bg-gray-50'>
            <h1 className='text-lg'>Result For : <span className='font-bold'>{slug.toUpperCase()}</span></h1>
            <h1 className='text-lg '>Total Course : <span className='font-bold'>{courses?.length}</span></h1>
          </div>
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
        <div className="p-2 border overflow-y-scroll cs-container max-h-[450px] col-span-1 w-full hidden md:flex justify-center mx-auto rounded-md h-auto ">
          <CategoryList />
        </div>
      </div>
    </div>
  )
}

export default Archive
