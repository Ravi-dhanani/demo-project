import React from "react";
import useCategory from "../../data/data";

export default function Category() {
  const lstCategory = useCategory();
  return (
    <div className="container">
      <h2 className="title text-center mb-4">Explore Popular Categories</h2>
      {/* End .title text-center */}
      <div className="cat-blocks-container">
        <div className="row">
          {lstCategory.map((item) => (
            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img src={item.image} alt="Category image" />
                  </span>
                </figure>
                <h3 className="cat-block-title">{item.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
