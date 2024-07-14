import React, { useEffect, useState } from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";
import { request } from "../../axios/axios";
import { useQuery } from "react-query";
import Loading from "../../ui/Loading";
import axios from "axios";
import swal from "sweetalert";

export default function OrdersDashboard() {
  const [valueSelect, setValueSelect] = useState();
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  function getOrders() {
    return axios.get("https://ecommerce-bf1g.onrender.com/api/orders", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  const { data, isLoading, refetch } = useQuery("getOrders", getOrders);

  useEffect(() => {
    async function handleChange() {
      if (selectedOrderId && valueSelect) {
        await request.patch(`/api/orders/${selectedOrderId}`, {
          status: valueSelect,
        });
        refetch();
      }
    }
    handleChange();
  }, [valueSelect, selectedOrderId, refetch]);

  if (isLoading) return <Loading />;

  return (
    <div className="w-[95%] mx-auto mt-4 bg-[#FFF3DD] min-h-96 p-3 rounded-md relative overflow-x-auto scrollbar overflow-y-auto">
      <div>
        <HeaderTable title={"Order Table"} />
      </div>
      <div className="relative overflow-x-auto mt-3 scrollbar overflow-y-auto h-[350px] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
        <table className="w-full text-sm  bg-[#FFF3DD]">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Total Price</th>
              <th className="px-6 py-3">Shipping Address</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.data.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#FFDAC8]" : "bg-[#FFE9DF]"
                  } border-b`}
                >
                  <td className="px-6 py-4">{user?.user?.city}</td>
                  <td className="px-6 py-4">{user?.phone}</td>
                  <td className="px-6 py-4">{user?.totalPrice}</td>
                  <td className="px-6 py-4">{user?.shippingAddress1}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      className={`font-bold ${
                        user.status === "Pending"
                          ? "bg-yellow-300"
                          : user.status === "shipped"
                          ? "bg-blue-300"
                          : user.status === "completed"
                          ? "bg-green-400"
                          : user.status === "canceled"
                          ? "bg-red-400"
                          : ""
                      } py-1 px-2 text-sm rounded-md text-black`}
                    >
                      {user?.status}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      className="font-medium bg-gray-300 py-1 text-sm rounded-md text-black"
                      onChange={(e) => {
                        setValueSelect(e.target.value);
                        setSelectedOrderId(user?._id);
                      }}
                    >
                      <option value="">Choose Action</option>
                      <option
                        value="Pending"
                        disabled={user?.status === "canceled"}
                      >
                        Pending
                      </option>
                      <option
                        value="shipped"
                        disabled={user?.status === "canceled"}
                      >
                        Shipped
                      </option>
                      <option
                        value="completed"
                        disabled={user?.status === "canceled"}
                      >
                        Completed
                      </option>
                      <option value="canceled">Canceled</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
