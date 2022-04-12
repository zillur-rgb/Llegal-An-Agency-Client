import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  where,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase.init";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner/Spinner";
import ListingItem from "../Components/ListingItem/ListingItem";

const Offers = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        //Get Reference
        const listingRef = collection(db, "listings");

        // Create a query
        const q = query(
          listingRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        //Execute query
        const querySnap = await getDocs(q);

        //Running a loop to get data
        const listing = [];

        querySnap.forEach((doc) => {
          return listing.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listing);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch data");
      }
    };
    fetchListing();
  }, []);

  return (
    <div>
      <header>
        <p className="pageHeader">
          {params.categoryName === "rent"
            ? "Places for Rent"
            : "Places for Sale"}
        </p>

        {loading ? (
          <Spinner />
        ) : listings && listings.length > 0 ? (
          listings.map((listing) => {
            return (
              <ListingItem
                key={listing.id}
                id={listing.id}
                listingData={listing.data}
              />
            );
          })
        ) : (
          <p>No Current Offer Available</p>
        )}
      </header>
    </div>
  );
};

export default Offers;
