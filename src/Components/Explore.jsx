import React from "react";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        <p className="exploreCategoryHeading">Categories</p>

        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for Rent</p>
          </Link>

          <Link to="/category/sale">
            <img
              className="exploreCategoryImg"
              src={sellCategoryImage}
              alt="sale"
            />
            <p className="exploreCatgoryImg">Places in Sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
