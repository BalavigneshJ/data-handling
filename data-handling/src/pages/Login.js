import { Component } from 'react';
import { Button , Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'    ;

class Login extends Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        const {  history } = this.props
        if (history) history.push(`/connect`);
    }

    render() {
      return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign In</h3>

                    <Form.Group className="mb-3" controlId="formBasicSelect" >
                        <Form.Label>Role</Form.Label>
                        <select required className="form-select">
                            <option disabled selected>Select your role</option>
                            <option >Super Admin</option>
                            <option >Admin</option>
                            <option >User</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => this.handleClick()}>
                        Submit
                    </Button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        </div>
      );
    }
  }
  
  export default withRouter(Login) ;