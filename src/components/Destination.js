import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours gives you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Switzerland"
        text="Embark on a captivating journey through Switzerland, a country
         renowned for its awe-inspiring Alpine landscapes, picturesque lakes,
          and charming cities. From the majestic Matterhorn to the serene 
          shores of Lake Geneva, Switzerland offers a diverse range of natural
           wonders. Explore the historic streets of Zurich, savor Swiss 
           chocolates and cheese in quaint mountain villages, and take
            scenic train rides through valleys and a trip to
               Switzerland promises a tapestry of experiences that will 
               leave you enchanted and inspired."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Malaysia"
        text="A trip to Malaysia promises a captivating blend of vibrant 
        cities, stunning natural beauty, and diverse cultural experiences.
         Explore the iconic Petronas Twin Towers in Kuala Lumpur, savor the
          rich flavors of Malaysian cuisine, immerse yourself in the historic
           charm of Penang's George Town, and unwind on the beautiful beaches 
           of Langkawi. Discover the lush rainforests, unique wildlife, and
            towering peaks of Malaysian Borneo, and dive into the clear 
            waters of the Coral Triangle to witness the wonders of marine
             life. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
