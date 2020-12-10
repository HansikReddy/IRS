import React, { useState, useEffect } from 'react';

import data from ".././css/data.json";
import '.././css/Styles.css';
import AsyncBoard from "react-trello";
import { Col, Row, Modal, Button } from 'react-bootstrap'
import ModalImage from "react-modal-image";

export default function IssuesBoard() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [issueData, setIssueData] = useState('');
  var issueData = null;
  // (async () => {
  //    console.log(issueData)
  //    return;
  // })();

  useEffect(() => {
    if(issueData == null) {
      issueData ={
        "lanes": [
          {
            "draggable": false,
            "id": "OPEN",
            "title": "OPEN",
            "label": "20/70",
            "style": {
              "width": 280
            },
            "cards": [
              {
                "id": "xyz",
                "title": "xyz",
                "label": "15 mins",
                "description": ""
              },
              {
                "id": "abc",
                "title": "abc",
                "label": "10 mins",
                "description": ""
              },
              {
                "id": "asd",
                "title": "asd",
                "label": "30 mins",
                "description": ""
              },
              {
                "id": "zxc",
                "title": "zxc",
                "label": "5 mins",
                "description": ""
              }
            ]
          },
          {
            "id": "IN-PROGRESS",
            "title": "IN-PROGRESS",
            "label": "10/20",
            "style": {
              "width": 280
            },
            "cards": [
              {
                "id": "qwe",
                "title": "qwe",
                "label": "30 mins",
                "description": "reason to reject"
              }
            ]
          },
          {
            "id": "OPEN",
            "title": "OPEN",
            "label": "0/0",
            "style": {
              "width": 280
            },
            "cards": []
          },
          {
            "id": "REJECTED",
            "title": "REJECTED",
            "style": {
              "width": 280
            },
            "label": "2/5",
            "cards": [
              {
                "id": "dfg",
                "title": "dfg",
                "label": "15 mins",
                "description": ""
              },
              {
                "id": "rty",
                "title": "rty",
                "label": "15 mins",
                "description": ""
              }
            ]
          },
          {
            "id": "DONE",
            "title": "DONE",
            "style": {
              "width": 280
            },
            "label": "1/1",
            "cards": [
              {
                "id": "vbn",
                "title": "vbn",
                "label": "30 mins",
                "description": ""
              }
            ]
          }
        ]
      }
      alert(issueData)
    }
}, []); 

  return (
    <div>
      <div class="card ">
        <h5 class="card-header text-center">ISSUES BOARD</h5>
        <div class="card-body">
        <AsyncBoard data={issueData} laneDraggable hideCardDeleteIcon onCardClick={handleShow} />
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>ISSUE DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="card ">
            <div class="card-body">
              <h3>Login Issue</h3>
              <div class="row">
                <div class="col-6">
                  <p><strong>Description: </strong>This article will guide you through troubleshooting login issues for your Udemy for Business account. If you are seeking information on joining or signing in to your account for the first time, click here. If you are unsure if you have a Udemy for Business account, please follow the steps here.</p>
                </div>
                <div class="col-6">
                  <strong>Status: </strong>In Progress<br />
                  <strong>Assignee: </strong>Hansik Reddy<br />
                  <strong>Created Date: </strong>&nbsp;2020-11-25 11:12 AM<br />
                  <strong>Issue Occured: </strong>2020-11-25 11:12 AM<br />
                </div>
              </div>
              <hr class="my-4" />
              <strong>Steps To Reproduce Issue: </strong>
              <p>If your company has enabled single sign-on (SSO) you can access your Udemy for Business account via your SSO provider (e.g. Okta, OneLogin, etc). Alternatively, you can navigate to your company’s custom URL (i.e., udemy.com) and follow the prompts.
              If you receive any error message when attempting to log in via SSO, please contact your IT department to ensure that you have been provisioned access to Udemy for Business.</p>
              <hr class="my-4" />
              <strong>Attachments: </strong><br /><br />
              <Row>
                <Col>
                  <ModalImage
                    large="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEOyvXCfHCgVLPI-Kg733Cn1hEeoZRbUQcw&usqp=CAU"
                    small="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEOyvXCfHCgVLPI-Kg733Cn1hEeoZRbUQcw&usqp=CAU"
                    alt="Hello World!"
                  />
                </Col>
                <Col>
                  <ModalImage
                    large="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEOyvXCfHCgVLPI-Kg733Cn1hEeoZRbUQcw&usqp=CAU"
                    small="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEOyvXCfHCgVLPI-Kg733Cn1hEeoZRbUQcw&usqp=CAU"
                    alt="Hello World!"
                  />
                </Col>
                <Col>
                  <ModalImage
                    large="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEOyvXCfHCgVLPI-Kg733Cn1hEeoZRbUQcw&usqp=CAU"
                    small="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEOyvXCfHCgVLPI-Kg733Cn1hEeoZRbUQcw&usqp=CAU"
                    alt="Hello World!"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}