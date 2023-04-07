import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState();
  const [products, setProducts] = useState([]);
  const [productReview, setProductsReview] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/products/${id}`
        );
        setProducts(response.data);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);


  const updateComment = async (e) => {
    e.preventDefault();
    try {
     await axios.post(`http://localhost:5001/products/review/${id}`, {
        comment: comment,
        rating: rating,
      });
    //   setProductsReview(response)
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  //   console.log(products.response?.uuid)
//   console.log(productReview);
  const review = products.response?.review_product;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center p-10">
      <div className="w-full flex flex-col p-5">
        <img
          className="h-auto w-full rounded-lg p-4"
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2860&q=80"
          alt="image description"
        />
        <p className="text-xl flex text-center text-red-600">{msg}</p>
      </div>
      <div className="flex flex-col p-2 gap-5">
        <h1 className="text-3xl">Name Products :{products.response?.name}</h1>
        <h3 className="text-2xl">
          Description :{products.response?.description}
        </h3>
        <h3 className="text-2xl">Price :{products.response?.price}</h3>
        <h3>Komentar :{review?.comment}</h3>
        <h3>Rating :{review?.rating}</h3>

        <form onSubmit={updateComment}>
          <div className="">
          <select defaultValue={rating}  onChange={(e) => setRating(e.target.value)} className="p-2.6 border-2 border-gray-950 rounded-md">
            <option value={rating} disabled>Beri Rating ...</option>
            {[1,2,3,4,5].map((item, index) => (
                 <option key={index} value={rating}>{item}</option>
            ))}
        </select>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Kirim Komentar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
