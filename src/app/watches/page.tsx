import React from "react";
import Image from "next/image";

const Watches = () => {
  const watchData = [
    { id: 1, name: "Rolex", price: 12000, description: "Luxury watch", image: "/images/rolex.png" },
    { id: 2, name: "Omega", price: 8000, description: "Sporty design", image: "/images/omega.png" },
    { id: 3, name: "Patek Philippe", price: 25000, description: "Elegant timepiece", image: "/images/patek.jpg" },
    { id: 4, name: "TAG Heuer", price: 5000, description: "Sporty and stylish", image: "/images/tag heuer.png" },
    { id: 5, name: "Breitling", price: 7000, description: "Bold and rugged", image: "/images/Breitling.png" },
    { id: 6, name: "Seiko", price: 1000, description: "Affordable and reliable", image: "/images/seiko.jpeg" },
  ];

  return (
    <div className="watches">
      {watchData.map((watch) => (
        <div key={watch.id} className="watch-card">
          <Image
            src={watch.image}
            alt={watch.name}
            width={300}
            height={300}
            className="watch-image"
          />
          <h3 className="watch-name">{watch.name}</h3>
          <p className="watch-description">{watch.description}</p>
          <div className="watch-price">${watch.price}</div>
          <button className="watch-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Watches;
