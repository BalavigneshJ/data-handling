import { Component } from 'react';
import { Form , Table , Button } from 'react-bootstrap';
import Encryption from './../EncryptionTypes'

class TableDetails extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Table Details</h3>
                    <Table>
                    <thead>
                        <tr>
                        <th>Column Name</th>
                        <th>Pseudonymization Type</th>
                        <th>Pseudonymization complexity</th>
                        <th>Encryption Key</th>
                        <th>Select</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                    <tr> 
                        <td>Name</td>
                        <td> <Encryption isName= {true} /> </td>
                        <td> <Encryption/></td>
                        <td><Form.Control type="key" placeholder="Enter key" /></td>
                        <td>
                            <Form.Check name = 'db' type='checkbox' id='inline-details-1'/>
                        </td>
                    </tr>
                    <tr> 
                        <td>Date of birth</td>
                        <td> <Encryption isName= {true} /> </td>
                        <td> <Encryption/></td>
                        <td><Form.Control type="key" placeholder="Enter key" /></td>
                        <td>
                            <Form.Check name = 'db' type='checkbox' id='inline-details-2'/>
                        </td>
                    </tr>
                    <tr> 
                        <td>Email</td>
                        <td> <Encryption isName= {true} /> </td>
                        <td> <Encryption/></td>
                        <td><Form.Control type="key" placeholder="Enter key" /></td>
                        <td>
                            <Form.Check name = 'db' type='checkbox' id='inline-details-3'/></td>
                    </tr>
                    <tr> 
                        <td>Address</td>
                        <td> <Encryption isName= {true} /> </td>
                        <td> <Encryption/></td>
                        <td><Form.Control type="key" placeholder="Enter key" /></td>
                        <td><Form.Check name = 'db' type='checkbox' id='inline-details-4'/></td>
                    </tr>
                    <tr> 
                        <td>Mobile Number</td>
                        <td> <Encryption isName= {true} /> </td>
                        <td> <Encryption/></td>
                        <td><Form.Control type="key" placeholder="Enter key" /></td>
                        <td><Form.Check name = 'db' type='checkbox' id='inline-details-5'/></td>
                    </tr>
            
                    </tbody>    
                        
                    </Table>

                    <Form.Label className="bold mt-3">Download Format</Form.Label>
                    <select required className="form-select">
                        <option disabled selected>Select format</option>
                        <option >PDF</option>
                        <option >MsExcel</option>
                        <option >CSV</option>
                    </select>
        
                    <Button variant="primary" type="button" className='fr mt-2'>
                        Encypt
                    </Button>
                </div>
            </div>
          );
    }
  }
  
  export default TableDetails