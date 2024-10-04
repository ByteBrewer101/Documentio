"use client"

import { useState } from "react";

export default function FeedComponent() {
const [n,setN]= useState(10)
    const loadNewCard = UseLoadCards()


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2 ">
      {Array.from({ length: n }, (_, i) => (
        <TempCard key={i} number={i} />
      ))}

      <button className="bg-white rounded h-1/2" onClick={()=>{const newN = loadNewCard(n)
        setN(newN)
      }} >Next</button>
    </div>
  );
}

function TempCard({ number: number }) {
  return (
    <div className="bg-blue-200 rounded-lg overflow-hidden h-96 w-full transition-all duration-200 shadow-2xl transform-gpu hover:bg-green-500 md:hover:scale-125 hover:z-20">
      {number}
    </div>
  );
}

function UseLoadCards() {
   return function loadNextcards(n : number){
        return n+10

    }
}
