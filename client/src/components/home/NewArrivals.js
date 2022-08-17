import React, { useEffect, useState } from "react";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";
import { getProducts, getProductsCount } from "../../functions/product";
import { Pagination } from "antd";

const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [productsCount, setProductsCount] = useState(0);

    const loadAllProducts = () => {
        setLoading(true);
        getProducts("createdAt", "desc", page)
            .then((res) => {
                setLoading(false);
                setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };
    useEffect(() => {
        loadAllProducts();
    }, [page]);
    useEffect(() => {
        getProductsCount().then((res) => {
            setProductsCount(res.data);
        });
    }, []);

    return (
        <>
            <div className="container">
                {loading === true ? (
                    <LoadingCard count={6} />
                ) : (
                    <div className="row">
                        {products.map((product) => (
                            <div key={product._id} className="col-md-4 mb-3">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="row">
                <nav className="col-md-4 offset-md-4 text-center pt-5 p-3">
                    <Pagination
                        current={page}
                        onChange={(page, pageSize) => {
                            console.log("page...", page);
                            setPage(page);
                        }}
                        total={productsCount}
                    />
                </nav>
            </div>
        </>
    );
};

export default NewArrivals;