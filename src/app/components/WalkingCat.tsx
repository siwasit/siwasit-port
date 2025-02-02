// components/WalkingCat.js
import React from 'react';
import Image from 'next/image'; // Use Next.js Image component for better performance
import '@/app/style.css'

const WalkingCat = () => {
  return (
    <div className="walking-cat-container">
      <Image
        src="/animations/CatWalking.gif" // Ensure the path is correct
        alt="Walking Cat"
        width={150} // Adjust size
        height={150} // Adjust size
        className="walking-cat h-full" // Apply the animation class
        unoptimized
      />
    </div>
    

  );
};

export default WalkingCat;
