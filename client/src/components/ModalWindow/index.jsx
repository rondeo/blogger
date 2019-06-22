
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import './ModalWindow.css';

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      post: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onSubmit = () => {
    
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    const newPost = {
      post: this.state.post
    }

    this.props.addPost(newPost)
  }

  handleChange = (event) => {
    this.setState({post: event.target.value}, function () {
  });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Blog Post!</ModalHeader>
          <ModalBody>
            ...your thoughts here
            <FormGroup>
              <Input onChange={this.handleChange} className='input-field' type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow;