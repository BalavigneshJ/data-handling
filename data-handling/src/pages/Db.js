import { Component } from 'react';
import { Form , Table , Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'    ;

class Db extends Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        const {  history } = this.props
        if (history) history.push(`/table`);
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Select Table</h3>
                    <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Table Name</th>
                        <th>No.of Columns</th>
                        <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr> 
                        <td>1</td>
                        <td>Personal Details</td>
                        <td>5</td>
                        <td>
                            <Form.Check name = 'db' type='radio' id='inline-details-1'/>
                        </td>
                    </tr>
                    <tr> 
                        <td>2</td>
                        <td>Transaction</td>
                        <td>7</td>
                        <td>
                            <Form.Check name = 'db' type='radio' id='inline-details-2'/>
                        </td>
                    </tr>
                    <tr> 
                        <td>3</td>
                        <td>Accound Details</td>
                        <td>4</td>
                        <td>
                            <Form.Check name = 'db' type='radio' id='inline-details-3'/></td>
                    </tr>
                    <tr> 
                        <td>4</td>
                        <td>Stocks</td>
                        <td>6</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-4'/></td>
                    </tr>
                    <tr> 
                        <td>5</td>
                        <td>Loans</td>
                        <td>5</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-5'/></td>
                    </tr>
                    <tr> 
                        <td>6</td>
                        <td>Beneficiary Details</td>
                        <td>8</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-6'/></td>
                    </tr>
                    <tr> 
                        <td>7</td>
                        <td>Billings</td>
                        <td>6</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-7'/></td>
                    </tr>
                    <tr> 
                        <td>8</td>
                        <td>Add-ons</td>
                        <td>9</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-8'/></td>
                    </tr>
                    <tr> 
                        <td>9</td>
                        <td>FD</td>
                        <td>7</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-9'/></td>
                    </tr>
                    <tr> 
                        <td>10</td>
                        <td>Mutual Funds</td>
                        <td>5</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-10'/></td>
                    </tr>
                    <tr> 
                        <td>11</td>
                        <td>Cryptocurrency</td>
                        <td>6</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-11'/></td>
                    </tr>
                    <tr> 
                        <td>12</td>
                        <td>Settings</td>
                        <td>6</td>
                        <td><Form.Check name = 'db' type='radio' id='inline-details-12'/></td>
                    </tr>
                    </tbody>
                        
                    </Table>
        
                    <Button variant="primary" type="button" className='fr' onClick={() => this.handleClick()}>
                        Next
                    </Button>
                </div>
            </div>
          );
    }
  }
  
  export default withRouter(Db) ;