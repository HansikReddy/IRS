import React from 'react';
import Table from 'react-bootstrap/Table'
import $ from 'jquery';

export default function listIssue() {
    return (
        <form>
            <div class="card">
                <h3 class="card-header text-center font-weight-bold text-uppercase py-4">REPORTED ISSUES</h3>
                <div class="card-body">
                    <div id="table" class="table-editable">
                        <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                        <table class="table table-bordered table-responsive-md table-striped text-center">
                            <thead>
                                <tr>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Issue Time</th>
                                    <th class="text-center">Description</th>
                                    <th class="text-center">Steps To Re-Produce Issue</th>
                                    <th class="text-center">Issue Occured Date</th>
                                    <th class="text-center">Photo / Video</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span class="table-remove"><button type="button" class="btn btn-success btn-rounded btn-sm my-0">OPEN</button></span></td>
                                    <td class="pt-3-half" contenteditable="true">30</td>
                                    <td class="pt-3-half" contenteditable="true">Deepends</td>
                                    <td class="pt-3-half" contenteditable="true">Spain</td>
                                    <td class="pt-3-half" contenteditable="true">Madrid</td>
                                    <td class="pt-3-half">
                                        <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
                                        <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
                                    </td>
                                    <td>
                                        <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="pt-3-half" contenteditable="true">Guerra Cortez</td>
                                    <td class="pt-3-half" contenteditable="true">45</td>
                                    <td class="pt-3-half" contenteditable="true">Insectus</td>
                                    <td class="pt-3-half" contenteditable="true">USA</td>
                                    <td class="pt-3-half" contenteditable="true">San Francisco</td>
                                    <td class="pt-3-half">
                                        <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
                                            aria-hidden="true"></i></a></span>
                                        <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                                            aria-hidden="true"></i></a></span>
                                    </td>
                                    <td>
                                        <span class="table-remove"><button type="button"
                                            class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="pt-3-half" contenteditable="true">Guadalupe House</td>
                                    <td class="pt-3-half" contenteditable="true">26</td>
                                    <td class="pt-3-half" contenteditable="true">Isotronic</td>
                                    <td class="pt-3-half" contenteditable="true">Germany</td>
                                    <td class="pt-3-half" contenteditable="true">Frankfurt am Main</td>
                                    <td class="pt-3-half">
                                        <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
                                            aria-hidden="true"></i></a></span>
                                        <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                                            aria-hidden="true"></i></a></span>
                                    </td>
                                    <td>
                                        <span class="table-remove"><button type="button"
                                            class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                                    </td>
                                </tr>

                                <tr class="hide">
                                    <td><span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span></td>
                                    <td class="pt-3-half" contenteditable="true">31</td>
                                    <td class="pt-3-half" contenteditable="true">Portica</td>
                                    <td class="pt-3-half" contenteditable="true">United Kingdom</td>
                                    <td class="pt-3-half" contenteditable="true">London</td>
                                    <td class="pt-3-half">
                                        <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
                                            aria-hidden="true"></i></a></span>
                                        <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                                            aria-hidden="true"></i></a></span>
                                    </td>
                                    <td>
                                        <span class="table-remove"><button type="button"
                                            class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </form>

    );
}







// import React from 'react';
// import { DropdownList } from 'react-widgets';
// import BootstrapTable from 'reactjs-bootstrap-table';
// import Logger from 'simple-console-logger';
// // import { selectionFromString } from '../util';
// import Notifier from 'react-bs-notifier';

// const log = Logger.getLogger("PageOne");

// function noop() {} // get rid of warnings about checkbox change handler

// class ListIssue extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onChange = this.onChange.bind(this);
//     this.onShowHeader = this.onShowHeader.bind(this);
//     this.onAutoResize = this.onAutoResize.bind(this);
//     this.setSelected = this.setSelected.bind(this);
//     this.changeTableClass = this.changeTableClass.bind(this);
//     this.changeActiveClass = this.changeActiveClass.bind(this);
//     this.onKeyPress = this.onKeyPress.bind(this);
//     this.onSelectType = this.onSelectType.bind(this);
//     this.onClickLink = this.onClickLink.bind(this);
//     this.onDismissAlert = this.onDismissAlert.bind(this);
//     this.onSort = this.onSort.bind(this);
//     this.onChangeSelectText = this.onChangeSelectText.bind(this);
//   }

//   onSort(col, dir) {
//     log.debug('onSort: ' + col + ' ' + dir);
//     this.props.sort(col, dir);
//   }

//   onDismissAlert(alert) {
//     this.props.dismissAlert(alert.id);
//   }

//   onClickLink(row) {
//     const message =
//     'You clicked item ' + row.id + ' random number ' + row.rand +
//     '. This column has a renderer that displays a link with ' +
//     'style bst-no-select so that clicking it does not change the selection.';
//     this.props.showAlert(message, row.id);
//   }

//   onSelectType(value) {
//     log.debug('select type: ' + value);
//     this.props.setSelectType(value);
//   }

//   changeTableClass(val) {
//     this.props.setTableClass(val);
//   }

//   changeActiveClass(val) {
//     this.props.setActiveClass(val);
//   }

//   onKeyPress(e) {
//     if (e.key === 'Enter') {
//       this.setSelected();
//     }
//   }

//   setSelected() {
//     if (this.refs.selectedInput) {
//       log.debug('setSelected: ' + this.refs.selectedInput.value);
//       let newSelection = selectionFromString(this.refs.selectedInput.value);
//       this.props.setSelected(newSelection);
//     }
//   }

//   onShowHeader(e) {
//     log.debug('onShowHeader: ' + e.target.checked);
//     this.props.showHeader(e.target.checked);
//   }

//   onAutoResize(e) {
//     log.debug('onAutoResize: ' + e.target.checked);
//     this.props.autoResize(e.target.checked);
//   }

//   onChangeSelectText(e) {
//     log.debug('onChangeSelectText: ' + e.target.checked);
//     this.props.setDisableSelectText(e.target.checked);
//   }

//   onChange(newSelection) {
//     this.props.setSelected(newSelection);
//   }

//   render() {
//     let resize = null;
//     if (this.props.options.resize) {
//       resize = {extra: 0, minSize: 200, elements: ['header', 'footer']};
//     }
//     log.debug('resize option is ' + resize);

//     let select = [
//       'none',
//       'single',
//       'multiple'
//     ];

//     let tableClass = [
//       'table',
//       'table table-hover',
//       'table table-bordered table-hover',
//       'table table-bordered table-hover table-condensed',
//     ];

//     let activeClass = [
//       'active',
//       'info',
//       'success',
//       'warning'
//     ];

//     let columns = [
//       { name: 'id', display: 'ID', width: 1 },
//       { name: 'col1', display: 'Column One' },
//       { name: 'col2', display: 'Column Two' },
//       { name: 'col3', display: 'Column Three' },
//       { name: 'rand', display: 'Random (sortable, clickable)', sort: true, renderer: (row) => {
//         return (
//           <a className="bst-no-select" href="#" onClick={this.onClickLink.bind(this, row)}>
//             {row.rand}
//           </a>
//         );
//       }}
//     ];

//     let footer = '';
//     if (this.props.data.length) {
//       footer =
//         <div className="well" id="footer" style={{marginTop: '-20px', fontWeight: 'bold'}}>
//             <span style={{color:'green'}}>Selected:</span> {this.props.selectedCount}
//           <button className="btn btn-primary pull-right" style={{display: 'inline-block', marginTop: -5}}
//               onClick={this.props.clearSelection}>
//             Clear Selection
//           </button>
//           <div style={{height: 1}}></div>
//         </div>
//     }

//     let buttonsDisabled = false;
//     if (this.props.selectedCount == 0) buttonsDisabled = true;

//     return (
//       <div>
//         <Notifier alerts={this.props.alerts} timeout={5000} onDismiss={this.onDismissAlert} />
//         <div className="row" id="header">
//           <div className="col-md-12 well">

//             <h3>Demo for <span style={{color:'green'}}>reactjs-bootstrap-table</span></h3>
//             <a href="https://github.com/raythree/reactjs-bootstrap-table-demo" target="_blank">Code is here.</a>
//             <div className="row">
//               <div className="col-md-4">
//                 <label>select</label>
//                 <DropdownList data={select} defaultValue={this.props.options.select} onChange={this.onSelectType}/>
//               </div>
//               <div className="col-md-4">
//                 <label>tableClass</label>
//                 <DropdownList data={tableClass} defaultValue={this.props.options.tableClass}
//                     onChange={this.changeTableClass}/>
//               </div>
//               <div className="col-md-4">
//                 <label>activeClass (selected)</label>
//                 <DropdownList data={activeClass} defaultValue={this.props.options.activeClass}
//                   onChange={this.changeActiveClass}/>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-md-4">
//                 <div className="checkbox">
//                   <label>
//                     <input type="checkbox" checked={this.props.options.headers}
//                       onClick={this.onShowHeader} onChange={noop}/>
//                     Show Column Headers
//                   </label>
//                 </div>
//                 <div className="checkbox">
//                   <label>
//                     <input type="checkbox" checked={this.props.options.resize}
//                       onClick={this.onAutoResize} onChange={noop}/>
//                     Auto Resize to fit
//                   </label>
//                 </div>
//                 <div className="checkbox">
//                   <label>
//                     <input type="checkbox" checked={this.props.options.disableSelectText}
//                       onClick={this.onChangeSelectText} onChange={noop}/>
//                     Disable Text Select
//                   </label>
//                 </div>
//               </div>

//               <div className="col-md-4">
//                 <div style={{fontWeight: 'bold', marginTop: '1em', marginBottom: '1em'}}>
//                   <span style={{color:'green'}}>Total:</span> {this.props.data.length},
//                   <span style={{color:'green'}}>
//                     <span /> Selected:
//                   </span> {this.props.selectedCount}
//                 </div>
//                 <div>
//                   <button className="btn btn-primary" style={{marginRight:'1em'}} disabled={buttonsDisabled}
//                       onClick={this.props.clearSelection}>
//                     Clear Selected
//                   </button>
//                   <button className="btn btn-warning" onClick={this.props.deleteSelected} disabled={buttonsDisabled}>
//                     <span className="glyphicon glyphicon-remove"></span> Delete
//                   </button>
//                   <button className="btn btn-default" style={{marginLeft:'1em'}} onClick={this.props.reloadData}>
//                     Reload Data
//                   </button>
//                 </div>
//               </div>

//               <div className="col-md-4" style={{padingRight: 30}}>
//                 <div style={{marginTop: '1em', marginBottom: '1em', fontWeight: 'bold'}}>Programmatic Selection: </div>
//                 <div className="input-group">
//                   <input type="text" className="form-control" ref="selectedInput" onKeyPress={this.onKeyPress}
//                     placeholder="Enter ID values separated by spaces ..."/>
//                   <span className="input-group-btn">
//                     <button className="btn btn-secondary" onClick={this.setSelected} type="button">Select</button>
//                   </span>
//                 </div>
//               </div>

//             </div>

//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-12">

//             <BootstrapTable data={this.props.data}
//               headers={this.props.options.headers}
//               select={this.props.options.select}
//               tableClass={this.props.options.tableClass}
//               disableSelectText={this.props.options.disableSelectText}
//               activeClass={this.props.options.activeClass}
//               resize={resize}
//               selected={this.props.selected}
//               onChange={this.onChange}
//               onSort={this.onSort}
//               columns={columns}>

//               <div style={{margin: '3em', border: '1px solid gray', padding: '1em'}} className="well well-success">
//                 <p>This DIV is shown when there is no data in the table. When empty the table renders
//                 the child element of the table.</p>
//                 <p>Click Reload Data to load new data.</p>
//               </div>

//             </BootstrapTable>

//             {footer}

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// PageOne.propTypes = { data: React.PropTypes.array };
// PageOne.defaultProps = { data: [] };

// export default  ListIssue;