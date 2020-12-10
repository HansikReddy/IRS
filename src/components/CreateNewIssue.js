import React, { useState, version } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReportIssue() {

    const [email, setEmail] = useState("");
    const [severity, setSeverity] = useState("");
    const [issueCategory, setIssueCategory] = useState("");
    const [description, setDescription] = useState("");
    const [reproduceIssue, setReproduceIssue] = useState("");
    const [issueOccuredDate, setIssueOccuredDate] = useState(new Date());

    const checkFileSize = (event) => {
        const target = event.target
        const maxAllowedSize = 5 * 1024 * 1024;
        if (target.files[0].size > maxAllowedSize) {
            target.value = ''
            alert("File Size Should Be Less Than 5 MB");
        }
    }

    const saveNewIssue = () => {
        var issuesList = [];
        issuesList = localStorage.getItem("issuesList");
        if (issuesList == null) {
            issuesList = [];
            issuesList.push({
                "issueId": 0,
                "email": email,
                "severity": severity,
                "issueCategory": issueCategory,
                "description": description,
                "reproduceIssue": reproduceIssue,
                "issueOccuredDate": issueOccuredDate,
                "issueStatus": 'OPEN'
            })
        } else {
            issuesList = JSON.parse(issuesList);
            var issueListLength = issuesList.length;
            var lastIssueId = issuesList[issueListLength-1].issueId;
            issuesList.push({
                "issueId": lastIssueId+1,
                "email": email,
                "severity": severity,
                "issueCategory": issueCategory,
                "description": description,
                "reproduceIssue": reproduceIssue,
                "issueOccuredDate": issueOccuredDate,
                "issueStatus": 'OPEN'
            })
        }
        localStorage.setItem("issuesList", JSON.stringify(issuesList));
    }

    return (
        <div class="container" style={{ 'max-width': '1300px' }}>
            <div class="card">
                <h5 class="card-header text-center">REPORT NEW ISSUE</h5>
                <div class="card-body">
                    <form>
                        <div class="form-row">
                            <div class="form-group required col-md-4">
                                <label for="exampleFormControlInput1" class="control-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value); }} />
                            </div>
                            <div class="form-group required col-md-4">
                                <label for="exampleFormControlSelect1">Severity</label>
                                <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => { setSeverity(e.target.value); }}>
                                    <option>HIGH</option>
                                    <option>MEDIUM</option>
                                    <option>LOW</option>
                                </select>
                            </div>
                            <div class="form-group required col-md-4">
                                <label for="exampleFormControlSelect1">Issue Category</label>
                                <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => { setIssueCategory(e.target.value); }}>
                                    <option>BUG-1</option>
                                    <option>BUG-2</option>
                                    <option>BUG-3</option>
                                    <option>BUG-4</option>
                                    <option>BUG-5</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="exampleFormControlFile1" class="control-label">Attachments</label>
                                <input type="file" multiple class="form-control-file" name="photo" onChange={checkFileSize} />
                                <small id="passwordHelpBlock" class="form-text text-muted">Multiple attachments can be selected</small>
                            </div>
                            <div class="form-group required  col-md-3">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="inputPassword4" class="control-label">Issue Faced At?</label><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <DatePicker
                                    placeholderText="Issue Faced At ?"
                                    selected={issueOccuredDate}
                                    onChange={date => setIssueOccuredDate(date)}
                                    timeInputLabel="Time:"
                                    dateFormat="dd/MM/yyyy h:mm aa"
                                    showTimeInput
                                />
                            </div>
                        </div>
                        <div class="form-group required">
                            <label for="exampleFormControlTextarea1" class="control-label">Issue description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setDescription(e.target.value); }}></textarea>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Steps To Re-Produce Issue</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setReproduceIssue(e.target.value); }}></textarea>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-muted">
                    <button type="submit" onClick={saveNewIssue} class="btn btn-primary">CREATE ISSUE</button>
                </div>
            </div>
        </div>
    );
}