import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/Course/CourseCard";
import CategoryList from "../components/Course/CategoryList";
import Loader from "../components/Child/Loader";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(true); // Initially load all courses
let [perpage, setPerPage] = useState(5) 
  useEffect(() => {
    let cancelToken;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://guaranteesteel.s3-tastewp.com/wp-json/wp/v2/course`,
          {
            params: {
              search: searchQuery,
            },
            cancelToken: new axios.CancelToken((token) => {
              cancelToken = token;
            }),
          }
        );

        setCourses(response.data);
        setIsLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log("Error:", error);
          setIsLoading(false);
        }
      }
    };

    if (isSearchClicked || searchQuery === "") {
      fetchData();
    }

    return () => {
      // Cancel the previous request if a new one is initiated
      if (cancelToken) {
        cancelToken();
      }
    };



  }, [searchQuery, isSearchClicked]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setIsSearchClicked(false); // Reset search state when input changes
  };

  const handleSearchButtonClick = () => {
    setIsSearchClicked(true);
  };

  const handleInputBlur = () => {
    if (searchQuery.trim() !== "") {
      setIsSearchClicked(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchClicked(true); // Load all data when clearing search
  };



  return (
    <div className="p-4 bg-[#f8f8f8]">
      <div className="p-2 my-4 rounded-md bg-white max-w-7xl mx-auto py-20 flex justify-center">
        <div className="relative w-[900px] ">
          <form className="relative w-[900px] " onSubmit={(e)=>{e.preventDefault()}}>
          <input
            type="text"
            placeholder="Search courses"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onBlur={handleInputBlur}
            className="w-3/4 mx-auto p-3 text-lg rounded-md border focus:outline-none focus:border-blue-500"
          />
          <button
          type="submit"
            onClick={handleSearchButtonClick}
            className="ml-2 bg-blue-500 text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600"
          >
            Search
          </button>
          
          </form>
          
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto p-2 md:gap-10 gap-1 rounded-md bg-white">
        <div className="p-2 border col-span-1 w-full hidden md:block mx-auto rounded-md h-auto animate__animated animate__animated">
          <CategoryList />
        </div>
        <div className="p-2 col-span-3 rounded-md">
          {isLoading ? (
            <Loader />
          ) : courses.length === 0 && isSearchClicked ? (
            <p>No courses found.</p>
          ) : (
            courses.map((course, id) => {
              return <CourseCard course={course} key={id} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
