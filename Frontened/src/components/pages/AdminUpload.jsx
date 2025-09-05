import React from "react";
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'

function AdminUpload() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const info = {
      subject: data.subject,
      name: data.name,
      unit: data.unit,
      description: data.description,
      downloadUrl: data.downloadUrl,
      viewUrl: data.viewUrl
    };
    await axios
      .post("http://localhost:4002/note/AdminUpload", info)
      .then((res) => {
        console.log(res.data.message);
        toast.success("Uploaded Successfully");
        
      }).catch((err) => {
        console.log(err.message)
      }
      );
    ;

  };

  return (
    <>
      <div className="w-[70vw] h-[90vh] m-auto bg-white dark:bg-gray-800 mt-5 rounded-2xl">
        <div className="grid justify-around">
              <Toaster />
          <div className="mt-25">
            <h1 className="text-4xl text-blue-500 font-bold">Welcome Back</h1>
            <h2 className="text-3xl text-indigo-500 font-semibold">
              Upload here!!
            </h2>
          </div>
        </div>
        <div className="grid items-center justify-around mt-20 dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-5">
              <input
                className="bg-gray-100  p-2 rounded-2xl w-[500px]"
                type=""
                placeholder="Enter Subject name here"
                {...register("subject", { required: true })}
              />
            </div>
            <div className="my-5">
              <input
                className="bg-gray-100 p-2 rounded-2xl w-[500px]"
                type=""
                placeholder="Enter Chapter name here"
                {...register("name", { required: true })}
              />
            </div>
            <div className="my-5">
              <input
                className="bg-gray-100 p-2 rounded-2xl w-[500px]"
                type=""
                placeholder="Enter Chapter Number here"
                {...register("unit", { required: true })}
              />
            </div>
            <div className="my-5">
              <input
                className="bg-gray-100 p-2 rounded-2xl w-[500px]"
                type=""
                placeholder="Enter Description here"
                {...register("description", { required: true })}
              />
            </div>
            <div className="my-5">
              <input
                className="bg-gray-100 p-2 rounded-2xl w-[500px]"
                type=""
                placeholder="Enter Download Url here"
                {...register("downloadUrl", { required: true })}
              />
            </div>
            <div className="my-5">
              <input
                className="bg-gray-100 p-2 rounded-2xl w-[500px]"
                type=""
                placeholder="Enter View Url here"
                {...register("viewUrl", { required: true })}
              />
            </div>
            <div className="flex justify-around items-center mt-10  hover:scale-95">
              <button
                type="submit"
                className="flex justify-around items-center gap-2 bg-indigo-500 p-3 rounded-xl text-xl cursor-pointer font-semibold border-none text-black"
              >
                <span>
                  <FaCloudUploadAlt />
                </span>
                <p>Upload</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminUpload;
