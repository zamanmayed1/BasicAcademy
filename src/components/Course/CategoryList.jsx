import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://basicacademy-backend.local/wp-json/wp/v2/coursecategory?per_page=20"
      )
      .then(function (response) {
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [category.length]);

  return (
    <div>
      {category
        .sort((a, b) => b.count - a.count)
        .map((val, i) => {
          return (
            <Link
              to={`/archive/${val.id}/${val.slug}`}
              className="p-2 cs-category-shadow block cursor-pointer text-blue-700 text-lg bg-white hover:bg-slate-100 my-3"
              key={i}
            >
              {val.name} ({val.count})
            </Link>
          );
        })}
    </div>
  );
};

export default CategoryList;
