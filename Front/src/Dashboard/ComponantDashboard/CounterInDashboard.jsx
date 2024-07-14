import React from "react";
import { useQuery } from "react-query";
import { request } from "../../axios/axios";
import { FaUsers, FaBoxOpen, FaTags, FaShoppingCart } from "react-icons/fa";
import ItemCounterInDashboard from "./ItemCounterInDashboard"; // Ensure this path is correct based on your file structure

export default function CounterInDashboard() {
  function getCountUser() {
    return request.get("/api/users/get/count", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  function getProduct() {
    return request.get("/api/products/get/count", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  function getCategory() {
    return request.get("/api/categories/get/count", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  function getOrder() {
    return request.get("/api/orders/get/count", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  let { data } = useQuery("counterUser", getCountUser);
  let { data: response } = useQuery("counterProduct", getProduct);
  let { data: responseCategory } = useQuery("counterCategory", getCategory);
  let { data: responseOrder } = useQuery("counterOrder", getOrder);

console.log(responseOrder)

  return (
    <div className="w-[95%] mx-auto mt-3">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <ItemCounterInDashboard
          name={"Users"}
          counter={data?.data?.userCount}
          color={"#F8D7DA"}
          icon={<FaUsers className="text-5xl text-[#E74C3C]" />}
        />
        <ItemCounterInDashboard
          name={"Products"}
          counter={response?.data?.productCount}
          color={"#EBDEF0"}
          icon={<FaBoxOpen className="text-5xl text-[#8E44AD]" />}
        />
        {/* <ItemCounterInDashboard
          name={"Categories"}
          counter={responseCategory?.data?.categoryCount}
          color={"#D5F5E3"}
          icon={<FaTags className="text-5xl text-[#28B463]" />}
        /> */}
        <ItemCounterInDashboard
          name={"Orders"}
          counter={responseOrder?.data?.orderCount}
          color={"#FCF3CF"}
          icon={<FaShoppingCart className="text-5xl text-[#F1C40F]" />}
        />
      </div>
    </div>
  );
}
