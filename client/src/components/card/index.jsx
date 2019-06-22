import React from 'react';
import { Card, CardText } from 'reactstrap';
import './card.css';

const BlogCard = (props) => {
  return (
    <div className="card-div">
      <Card body outline color="secondary">
        <CardText>{props.post}</CardText>
      </Card>
    </div>
  );
};

export default BlogCard;