import React from "react";
import Image from "next/image";
import biryani from "../../../public/images/biryani.jpg";
import nihari from "../../../public/images/nihari.jpg";
import palao from "../../../public/images/palao.jpg";
import sajji from "../../../public/images/sajji.jpg";
import star from "../../../public/images/teststar.png";
import arrow from "../../../public/images/arrow-down.png";
import Link from "next/link";


const Recipes = ({params}:any) => {
  return (
    
    <div>
      
      <div className="flex items-center">
        <Link href="/" className="p-5"><Image src={arrow} alt=" arrow"/></Link>
        <p className="underline">Go to Home</p>
      </div>
      <div className="grid sm:grid-cols-2 p-4 gap-4 sm:p-8 lg:p-16 sm:gap-8 lg:gap-16">
        <div className="aspect-square relative cursor-pointer">
          <Image
            src={biryani}
            alt="biryani"
            className=" h-full object-cover rounded-xl"
          />
          <p className="absolute left-0 bottom-0 bg-[#ff2a6b] text-white w-1/2 text-center py-2 sm:py-4 rounded-r-md">
            Karachi Biryani <Image src={star} alt="star" className="mx-auto" />
          </p>
        </div>
        <div>
          <div className="aspect-square relative cursor-pointer">
          <Image
            src={nihari}
            alt="nihari"
            className="h-full object-cover rounded-xl"
          />
          <p className="absolute left-0 bottom-0 bg-[#ff2a6b] text-white w-1/2 text-center py-2 sm:py-4 rounded-r-md">
            Karachi Nihari
            <Image src={star} alt="star" className="mx-auto" />
          </p>
          </div>
        </div>
        
        <div className="aspect-square relative cursor-pointer">
          <Image
            src={palao}
            alt="palao"
            className="h-full object-cover rounded-xl"
          />
          <p className="absolute left-0 bottom-0 bg-[#ff2a6b] text-white w-1/2 text-center py-2 sm:py-4 rounded-r-md">
            Hyderabadi Palao <Image src={star} alt="star" className="mx-auto" />
          </p>
        </div>
        <div className="aspect-square relative cursor-pointer">
          <Image
            src={sajji}
            alt="sajji"
            className="h-full object-cover rounded-xl"
          />
          <p className="absolute left-0 bottom-0 bg-[#ff2a6b] text-white w-1/2 text-center py-2 sm:py-4 rounded-r-md">
            Balochi Sajji <Image src={star} alt="star" className="mx-auto" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
