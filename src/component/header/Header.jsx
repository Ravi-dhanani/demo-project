import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header header-intro-clearance header-4">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <a href="tel:#">
                <i className="icon-phone" />
                Call: +9664729482
              </a>
            </div>
            {/* End .header-left */}
            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <a href="#">Links</a>
                  <ul>
                    <li>
                      <a href="#signin-modal" data-toggle="modal">
                        Sign in / Sign up
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* End .top-menu */}
            </div>
            {/* End .header-right */}
          </div>
          {/* End .container */}
        </div>
        {/* End .header-top */}
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars" />
              </button>
              <a href="index.html" className="logo">
                <img
                  src="assets/images/demos/demo-4/logo.png"
                  alt="Molla Logo"
                  width={105}
                  height={25}
                />
              </a>
            </div>
            {/* End .header-left */}
            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-search" />
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search" />
                    </button>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      required
                    />
                  </div>
                  {/* End .header-search-wrapper */}
                </form>
              </div>
              {/* End .header-search */}
            </div>
            <div className="header-right">
              <div className="wishlist">
                <a href="wishlist.html" title="Wishlist">
                  <div className="icon">
                    <i className="icon-heart-o" />
                    <span className="wishlist-count badge">3</span>
                  </div>
                  <p>Wishlist</p>
                </a>
              </div>
              {/* End .compare-dropdown */}
              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <div className="icon">
                    <i className="icon-shopping-cart" />
                    <span className="cart-count">2</span>
                  </div>
                  <p>Cart</p>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-cart-products">
                    <div className="product">
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">
                            Beige knitted elastic runner shoes
                          </a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $84.00
                        </span>
                      </div>
                      {/* End .product-cart-details */}
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img
                            src="assets/images/products/cart/product-1.jpg"
                            alt="product"
                          />
                        </a>
                      </figure>
                      <a href="#" className="btn-remove" title="Remove Product">
                        <i className="icon-close" />
                      </a>
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">
                            Blue utility pinafore denim dress
                          </a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $76.00
                        </span>
                      </div>
                      {/* End .product-cart-details */}
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img
                            src="assets/images/products/cart/product-2.jpg"
                            alt="product"
                          />
                        </a>
                      </figure>
                      <a href="#" className="btn-remove" title="Remove Product">
                        <i className="icon-close" />
                      </a>
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .cart-product */}
                  <div className="dropdown-cart-total">
                    <span>Total</span>
                    <span className="cart-total-price">$160.00</span>
                  </div>
                  {/* End .dropdown-cart-total */}
                  <div className="dropdown-cart-action">
                    <a href="cart.html" className="btn btn-primary">
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className="btn btn-outline-primary-2"
                    >
                      <span>Checkout</span>
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>
                  {/* End .dropdown-cart-total */}
                </div>
                {/* End .dropdown-menu */}
              </div>
              {/* End .cart-dropdown */}
            </div>
            {/* End .header-right */}
          </div>
          {/* End .container */}
        </div>
        {/* End .header-middle */}
        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left">
              <div className="dropdown category-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Browse Categories"
                >
                  Browse Categories <i className="icon-angle-down" />
                </a>
                <div className="dropdown-menu">
                  <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                      <li className="item-lead">
                        <a href="#">Daily offers</a>
                      </li>
                      <li className="item-lead">
                        <a href="#">Gift Ideas</a>
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
                    {/* End .menu-vertical */}
                  </nav>
                  {/* End .side-nav */}
                </div>
                {/* End .dropdown-menu */}
              </div>
              {/* End .category-dropdown */}
            </div>
            {/* End .header-left */}
            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container active">
                    <a href={"/"}>Home</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      // onClick={() => {
                      //   navigate("/shop");
                      // }}
                    >
                      Shop
                    </a>
                    {/* <div className="megamenu megamenu-md">
                      <div className="row no-gutters">
                        <div className="col-md-8">
                          <div className="menu-col">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="menu-title">
                                  Shop with sidebar
                                </div>
                                <ul>
                                  <li>
                                    <a href="category-list.html">Shop List</a>
                                  </li>
                                  <li>
                                    <a href="category-2cols.html">
                                      Shop Grid 2 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category.html">
                                      Shop Grid 3 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-4cols.html">
                                      Shop Grid 4 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-market.html">
                                      <span>
                                        Shop Market
                                        <span className="tip tip-new">New</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                                <div className="menu-title">
                                  Shop no sidebar
                                </div>
                                <ul>
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
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <div className="menu-title">
                                  Product Category
                                </div>
                                <ul>
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
                                </ul>
                                <div className="menu-title">Shop Pages</div>
                                <ul>
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
                                    <a href="dashboard.html">My Account</a>
                                  </li>
                                  <li>
                                    <a href="#">Lookbook</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="banner banner-overlay">
                            <a
                              href="category.html"
                              className="banner banner-menu"
                            >
                              <img
                                src="assets/images/menu/banner-1.jpg"
                                alt="Banner"
                              />
                              <div className="banner-content banner-content-top">
                                <div className="banner-title text-white">
                                  Last <br />
                                  Chance
                                  <br />
                                  <span>
                                    <strong>Sale</strong>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </li>
                  <li className="megamenu-container">
                    <a href={"/"}>Product</a>
                  </li>
                  <li className="megamenu-container">
                    <a href={"/"}>Electric Product</a>
                  </li>

                  <li className="megamenu-container">
                    <a href={"/"}>Contact Us</a>
                  </li>
                </ul>
                {/* End .menu */}
              </nav>
              {/* End .main-nav */}
            </div>
            {/* End .header-center */}
            <div className="header-right">
              <i className="la la-lightbulb-o" />
              <p>
                Clearance
                <span className="highlight">&nbsp;Up to 30% Off</span>
              </p>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* End .header-bottom */}
      </header>
    </>
  );
}
