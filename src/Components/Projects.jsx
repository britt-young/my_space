import React from "react";
import Card from "react-bootstrap/Card";
import "../Components/Styles/Projects.css";
import TCC from "../assets/TahananCCo.png";
import TTB from "../assets/tech-tidbits.png";
import WD from "../assets/Weather-Dashboard.png";
import SS from "../assets/SightScene.png";
import Horiseon from "../assets/Horiseon.png";
import GYLT from "../assets/GYLT.png";

const Projects = () => {
  return (
    <div>
      <div>
        <h3>PORTFOLIO</h3>
        <h1>My Recent Work</h1>
      </div>
      <div className="projects">
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img style={{ width: "18rem"}} variant="top" src={TCC} />
            <Card.Body>
              <Card.Title>Tahanan Candle Company</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://tahanancandleco.onrender.com">Deployed App</Card.Link>
              <Card.Link href="https://github.com/mjthurber/Tahanan_Candle">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img style={{ width: "18rem"}} variant="top" src={TTB} />
            <Card.Body>
              <Card.Title>Tech-Tidbits</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://tech-tidbits-8bd44caf995d.herokuapp.com/">Deployed App</Card.Link>
              <Card.Link href="https://github.com/britt-young/tech-tidbits">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img style={{ width: "18rem"}} variant="top" src={WD} />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://britt-young.github.io/weather_dashboard/">Deployed App</Card.Link>
              <Card.Link href="https://github.com/britt-young/weather_dashboard">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img style={{ width: "18rem"}} variant="top" src={SS} />
            <Card.Body>
              <Card.Title>Sight Scene</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://nicholasmelo.github.io/SightScene/">Deployed App</Card.Link>
              <Card.Link href="https://github.com/britt-young/SightScene">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img style={{ width: "18rem"}} variant="top" src={GYLT} />
            <Card.Body>
              <Card.Title>Get Your List Together</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://get-your-list-together-c8df3b5b0755.herokuapp.com/login">Deployed App</Card.Link>
              <Card.Link href="https://github.com/britt-young/get_your_list_together">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img style={{ width: "18rem"}} variant="top" src={Horiseon} />
            <Card.Body>
              <Card.Title>Horizon</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://britt-young.github.io/Horiseon">Deployed App</Card.Link>
              <Card.Link href="https://github.com/britt-young/Horiseon">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Projects;
