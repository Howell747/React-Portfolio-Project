import React, { Component } from 'react';
import {
  CardImg,
} from "reactstrap";




class ImageCards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          neighborhoods: [
            {
              id: 0,
              name: "Downtown",
              image: "assets/Downtown.jpg",
              description:
                "Our beautiful downtown and riverfront districts offer endless opportunities for fun and relaxation. Check out our iconic multi-building aquarium or spend a day at one of our many world class parks and plazas. Breathe in the life that downtown has to offer.",
            },
            {
              id: 1,
              name: "Southside",
              image: "assets/southside2.jpg",
              description:
                "Our booming Southside is where all the action is! If you are a hipster that likes coffee and goat yoga then this is the place for you. Once home to gross working class poor people, Southside is now home to over paid bloggers and CEO types. Come and see what gentrification looks like in the flesh! ",
            },

            {
              id: 2,
              name: "NorthShore",
              image: "assets/northshore.jpg",
              description:
                "Beautiful hills and charming homes. This is where the old money lives. The only decent school in Chattanooga is here. If you have unlimited funds and don't want your kiddo to join a gang, come here!",
            },
            {
              id: 3,
              name: "St. Elmo",
              image: "assets/stelmo2.jpg",
              description:
                "A neighborhood stuck in time, St. Elmo is a beautiful historical neighborhood with homes built in the late 19th century. Once used as a refuge from a city wide flood in chattanooga, St. Elmo is now seeing a resurgence as homes are being renovated and the old charm of the neighborhood comes back to life.",
            },
          ],
        };
    }

    render(){
    const directory = this.state.neighborhoods.map(neighborhood => {
        return (
          <div key={neighborhood.id} className="container">
            <div className="row my-5">
              <div className="col col-md-6 ">
                <CardImg
                  width="100%"
                  className="img-border"
                  src={neighborhood.image}
                  alt={neighborhood.name}
                />
              </div>
              <div className="col col-md-4">
                <h1>{neighborhood.name}</h1>
                <p>{neighborhood.description}</p>
              </div>
            </div>
          </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    )
}
}

export default ImageCards