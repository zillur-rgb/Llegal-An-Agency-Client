import React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/svg/deleteIcon.svg";
import bedIcon from "../../assets/svg/bedIcon.svg";
import bathtubIcon from "../../assets/svg/bathtubIcon.svg";
import { Link } from "react-router-dom";

const ListingItem = ({ listingData, id, onDelete }) => {
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listingData.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listingData.imageUrls[0]}
          alt={listingData.name}
          className="categoryListingImg"
        />

        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listingData.location}</p>
          <p className="categoryListingName">{listingData.name}</p>
          <p className="categoryListingPrice">
            €
            {listingData.offer
              ? listingData.discountedPrice
              : listingData.regularPrice}
            {listingData.type === "rent" && " / month"}
          </p>

          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listingData.bedrooms > 1
                ? `${listingData.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>

            <img src={bathtubIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {listingData.bathrooms > 1
                ? `${listingData.bathrooms} Bathroom`
                : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76, 60"
          onClick={() => onDelete(listingData.id, listingData.name)}
        />
      )}
    </li>
  );
};

export default ListingItem;
