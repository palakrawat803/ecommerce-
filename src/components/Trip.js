import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Embark on a mesmerizing journey through Indonesia, a diverse
         archipelago of stunning natural beauty and rich cultural experiences.
          Start on the enchanting island of Bali, explore the rice terraces of Ubud. Venture to Yogyakarta to witness the 
           ancient temples of Borobudur and Prambanan, before seeking 
           tranquility on the pristine beaches of Lombok."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="A trip to Malaysia promises a captivating blend of vibrant 
          cities, stunning natural beauty, and diverse cultural experiences.
           Explore the iconic Petronas Twin Towers in Kuala Lumpur, savor the
            rich flavors of Malaysian cuisine, immerse yourself in the historic
             charm of Penang's George Town, and unwind on the beautiful beaches 
             of Langkawi."
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Embark on a captivating journey through the heart of France,
           a country synonymous with art. where you can wander along the Seine River, explore iconic landmarks like the Eiffel Tower
              and Louvre Museum. Journey to the romantic Loire Valley to visit fairy-tale
               châteaux, then explore the historic streets of Provence,
                where lavender fields and vineyards set the scene."
        />
      </div>
    </div>
  );
};

export default Trip;
