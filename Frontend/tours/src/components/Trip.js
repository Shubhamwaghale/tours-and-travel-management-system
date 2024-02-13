import "./TripStyle.css"
import TripData from "./TripData";
import TripOne from  "../assets/Trip1.jpg";
import TripTwo from  "../assets/Trip2.jpg";
import TripThree from  "../assets/Trip3.jpg";
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique
                destinations using Google Maps.
            </p>
            <div className="tripcard">
            <TripData
            image={TripOne}
            heading ="Dudhsagar Waterfalls, Goa"
            text ="Located inside the Bhagwan Mahaveer Sanctuary and Mollem National Park,
             this multi-tiered milky white waterfall gushes down from a height of 310 metres,
              making it India’s fifth-highest waterfall. It is at its maximum glory just after the rains. "
            />

            <TripData
            image={TripTwo}
            heading ="Lotus Temple, Delhi"
            text ="The Lotus Temple is an edifice of Bahai faith, resembling a lotus flower. It’s constructed
             purely with white marble and designed by Furiburz Sabha. The temple is open to people of all faiths. "
            />

            <TripData
            image={TripThree}
            heading ="Prem Mandir, Mathura "
            text ="Built on a 54-acre land, and about 125 feet high, this temple is one of the most popular 
            attractions of the town dedicated to Radha-Krishna and Ram-Sita. "
            />
        </div>
        </div>
    );
}

export default Trip; 
