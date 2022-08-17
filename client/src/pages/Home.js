import React, { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import LoadingCard from "../components/cards/LoadingCard";
import ProductCard from "../components/cards/ProductCard";
import BestSellers from "../components/home/BestSellers";
import NewArrivals from "../components/home/NewArrivals";
import { getProducts } from "../functions/product";

const Home = () => {
    return (
        <div className="w-100" style={{ overflowY: "hidden" }}>
            <div className="jumbotron text-danger h1 font-weight-bold text-center ">
                <Jumbotron
                    text={["Latest Products", "Top Sellers", "New Arrivals"]}
                />
            </div>
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron ">
                New Arrivals
            </h4>
            <NewArrivals />
            <br />
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron ">
                Top Sellers
            </h4>
            <BestSellers />
        </div>
    );
};

export default Home;
