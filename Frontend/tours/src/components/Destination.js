import manaliimg1 from "../assets/manali.jpg"
import manaliimg2 from "../assets/manali2.jpg"
import DestinationData from "./DestinationData";
import ladhak1 from "../assets/ladhak1.jpg"
import ladhak2 from "../assets/ladhak2.jpg"

import "./DestinationStyle.css"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>The journey of a thousand miles begins with a single step</p>

        <DestinationData
        className="first-des"
        heading="Manali, Himachal Pradesh"

        text="With spectacular valleys, breathtaking views, snowcapped mountains, 
        and lush forests of oak, deodar, and pine, 
        Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh.
         Gifted to the world by the mighty Himalayas, 
         it is known to be one of the most popular destinations for Honeymooners.
          Manali offers magnificent views of the Pir Panjal and the Dhauladhar ranges,
           covered in a thick blanket of snow for most of the year"

           img1={manaliimg1}
           img2={manaliimg2}
        />
        
        <DestinationData
        
        className="first-des-reverse"

        heading="Ladakh
        , Kashmir region, Indian subcontinent, Asia"

        text="Ladakh is a union territory in the Kashmir region of India.
         Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019.
          Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other.
           Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert.
        Stunning Gompas (Tibetan Buddhist monasteries), fluttering prayer flags, whitewashed stupas, 
        Ladakh is a riot of intricate murals and red-robed monks. 
        With a culture similar to the Tibetans, the people of Ladakh are friendly and welcoming to tourists."

           img1={ladhak1}
           img2={ladhak2}
           />
        </div>
    );
};

export default Destination