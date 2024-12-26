
import React from "react";


const Recipe = ({params}:any) => {
  
  return (
    <div className="p-8 space-y-2">
      <h1 className="text-3xl font-semibold">Recipe of {params.id}...</h1>
      {}
    </div>
  )
};

export default Recipe;