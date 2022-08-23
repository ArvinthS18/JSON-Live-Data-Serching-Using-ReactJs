import React, {Component} from 'react';
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
            <b>{this.props.pr.author_detail.name}</b>
          </h5></center>
          <center><p className="card-text">
           <b> {this.props.pr.author_detail.type}</b>
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

