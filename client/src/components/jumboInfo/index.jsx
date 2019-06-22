import React from 'react';
import { Jumbotron } from 'reactstrap';
import './JumboInfo.css';
const JumboInfo = () => {
  return (
    <div>
      <Jumbotron>
        <p className="lead2">Hello</p>
        <p className="lead">This is a simple blog posting website</p>
        <hr className="my-2" />
        <p>Made with ReactJS, NodeJS, Express and MongoDB</p>

      </Jumbotron>
    </div>
  );
};

export default JumboInfo;