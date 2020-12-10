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

    const getOperatingSystemDetails = () => {
        var Name = "Unknown OS";
        if (navigator.userAgent.indexOf("Win") != -1) Name =
            "Windows OS";
        if (navigator.userAgent.indexOf("Mac") != -1) Name =
            "Macintosh";
        if (navigator.userAgent.indexOf("Linux") != -1) Name =
            "Linux OS";
        if (navigator.userAgent.indexOf("Android") != -1) Name =
            "Android OS";
        if (navigator.userAgent.indexOf("like Mac") != -1) Name =
            "iOS";

        return Name;
    }

    const getBrowserDetails = () => {
        var browserDetails = null;
        var navUserAgent = navigator.userAgent;
        var browserName = navigator.appName;
        var browserVersion = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var tempNameOffset, tempVersionOffset, tempVersion;

        if ((tempVersionOffset = navUserAgent.indexOf("Opera")) != -1) {
            browserName = "Opera";
            browserVersion = navUserAgent.substring(tempVersionOffset + 6);
            if ((tempVersionOffset = navUserAgent.indexOf("Version")) != -1)
                browserVersion = navUserAgent.substring(tempVersionOffset + 8);
        } else if ((tempVersionOffset = navUserAgent.indexOf("MSIE")) != -1) {
            browserName = "Microsoft Internet Explorer";
            browserVersion = navUserAgent.substring(tempVersionOffset + 5);
        } else if ((tempVersionOffset = navUserAgent.indexOf("Chrome")) != -1) {
            browserName = "Chrome";
            browserVersion = navUserAgent.substring(tempVersionOffset + 7);
        } else if ((tempVersionOffset = navUserAgent.indexOf("Safari")) != -1) {
            browserName = "Safari";
            browserVersion = navUserAgent.substring(tempVersionOffset + 7);
            if ((tempVersionOffset = navUserAgent.indexOf("Version")) != -1)
                browserVersion = navUserAgent.substring(tempVersionOffset + 8);
        } else if ((tempVersionOffset = navUserAgent.indexOf("Firefox")) != -1) {
            browserName = "Firefox";
            browserVersion = navUserAgent.substring(tempVersionOffset + 8);
        } else if ((tempVersionOffset = navUserAgent.indexOf("Edge")) != -1) {
            browserName = "Microsoft Edge";
            browserVersion = navUserAgent.substring(tempVersionOffset + 8);
        } else if ((tempNameOffset = navUserAgent.lastIndexOf(' ') + 1) < (tempVersionOffset = navUserAgent.lastIndexOf('/'))) {
            browserName = navUserAgent.substring(tempNameOffset, tempVersionOffset);
            browserVersion = navUserAgent.substring(tempVersionOffset + 1);
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }

        // trim version
        if ((tempVersion = browserVersion.indexOf(";")) != -1)
            browserVersion = browserVersion.substring(0, tempVersion);
        if ((tempVersion = browserVersion.indexOf(" ")) != -1)
            browserVersion = browserVersion.substring(0, tempVersion);

        browserDetails = {
            "browserName": browserName,
            "browserVersion": browserVersion
        }
        return browserDetails;
    }

    const checkFileSize = (event) => {
        const target = event.target
        const maxAllowedSize = 5 * 1024 * 1024;
        if (target.files[0].size > maxAllowedSize) {
            target.value = ''
            alert("File Size Should Be Less Than 5 MB");
        }
    }

    const saveNewIssue = () => {
        var osName = getOperatingSystemDetails();
        var browser = getBrowserDetails();
        var issuesList = [];
        issuesList = localStorage.getItem("issuesList");
        if (issuesList == null) {
            issuesList = [];
            issuesList.push({
                "email": email,
                "severity": severity,
                "issueCategory": issueCategory,
                "description": description,
                "reproduceIssue": reproduceIssue,
                "issueOccuredDate": issueOccuredDate,
                "osName": osName,
                'browserDetails': browser
            })
        } else {
            issuesList = JSON.parse(issuesList);
            issuesList.push({
                "email": email,
                "severity": severity,
                "issueCategory": issueCategory,
                "description": description,
                "reproduceIssue": reproduceIssue,
                "issueOccuredDate": issueOccuredDate,
                "osName": osName,
                'browserDetails': browser
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