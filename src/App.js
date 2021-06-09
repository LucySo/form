import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component{
  constructor(){
    super()
      this.state = {
        validated: false,
      }
  }

  handlesubmit = (event) => {
    const form = event.currentTarget
    if(form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
  
    this.setState({validated: true})
  }
  render(){
  return (
    <div className="p-3">
      <h1>Login</h1>
      <Form noValidate validated={this.state.validated} onsubmite={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required />
          <Form.Control.Feedback type="invalid">
            please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Form.Group>
          <Form.Check label="Remember me"/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit
        </Button>
      </Form>
    </div>
  );
}
}

export default App