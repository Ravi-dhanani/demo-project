import React from "react";
import HomePageCarousal from "../carousal/HomePageCarousal";
import Category from "../product/Category";

export default function LandingPage() {
  return (
    <>
      <div>
        <div className="page-wrapper">
          <main className="main">
            <HomePageCarousal />
            <Category />
            {/* End .container */}
            <div className="mb-3" />
            {/* End .mb-5 */}
            <div className="container new-arrivals">
              <div className="heading heading-flex mb-3">
                <div className="heading-left">
                  <h2 className="title">New Arrivals</h2>
                  {/* End .title */}
                </div>
                {/* End .heading-left */}
                <div className="heading-right">
                  <ul
                    className="nav nav-pills nav-border-anim justify-content-center"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="new-all-link"
                        data-toggle="tab"
                        href="#new-all-tab"
                        role="tab"
                        aria-controls="new-all-tab"
                        aria-selected="true"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="new-tv-link"
                        data-toggle="tab"
                        href="#new-tv-tab"
                        role="tab"
                        aria-controls="new-tv-tab"
                        aria-selected="false"
                      >
                        TV
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="new-computers-link"
                        data-toggle="tab"
                        href="#new-computers-tab"
                        role="tab"
                        aria-controls="new-computers-tab"
                        aria-selected="false"
                      >
                        Computers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="new-phones-link"
                        data-toggle="tab"
                        href="#new-phones-tab"
                        role="tab"
                        aria-controls="new-phones-tab"
                        aria-selected="false"
                      >
                        Tablets &amp; Cell Phones
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="new-watches-link"
                        data-toggle="tab"
                        href="#new-watches-tab"
                        role="tab"
                        aria-controls="new-watches-tab"
                        aria-selected="false"
                      >
                        Smartwatches
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="new-acc-link"
                        data-toggle="tab"
                        href="#new-acc-tab"
                        role="tab"
                        aria-controls="new-acc-tab"
                        aria-selected="false"
                      >
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End .heading-right */}
              </div>
              {/* End .heading */}
              <div className="tab-content tab-content-carousel just-action-icons-sm">
                <div
                  className="tab-pane p-0 fade show active"
                  id="new-all-tab"
                  role="tabpanel"
                  aria-labelledby="new-all-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                      "nav": true, 
                      "dots": true,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":2
                          },
                          "480": {
                              "items":2
                          },
                          "768": {
                              "items":3
                          },
                          "992": {
                              "items":4
                          },
                          "1200": {
                              "items":5
                          }
                      }
                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="new-tv-tab"
                  role="tabpanel"
                  aria-labelledby="new-tv-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                      "nav": true, 
                      "dots": true,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":2
                          },
                          "480": {
                              "items":2
                          },
                          "768": {
                              "items":3
                          },
                          "992": {
                              "items":4
                          },
                          "1200": {
                              "items":5
                          }
                      }
                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="new-computers-tab"
                  role="tabpanel"
                  aria-labelledby="new-computers-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                      "nav": true, 
                      "dots": true,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":2
                          },
                          "480": {
                              "items":2
                          },
                          "768": {
                              "items":3
                          },
                          "992": {
                              "items":4
                          },
                          "1200": {
                              "items":5
                          }
                      }
                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="new-phones-tab"
                  role="tabpanel"
                  aria-labelledby="new-phones-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                      "nav": true, 
                      "dots": true,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":2
                          },
                          "480": {
                              "items":2
                          },
                          "768": {
                              "items":3
                          },
                          "992": {
                              "items":4
                          },
                          "1200": {
                              "items":5
                          }
                      }
                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="new-watches-tab"
                  role="tabpanel"
                  aria-labelledby="new-watches-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                      "nav": true, 
                      "dots": true,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":2
                          },
                          "480": {
                              "items":2
                          },
                          "768": {
                              "items":3
                          },
                          "992": {
                              "items":4
                          },
                          "1200": {
                              "items":5
                          }
                      }
                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="new-acc-tab"
                  role="tabpanel"
                  aria-labelledby="new-acc-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                      "nav": true, 
                      "dots": true,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":2
                          },
                          "480": {
                              "items":2
                          },
                          "768": {
                              "items":3
                          },
                          "992": {
                              "items":4
                          },
                          "1200": {
                              "items":5
                          }
                      }
                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .container */}
            <div className="mb-6" />
            {/* End .mb-6 */}

            <div className="container">
              <hr className="mb-0" />
              <div
                className="owl-carousel mt-5 mb-5 owl-simple"
                data-toggle="owl"
                data-owl-options='{
              "nav": false, 
              "dots": false,
              "margin": 30,
              "loop": false,
              "responsive": {
                  "0": {
                      "items":2
                  },
                  "420": {
                      "items":3
                  },
                  "600": {
                      "items":4
                  },
                  "900": {
                      "items":5
                  },
                  "1024": {
                      "items":6
                  }
              }
          }'
              >
                <a href="#" className="brand">
                  <img src="assets/images/brands/1.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/2.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/3.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/4.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/5.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/6.png" alt="Brand Name" />
                </a>
              </div>
              {/* End .owl-carousel */}
            </div>
            {/* End .container */}

            {/* End .bg-light pt-5 pb-6 */}
            <div className="mb-5" />
            {/* End .mb-5 */}
            <div className="container for-you">
              <div className="heading heading-flex mb-3">
                <div className="heading-left">
                  <h2 className="title">Recommendation For You</h2>
                  {/* End .title */}
                </div>
                {/* End .heading-left */}
                <div className="heading-right">
                  <a href="#" className="title-link">
                    View All Recommendadion{" "}
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .heading-right */}
              </div>
              {/* End .heading */}
              <div className="products">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-10.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Headphones</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Beats by Dr. Dre Wireless Headphones
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$279.99</span>
                          <span className="old-price">Was $349.99</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#666666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ff887f" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#6699cc" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f3dbc1" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cameras &amp; Camcorders</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            GoPro - HERO7 Black HD Waterproof Action
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$349.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-4/products/product-12-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smartwatches</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - Apple Watch Series 3 with White Sport Band
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$214.49</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#e2e2e2" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f2bc9e" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Lenovo - 330-15IKBR 15.6"</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="out-price">$339.99</span>
                          <span className="out-text">Out Of Stock</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 11 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Digital Cameras</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Sony - Alpha a5100 Mirrorless Camera
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$499.99</div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <span className="ratings-text">( 11 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Home Mini - Smart Speaker with Google Assistant
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$49.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 24 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#ef837b" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#e2e2e2" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-16.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            WONDERBOOM Portable Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$99.99</span>
                          <span className="old-price">Was $129.99</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#666666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ff887f" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#6699cc" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f3dbc1" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-4/products/product-17.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smart Home</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Google - Home Hub with Google Assistant
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$149.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .products */}
            </div>
            {/* End .container */}
            <div className="mb-4" />
            {/* End .mb-4 */}
            <div className="container">
              <hr className="mb-0" />
            </div>
            {/* End .container */}
            <div className="icon-boxes-container bg-transparent">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-rocket" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Free Shipping</h3>
                        {/* End .icon-box-title */}
                        <p>Orders $50 or more</p>
                      </div>
                      {/* End .icon-box-content */}
                    </div>
                    {/* End .icon-box */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-rotate-left" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Free Returns</h3>
                        {/* End .icon-box-title */}
                        <p>Within 30 days</p>
                      </div>
                      {/* End .icon-box-content */}
                    </div>
                    {/* End .icon-box */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-info-circle" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                        {/* End .icon-box-title */}
                        <p>when you sign up</p>
                      </div>
                      {/* End .icon-box-content */}
                    </div>
                    {/* End .icon-box */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="icon-life-ring" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">We Support</h3>
                        {/* End .icon-box-title */}
                        <p>24/7 amazing services</p>
                      </div>
                      {/* End .icon-box-content */}
                    </div>
                    {/* End .icon-box */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </div>
            {/* End .icon-boxes-container */}
          </main>
          {/* End .main */}

          {/* End .footer */}
        </div>
        {/* End .page-wrapper */}
        <button id="scroll-top" title="Back to Top">
          <i className="icon-arrow-up" />
        </button>
        {/* Mobile Menu */}
        <div className="mobile-menu-overlay" />
        {/* End .mobil-menu-overlay */}
        <div className="mobile-menu-container mobile-menu-light">
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close">
              <i className="icon-close" />
            </span>
            <form action="#" method="get" className="mobile-search">
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                className="form-control"
                name="mobile-search"
                id="mobile-search"
                placeholder="Search in..."
                required
              />
              <button className="btn btn-primary" type="submit">
                <i className="icon-search" />
              </button>
            </form>
            <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="mobile-menu-link"
                  data-toggle="tab"
                  href="#mobile-menu-tab"
                  role="tab"
                  aria-controls="mobile-menu-tab"
                  aria-selected="true"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="mobile-cats-link"
                  data-toggle="tab"
                  href="#mobile-cats-tab"
                  role="tab"
                  aria-controls="mobile-cats-tab"
                  aria-selected="false"
                >
                  Categories
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="mobile-menu-tab"
                role="tabpanel"
                aria-labelledby="mobile-menu-link"
              >
                <nav className="mobile-nav">
                  <ul className="mobile-menu">
                    <li className="active">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index-1.html">01 - furniture store</a>
                        </li>
                        <li>
                          <a href="index-2.html">02 - furniture store</a>
                        </li>
                        <li>
                          <a href="index-3.html">03 - electronic store</a>
                        </li>
                        <li>
                          <a href="index-4.html">04 - electronic store</a>
                        </li>
                        <li>
                          <a href="index-5.html">05 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-6.html">06 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-7.html">07 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-8.html">08 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-9.html">09 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-10.html">10 - shoes store</a>
                        </li>
                        <li>
                          <a href="index-11.html">
                            11 - furniture simple store
                          </a>
                        </li>
                        <li>
                          <a href="index-12.html">12 - fashion simple store</a>
                        </li>
                        <li>
                          <a href="index-13.html">13 - market</a>
                        </li>
                        <li>
                          <a href="index-14.html">14 - market fullwidth</a>
                        </li>
                        <li>
                          <a href="index-15.html">15 - lookbook 1</a>
                        </li>
                        <li>
                          <a href="index-16.html">16 - lookbook 2</a>
                        </li>
                        <li>
                          <a href="index-17.html">17 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-18.html">
                            18 - fashion store (with sidebar)
                          </a>
                        </li>
                        <li>
                          <a href="index-19.html">19 - games store</a>
                        </li>
                        <li>
                          <a href="index-20.html">20 - book store</a>
                        </li>
                        <li>
                          <a href="index-21.html">21 - sport store</a>
                        </li>
                        <li>
                          <a href="index-22.html">22 - tools store</a>
                        </li>
                        <li>
                          <a href="index-23.html">
                            23 - fashion left navigation store
                          </a>
                        </li>
                        <li>
                          <a href="index-24.html">24 - extreme sport store</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="category.html">Shop</a>
                      <ul>
                        <li>
                          <a href="category-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="category-2cols.html">Shop Grid 2 Columns</a>
                        </li>
                        <li>
                          <a href="category.html">Shop Grid 3 Columns</a>
                        </li>
                        <li>
                          <a href="category-4cols.html">Shop Grid 4 Columns</a>
                        </li>
                        <li>
                          <a href="category-boxed.html">
                            <span>
                              Shop Boxed No Sidebar
                              <span className="tip tip-hot">Hot</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="category-fullwidth.html">
                            Shop Fullwidth No Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="product-category-boxed.html">
                            Product Category Boxed
                          </a>
                        </li>
                        <li>
                          <a href="product-category-fullwidth.html">
                            <span>
                              Product Category Fullwidth
                              <span className="tip tip-new">New</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="#">Lookbook</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="product.html" className="sf-with-ul">
                        Product
                      </a>
                      <ul>
                        <li>
                          <a href="product.html">Default</a>
                        </li>
                        <li>
                          <a href="product-centered.html">Centered</a>
                        </li>
                        <li>
                          <a href="product-extended.html">
                            <span>
                              Extended Info
                              <span className="tip tip-new">New</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="product-gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="product-sticky.html">Sticky Info</a>
                        </li>
                        <li>
                          <a href="product-sidebar.html">Boxed With Sidebar</a>
                        </li>
                        <li>
                          <a href="product-fullwidth.html">Full Width</a>
                        </li>
                        <li>
                          <a href="product-masonry.html">Masonry Sticky Info</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About</a>
                          <ul>
                            <li>
                              <a href="about.html">About 01</a>
                            </li>
                            <li>
                              <a href="about-2.html">About 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                          <ul>
                            <li>
                              <a href="contact.html">Contact 01</a>
                            </li>
                            <li>
                              <a href="contact-2.html">Contact 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Classic</a>
                        </li>
                        <li>
                          <a href="blog-listing.html">Listing</a>
                        </li>
                        <li>
                          <a href="#">Grid</a>
                          <ul>
                            <li>
                              <a href="blog-grid-2cols.html">Grid 2 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-3cols.html">Grid 3 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-4cols.html">Grid 4 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-sidebar.html">Grid sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Masonry</a>
                          <ul>
                            <li>
                              <a href="blog-masonry-2cols.html">
                                Masonry 2 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-3cols.html">
                                Masonry 3 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-4cols.html">
                                Masonry 4 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-sidebar.html">
                                Masonry sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Mask</a>
                          <ul>
                            <li>
                              <a href="blog-mask-grid.html">Blog mask grid</a>
                            </li>
                            <li>
                              <a href="blog-mask-masonry.html">
                                Blog mask masonry
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Single Post</a>
                          <ul>
                            <li>
                              <a href="single.html">Default with sidebar</a>
                            </li>
                            <li>
                              <a href="single-fullwidth.html">
                                Fullwidth no sidebar
                              </a>
                            </li>
                            <li>
                              <a href="single-fullwidth-sidebar.html">
                                Fullwidth with sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="elements-list.html">Elements</a>
                      <ul>
                        <li>
                          <a href="elements-products.html">Products</a>
                        </li>
                        <li>
                          <a href="elements-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="elements-titles.html">Titles</a>
                        </li>
                        <li>
                          <a href="elements-banners.html">Banners</a>
                        </li>
                        <li>
                          <a href="elements-product-category.html">
                            Product Category
                          </a>
                        </li>
                        <li>
                          <a href="elements-video-banners.html">
                            Video Banners
                          </a>
                        </li>
                        <li>
                          <a href="elements-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="elements-accordions.html">Accordions</a>
                        </li>
                        <li>
                          <a href="elements-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="elements-testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="elements-blog-posts.html">Blog Posts</a>
                        </li>
                        <li>
                          <a href="elements-portfolio.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="elements-cta.html">Call to Action</a>
                        </li>
                        <li>
                          <a href="elements-icon-boxes.html">Icon Boxes</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                {/* End .mobile-nav */}
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="mobile-cats-tab"
                role="tabpanel"
                aria-labelledby="mobile-cats-link"
              >
                <nav className="mobile-cats-nav">
                  <ul className="mobile-cats-menu">
                    <li>
                      <a className="mobile-cats-lead" href="#">
                        Daily offers
                      </a>
                    </li>
                    <li>
                      <a className="mobile-cats-lead" href="#">
                        Gift Ideas
                      </a>
                    </li>
                    <li>
                      <a href="#">Beds</a>
                    </li>
                    <li>
                      <a href="#">Lighting</a>
                    </li>
                    <li>
                      <a href="#">Sofas &amp; Sleeper sofas</a>
                    </li>
                    <li>
                      <a href="#">Storage</a>
                    </li>
                    <li>
                      <a href="#">Armchairs &amp; Chaises</a>
                    </li>
                    <li>
                      <a href="#">Decoration </a>
                    </li>
                    <li>
                      <a href="#">Kitchen Cabinets</a>
                    </li>
                    <li>
                      <a href="#">Coffee &amp; Tables</a>
                    </li>
                    <li>
                      <a href="#">Outdoor Furniture </a>
                    </li>
                  </ul>
                  {/* End .mobile-cats-menu */}
                </nav>
                {/* End .mobile-cats-nav */}
              </div>
              {/* .End .tab-pane */}
            </div>
            {/* End .tab-content */}
            <div className="social-icons">
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Facebook"
              >
                <i className="icon-facebook-f" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Twitter"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Instagram"
              >
                <i className="icon-instagram" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Youtube"
              >
                <i className="icon-youtube" />
              </a>
            </div>
            {/* End .social-icons */}
          </div>
          {/* End .mobile-menu-wrapper */}
        </div>
        {/* End .mobile-menu-container */}
        {/* Sign in / Register Modal */}
        <div
          className="modal fade"
          id="signin-modal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="icon-close" />
                  </span>
                </button>
                <div className="form-box">
                  <div className="form-tab">
                    <ul
                      className="nav nav-pills nav-fill nav-border-anim"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="signin-tab"
                          data-toggle="tab"
                          href="#signin"
                          role="tab"
                          aria-controls="signin"
                          aria-selected="true"
                        >
                          Sign In
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="register-tab"
                          data-toggle="tab"
                          href="#register"
                          role="tab"
                          aria-controls="register"
                          aria-selected="false"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="tab-content-5">
                      <div
                        className="tab-pane fade show active"
                        id="signin"
                        role="tabpanel"
                        aria-labelledby="signin-tab"
                      >
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="singin-email">
                              Username or email address *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="singin-email"
                              name="singin-email"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="singin-password">Password *</label>
                            <input
                              type="password"
                              className="form-control"
                              id="singin-password"
                              name="singin-password"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>LOG IN</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="signin-remember"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="signin-remember"
                              >
                                Remember Me
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <a href="#" className="forgot-link">
                              Forgot Your Password?
                            </a>
                          </div>
                          {/* End .form-footer */}
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" />
                                Login With Google
                              </a>
                            </div>
                            {/* End .col-6 */}
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-f">
                                <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                            </div>
                            {/* End .col-6 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .form-choice */}
                      </div>
                      {/* .End .tab-pane */}
                      <div
                        className="tab-pane fade"
                        id="register"
                        role="tabpanel"
                        aria-labelledby="register-tab"
                      >
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="register-email">
                              Your email address *
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="register-email"
                              name="register-email"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-password">
                              Password *
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="register-password"
                              name="register-password"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>SIGN UP</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="register-policy"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="register-policy"
                              >
                                I agree to the <a href="#">privacy policy</a> *
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .form-footer */}
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" />
                                Login With Google
                              </a>
                            </div>
                            {/* End .col-6 */}
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login  btn-f">
                                <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                            </div>
                            {/* End .col-6 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .form-choice */}
                      </div>
                      {/* .End .tab-pane */}
                    </div>
                    {/* End .tab-content */}
                  </div>
                  {/* End .form-tab */}
                </div>
                {/* End .form-box */}
              </div>
              {/* End .modal-body */}
            </div>
            {/* End .modal-content */}
          </div>
          {/* End .modal-dialog */}
        </div>
        {/* End .modal */}
        <div
          className="container newsletter-popup-container mfp-hide"
          id="newsletter-popup-form"
        >
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row no-gutters bg-white newsletter-popup-content">
                <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                  <div className="banner-content text-center">
                    <img
                      src="assets/images/popup/newsletter/logo.png"
                      className="logo"
                      alt="logo"
                      width={60}
                      height={15}
                    />
                    <h2 className="banner-title">
                      get{" "}
                      <span>
                        25<light>%</light>
                      </span>{" "}
                      off
                    </h2>
                    <p>
                      Subscribe to the Molla eCommerce newsletter to receive
                      timely updates from your favorite products.
                    </p>
                    <form action="#">
                      <div className="input-group input-group-round">
                        <input
                          type="email"
                          className="form-control form-control-white"
                          placeholder="Your Email Address"
                          aria-label="Email Adress"
                          required
                        />
                        <div className="input-group-append">
                          <button className="btn" type="submit">
                            <span>go</span>
                          </button>
                        </div>
                        {/* .End .input-group-append */}
                      </div>
                      {/* .End .input-group */}
                    </form>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="register-policy-2"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="register-policy-2"
                      >
                        Do not show this popup again
                      </label>
                    </div>
                    {/* End .custom-checkbox */}
                  </div>
                </div>
                <div className="col-xl-2-5col col-lg-5 ">
                  <img
                    src="assets/images/popup/newsletter/img-1.jpg"
                    className="newsletter-img"
                    alt="newsletter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
