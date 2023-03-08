import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";


import "./ProductDetails.css";
import ReactImageMagnify from "react-image-magnify";
import { Fragment } from "react";
import products from "./product";

const ProductDetails = () => {
  const params = useParams();
  console.log(params.productId);

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { imageUrl, title, price } = product;
  return (
    <Fragment>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 trending-blogs-section-heading mb-3 className="product-details">
                Product Details
              </h1>
            </div>
            <div className="col-12 col-md-6 m-auto">
              <div className="shadow mb-3">
                <div className="w-50 m-auto">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        isFluidWidth: true,
                        src: imageUrl,
                        alt: "smallImage",
                      
                      },
                      largeImage: {
                        src: imageUrl,
                        width: 1200,
                        height: 1800,
                        alt: "largeImage",
                      },
                    }}
                  />

                  <span>
                   
                    <Button className="button" variant="danger">
                      Buy Now
                    </Button>
                  </span>
                </div>

                <div className="p-3">
                  <h1 className="trending-blogs-card-sub-title">{title}</h1>
                  <h1 className="trending-blogs-title">
                    RS.{price}/-
                  </h1>
                  <div className="trending-blogs-card-description">
                  <h2 style={{color:"red"}}>Available offers</h2>
            <ul>
              <li>Special PriceGet at flat ₹329T&C</li>

              <li>
                Partner OfferPurchase now & get a surprise cashback coupon for
                January / February 2023Know More
              </li>

              <li>
                Bank Offer10% off on Kotak Bank Credit Cards and Credit EMI
                Trxns, up to ₹1,500. On orders of ₹5,000 and aboveT&C +3 more
                offers
              </li>
              </ul>
                  </div>
                  <a className="trending-blogs-card-link" href="/store">
                    READ MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
