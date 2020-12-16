import React from 'react';
import '.././css/Styles.css';
import Board from "react-trello";
import { Col, Row, Modal } from 'react-bootstrap'
import ModalImage from "react-modal-image";

class IssuesBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      show: false
    };
  }

  handleShow() {
    this.setState({ "show": true })
  }

  handleClose() {
    this.setState({ "show": false })
  }

  handleCardMove(fromLaneId, toLaneId, cardId, index) {
    var issuesList = localStorage.getItem("issuesList");
    issuesList = JSON.parse(issuesList);
    issuesList.forEach(function (issue) {      
      if(issue.issueId == cardId){
        issue["issueStatus"] = toLaneId
      }
    })
    localStorage.setItem("issuesList", JSON.stringify(issuesList));
  }

  changeCardStatus(status, cardId){
    var issuesList = localStorage.getItem("issuesList");
    issuesList = JSON.parse(issuesList);
    issuesList.forEach(function (issue) {      
      if(issue.issueId == cardId){
        issue["issueStatus"] = status
      }
    })
    localStorage.setItem("issuesList", JSON.stringify(issuesList));
  }

  componentWillMount() {
    this.renderMyData();
  }

  renderMyData() {
    var issuesData = {};
    var openCards = [];
    var inProgressCards = [];
    var rejectedCards = [];
    var doneCards = [];

    var issuesList = localStorage.getItem("issuesList");
    if (issuesList == null) {
      issuesData = []
    } else {
      issuesList = JSON.parse(issuesList);
      issuesList.forEach(function (issue) {
        if (issue.issueStatus === "OPEN") {
          openCards.push({
            "id": issue.issueId,
            "title": issue.issueCategory,
            "label": issue.issueOccuredDate,
            "description": issue.description ,
            metadata: { sha: 'be312a1' }
          })
        } else if (issue.issueStatus === "IN-PROGRESS") {
          inProgressCards.push({
            "id": issue.issueId,
            "title": issue.issueCategory,
            "label": issue.issueOccuredDate,
            "description": issue.description
          })
        } else if (issue.issueStatus === "REJECTED") {
          rejectedCards.push({
            "id": issue.issueId,
            "title": issue.issueCategory,
            "label": issue.issueOccuredDate,
            "description": issue.description
          })
        } else if (issue.issueStatus === "DONE") {
          doneCards.push({
            "id": issue.issueId,
            "title": issue.issueCategory,
            "label": issue.issueOccuredDate,
            "description": issue.description
          })
        }
      })
    }

    issuesData = {
      "lanes": [
        {
          "draggable": false,
          "id": "OPEN",
          "title": "OPEN",
          "label": "20/70",
          "style": {
            "width": 280
          },
          "cards": openCards
        },
        {
          "draggable": false,
          "id": "IN-PROGRESS",
          "title": "IN-PROGRESS",
          "label": "20/70",
          "style": {
            "width": 280
          },
          "cards": inProgressCards
        },
        {
          "draggable": false,
          "id": "REJECTED",
          "title": "REJECTED",
          "label": "20/70",
          "style": {
            "width": 280
          },
          "cards": rejectedCards
        },
        {
          "draggable": false,
          "id": "DONE",
          "title": "DONE",
          "label": "20/70",
          "style": {
            "width": 280
          },
          "cards": doneCards
        }
      ]
    }

    this.setState({ data: issuesData })
  }
  render() {

    return (
      <div>
        <div class="card ">
          <h5 class="card-header text-center">ISSUES BOARD</h5>
          <div class="card-body">
            <Board data={this.state.data} laneDraggable hideCardDeleteIcon onCardClick={this.handleShow.bind(this)} onCardMoveAcrossLanes={this.handleCardMove}/>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
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
    )
  }
}

export default IssuesBoard;