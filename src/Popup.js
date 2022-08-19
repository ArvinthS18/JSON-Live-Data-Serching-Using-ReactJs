import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

export default class Popup extends Component{
  constructor(props){
    super(props);
    
  }
  closeProfile() {
	
    document.getElementById("ca").style.display="none";
  }

  render(){
  return (
//     <center> { this.props.pr.check == 1 ?  
//       <center>
//               <button id="myBtn" onClick={this.closeProfile}>x</button>
//       <div class="padding">
//             <div class="page-content page-container" id="page-content">
//  <div className="row d-flex justify-content-center">
//       <div className="col-xl-9 ">
//           <div className="card user-card-full">
//               <div className="row m-l-0 m-r-0 mb-100">
//                   <div className="col-sm-4 bg-c-lite-green user-profile">
//                       <div className="card-block text-center text-white">
//                           <div className="m-b-25">
//                               <img src="https://picsum.photos/200"
//                                   alt="Admin" className="rounded-circle" width="150"/>
//                           </div>
//                           <h6 id="name" className="f-w-600">{this.props.pr.author_detail.name}</h6>
//                           <h6 id="type">{this.props.pr.author_detail.type}</h6>

//                       </div>
//                   </div>
//                   <div className="col-sm-8">
//                       <div className="card-block">
//                           <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Author's Information</h6>
//                           <div className="row">
//                           <div className="col-sm-4">
//                                                           <p className="m-b-5 f-w-600">Key</p>
//                                                           <h6 id="key" className="text-muted f-w-400">{this.props.pr.author_detail.key}</h6>
//                                                       </div>
//                               <div className="col-sm-4">
//                                   <p className="m-b-5 f-w-600">Work Count</p>
//                                   <h6 id="work_count" className="text-muted f-w-400">{this.props.pr.author_detail.work_count}</h6>
//                               </div>
//                               <div className="col-sm-4">
//                                   <p className="m-b-5 f-w-600">Version</p>
//                                   <h6 id="_version_" className="text-muted f-w-400">{this.props.pr.author_detail.version}</h6>
//                               </div>
                              
//                           </div>
//                           <div className="row">
//                           <div className="col-sm-4">
//                                   <p className="m-b-5 f-w-600">Birth Date</p>
//                                   <h6 id="birth_date" className="text-muted f-w-400">{this.props.pr.author_detail.birth_date}</h6>
//                               </div>
//                               <div className="col-sm-4">
//                                   <p className="m-b-5 f-w-600">Top Work</p>
//                                   <h6 id="top_work" className="text-muted f-w-400">{this.props.pr.author_detail.top_work}</h6>
//                               </div>
                             
//                           </div>

//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//   </div>
//   </div></div></center>: " "}
// </center>
// );
     
<center> { this.props.pr.check == 1 ? <div id="ca" className="clearfix">
<div className="row">
    <div className="col-md-4 animated fadeIn" >          
      <div id="ca" className="card">
      <button id="myBtn" onClick={this.closeProfile}>x</button>
        <div className="card-body">
          <div className="avatar">
            <img
              src="https://picsum.photos/200"                
              alt="Admin" className="rounded-circle" width="150"
            />
          </div>
          <center><h5 className="card-title">
            {this.props.pr.author_detail.name}
          </h5></center>
          <center><p className="card-text">
            {this.props.pr.author_detail.type}
            <br /></p></center>
            <center><span className="phone">{this.props.pr.author_detail.birth_date}</span></center>
          
        </div>
      </div>
    </div>
</div>
</div> : " "}
</center>
);
}
}

