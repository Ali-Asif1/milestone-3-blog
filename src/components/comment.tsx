"use client";
import React, { useState } from "react";

export const Comment = () => {
  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [main, setMain]:any = useState([]);

  const submitHandler = (e: any) => {
    e.preventDefault();

    setMain([...main , {name , comments}])

    setName("")
    setComments("")
   
  }

  let mainTask = <h1>main task</h1>
   mainTask =main.map(function(t:any, index:number){

    return <div className="w-full bg-blue-400">
            <h1 className="font-bold w-full">Name: {t.name}</h1>
            <textarea className="max-w-fit">{t.comments}</textarea>
          </div>

   })
  
  return (
    <section className="rounded-lg border-2 border-[#ff2a6b] p-4 my-8">
      <h3 className="text-lg font-bold">Comments:</h3>

      <form onSubmit={submitHandler} className="mt-4 " autoComplete="off">
        <div className="flex mt-4 bg-red-800">
          <div className="ml-3">
            <div className="font-medium bg-blue-900">{mainTask}</div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-2 border-[#ff2a6b] p-2 w-full rounded outline-transparent"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="comment"
            className="font-medium"
          >
            Comment
          </label>
          <input
            id="comment"
            className="border-2 border-[#ff2a6b] p-2 w-full rounded outline-transparent"
            placeholder="Enter your comment..."
            value={comments}
            onChange={(e) => {
              setComments(e.target.value);
            }}
            required
          />
        </div>

        <button className="bg-[#ff2a6b] text-white font-medium py-2 px-4 rounded active:scale-90 ">
          Post Comment
        </button>
      </form>
    </section>
  );
};
