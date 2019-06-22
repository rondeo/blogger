import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar/index';
import { Button } from 'reactstrap';
import './app.css'
import ModalWindow from '../components/ModalWindow/index'
import BlogCard from '../components/card/index';
import JumboInfo from '../components/jumboInfo/index';
class App extends Component {
  constructor(props){ 
    super(props); 
    this.state = { 
      isOpen: false,
    }
  }

  componentDidMount(){ 
   this.props.getPosts();

  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick = () => {
    this.props.deletePosts();
  }

  render() {
    return (
        <div className='App'>
          <Navbar/>
          <div>
            <JumboInfo/>
          </div>
          <hr/>
          <div className="button-div">
            <div className="button-div-1">
              <ModalWindow addPost={this.props.addPost} buttonLabel= "New Post"/>
            </div>
            <div className="button-div-2">
              <Button onClick = {this.handleClick} color="danger">Delete all</Button>
            </div>
          </div>
          <div className="blog-div">
            {this.props.posts.map(post => 
              <BlogCard key={post._id} post={post.post}/>
            )}
          </div>
        </div>
    );
  }
}

export default App;
