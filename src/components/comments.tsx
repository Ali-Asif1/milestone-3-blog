'use client'
import React, { ChangeEvent, FC, useState } from "react";
import ShowComments from "./ShowComments";

export const Comments: FC = () => {
    const [comments, setcomments] = useState<string>('')
    const [commentsList, setCommentsList] = useState<string[]>([])

    const handleChange= (event:ChangeEvent<HTMLInputElement>):void =>{
        setcomments(event.target.value)
    }

    const showComment = ():void=>{
        setCommentsList([...commentsList, comments])
       setcomments('')
    }

  return (
    <div className="comment-section border-2 border-[#ff2a6b] p-5 mt-6">
      <div className="bg-red-50 w-full">
        <input type="text" placeholder="Enter your thought?" value={comments} onChange={handleChange}  className="w-full px-2 py-2 border-2  border-[#ff2a6b] rounded capitalize outline-transparent" />
        <button onClick={showComment} className="bg-[#ff2a6b] w-28 p-2 rounded active:scale-90 text-white my-4 outline-transparent">Commment</button>
      </div>
      <div className="show-comments">
      <h1 className="text-2xl font-bold mb-4">Comments:</h1>
      {commentsList.map((comment, key:number)=>{
        return <div className="capitalize">
        <ShowComments  task={comment} key={key} /><hr className=" mx-auto border border-gray-300 my-1"/>
        </div>
      })}
      </div>
    </div>
  );
};
