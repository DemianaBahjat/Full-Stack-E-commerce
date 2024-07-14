import React, { useState } from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";
import { request } from "../../axios/axios";
import { useQuery } from "react-query";
import Loading from "../../ui/Loading";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  /////////////start get All User///////////////
  function getAllUser() {
    return request.get("/api/users");
  }
  let { isLoading, data, refetch } = useQuery("allUserDashboard", getAllUser);
  /////////////end get All User///////////////

  /////////start delete User////////////
  async function handleDelete(id) {
    swal({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((del) => {
      if (del) {
        request
          .delete(`/api/users/${id}`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .then((result) => {
            swal(result?.data?.message, {
              icon: "success",
            });
            refetch();
          })
          .catch((error) => {
            swal(error?.response?.data?.message, {
              icon: "error",
            });
          });
      }
    });
  }
  /////////end delete user/////////////
  
  if (isLoading) return <Loading />;

  return (
    <div className="w-[95%] mx-auto mt-4 bg-[#FFF3DD] min-h-96 p-3 rounded-md relative overflow-x-auto  scrollbar overflow-y-auto ">
      <div>
        <HeaderTable
          navigateTo={"/dashboard/adduserdashboard"}
          name={"Add New User"}
          title={"Users"}
          buttonClass="bg-orange-500 text-white"
        />
      </div>
      <div className="flex justify-end mt-1">
        <input
          type="text"
          className="border border-orange-500 rounded-md outline-none px-4 w-80 caret-slate-300 py-[1px]"
          placeholder="Search by name or phone"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="relative overflow-x-auto mt-3 scrollbar overflow-y-auto h-[350px] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
        <table className="w-full text-sm text-[#1F1F1F]">
          <thead className="text-xs uppercase bg-[#FF8A52]">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {search === ""
              ? data &&
                data?.data
                  ?.slice()
                  .reverse()
                  .map((user) => (
                    <tr
                      key={user?._id}
                      className="odd:bg-[#FFDAC8] even:bg-[#FFE9DF] border-b"
                    >
                      <td className="px-6 py-4">{user?.name}</td>
                      <td className="px-6 py-4">{user?.email}</td>
                      <td className="px-6 py-4">{user?.phone}</td>
                      <td className="px-6 py-4">{user?.role}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button
                          className="font-medium text-red-600 border border-red-600 rounded-md px-2 py-1"
                          onClick={() => handleDelete(user?._id)}
                        >
                          Delete
                        </button>
                        <button
                          className="font-medium text-blue-600 border border-blue-600 rounded-md px-2 py-1"
                          onClick={() =>
                            navigate(
                              `/dashboard/updateuserdashboard/${user?._id}`,
                              {
                                state: { data: user },
                              }
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
              : data?.data
                  ?.filter(
                    (e) =>
                      e?.name?.includes(search) || e?.phone?.includes(search)
                  )
                  .slice()
                  .reverse()
                  .map((user) => (
                    <tr
                      key={user?._id}
                      className="odd:bg-[#FFDAC8] even:bg-[#FFE9DF] border-b"
                    >
                      <td className="px-6 py-4">{user?.name}</td>
                      <td className="px-6 py-4">{user?.email}</td>
                      <td className="px-6 py-4">{user?.phone}</td>
                      <td className="px-6 py-4">{user?.role}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button
                          className="font-medium text-red-600 border border-red-600 rounded-md px-2 py-1"
                          onClick={() => handleDelete(user?._id)}
                        >
                          Delete
                        </button>
                        <button
                          className="font-medium text-blue-600 border border-blue-700 rounded-md px-2 py-1"
                          onClick={() =>
                            navigate(
                              `/dashboard/updateuserdashboard/${user?._id}`,
                              {
                                state: { data: user },
                              }
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
