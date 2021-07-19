import { Component } from 'react';
import { Button , Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'    ;

class Connect extends Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        const {  history } = this.props
        if (history) history.push(`/db`);
    }


    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Connect to the Datasource</h3>
    
                        <Form.Group className="mb-3" controlId="formBasicSelect1" >
                            <Form.Label>Database</Form.Label>
                            <select required className="form-select">
                                <option disabled selected>Select your database</option>
                                <option >BigQuery</option>
                                <option >MsExcel</option>
                                <option >Hive</option>
                                <option >MySQL</option>
                                <option >MsSQL</option>
                                <option >MongoDB</option>
                                <option >Postgres</option>
                                <option >RedSift</option>
                                <option >Snowflake</option>
                            </select>
                        </Form.Group>
    
                        <div className="btn-connect">
                            <Button variant="primary" type="button">
                                Test
                            </Button>

                            <Button variant="primary" type="button" onClick={() => this.handleClick()}>
                                Connect
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
          );
    }
  }
  
  export default withRouter(Connect) ;