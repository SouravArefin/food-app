

import Image from "next/image";


export default function MenuItem() {



  return (
    <div className=" bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25  transition-all">
          <div className="text-center ">
        <img src='./pizza.png' className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
          </div>
          <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, mollitia!</p>
    
      <button className="mt-4 bg-emerald-500 text-white rounded-full px-8 py-2">Add to cart $12</button>
      </div>
  );
}