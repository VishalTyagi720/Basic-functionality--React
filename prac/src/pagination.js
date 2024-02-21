import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pagination.css";

function Pagination () {

    const [Products, setProducts] = useState([]);
    const [page, setpage] = useState(1);

    const getProducts = () => {
        axios.get("https://dummyjson.com/products/?limit=100")
        .then((res) => {
            const Data = res.data
            setProducts(Data.products)
        })
        .catch ((err) => {
            console.log(err)
        })
    }
    // console.log(Products)

    useEffect(() => {
        getProducts();
    },[])


    const pageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage >= Products.length / 10 && selectedPage !== page) return
        setpage(selectedPage)
    }


    return <div>PAGINATION
        {Products.length > 0 && 
        <div className="products">
            {Products.slice(page*10-10, page*10).map((product, i) => {
            return (
                <span key={product.id} className="single_product">
                    <img src={product.thumbnail} alt={product.title} />
                    <span>{product.title}</span>
                </span>
            )
        })}
        </div>
        }

        {Products.length > 0 && <div className="pagination">
            <span onClick={() => pageHandler(page - 1)} className={page > 1 ? "" : "disable_pagination"}>⬅️</span>
            {[...Array(Products.length / 10)].map((_, i) => {
                return <span key={i} onClick={() => pageHandler(i + 1)} className={page === i + 1 ? "selected_pagination" : ""}>{i + 1}</span>
            })}
            <span onClick={() => pageHandler(page + 1)} className={page < Products.length ? "" : "disable_pagination"}>➡️</span>
        </div>}
    </div>
}


export default Pagination;