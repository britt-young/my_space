import React from "react";
import Card from "react-bootstrap/Card";
import "../Components/Styles/Projects.css";

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
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Deployed App</Card.Link>
              <Card.Link href="#">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Deployed App</Card.Link>
              <Card.Link href="#">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Deployed App</Card.Link>
              <Card.Link href="#">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Deployed App</Card.Link>
              <Card.Link href="#">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Deployed App</Card.Link>
              <Card.Link href="#">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem", padding: "10px" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Deployed App</Card.Link>
              <Card.Link href="#">GitHub Repository</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Projects;
