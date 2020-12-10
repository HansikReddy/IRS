import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';



export default function StateStatus() {




    return (
     
        <div class="container" style={{ 'max-width': '1300px'} }>
            <div class="card">
                

                <div class="card-body">


                    <form>
                        <div class="form-group  col-md-2">
                            <label for="exampleFormControlInput1" class="control-label">ENTER ID</label>
                            <input type="id" class="form-control" id="exampleFormControlInput1" placeholder="" />
                            <div class="form-group col-md-100" style={{ "padding-top": "20px" }}>
                                <button type="button" class="btn btn-primary btn-rounded btn-sm my-0">CHECK STATUS</button>
                            </div>
                        </div>
                        <diV>
                            <ProgressBar>
                                <ProgressBar striped variant="success" now={30} key={1} />
                                <ProgressBar striped variant="info" now={30} key={1} />
                                <ProgressBar striped variant="warning" now={30} key={1} />
                                <ProgressBar striped variant="danger" now={30} key={1} />
                                <ProgressBar variant="info" now={30} key={2} />

                            </ProgressBar>
                        </diV>
                    </form>
                </div>
                <div class="card-footer text-muted">
                <MDBTable borderless>
      <MDBTableHead>
        <tr>
         
          <th>Userdetails</th>
          <th>Issue Created</th>
          <th>Bug</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          
          <td>H@gmail.com</td>
          <td>10-12-2020 </td>
          <td>fix LOGIN</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    

                    {/* <table  class="table table-bordered table-responsive-md table-striped text-center">

                        <thead>
                            <tr>
                               
                                <th class="text-center">ISSUE OCCURED DATE</th>
                                <th class="text-center">DESCRIPTION</th>
                                <th class="text-center">STEP'S TO REPRODUCE ISSUE</th>
                                <th class="text-center">ATTACHMENT'S</th>
                                <th class="text-center">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                                <td class="pt-3-half">2020-11-25 11:12 AM</td>
                                <td class="pt-3-half">BUG-1</td>
                                <td class="pt-3-half"> Unable to report issue </td>
                                <td class="pt-3-half"> </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                               
                                <td class="pt-3-half">2020-11-20 11:12 AM</td>
                                <td class="pt-3-half">BUG-2</td>
                                <td class="pt-3-half">Unable to save the issue</td>
                                <td class="pt-3-half"> </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table> */}

                </div>
            </div>
        </div>

        // <div>
        //     <ProgressBar>
        //         <ProgressBar striped variant="success" now={30} key={1} />
        //         <ProgressBar striped variant="info" now={30} key={1} />
        //         <ProgressBar striped variant="warning" now={30} key={1} />
        //         <ProgressBar striped variant="danger" now={30} key={1} />
        //         <ProgressBar variant="info" now={30} key={2} />

        //     </ProgressBar>
        // </div>
    );


}
