import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './loading-25.gif';
import './12.css';
import $ from 'jquery';
import Popup from './Popup';

class Data extends Component {
constructor(){
  super()
  this.state = { 
                Lib: [],
                empty : 'No Data',
                load : 'off',
                author_detail : [],          
                check : 0 ,
                work_count : []  ,
                order : "Asc",
               
               };
  this.ajaxcall= this.ajaxcall.bind(this);
  this.ajaxcall_1= this.ajaxcall_1.bind(this); 
  }

  ajaxcall() {
    this.setState({load : 'on'});
    let x = document.getElementById("cc").value;
    if (x === "") { alert("Please Enter a Name to Search"); }
    else {
      let u = 'https://openlibrary.org/search/authors.json?q=';
      let URL = u + x;   

      $.ajax({

        url: URL,
        contentType: "application/json"
      })
        .done(
          function(data) {
            this.setState({ Lib : data.docs });
            $("#loading").hide();
          }.bind(this)
        )
        .fail(
          function(datas) {
            $("#loading").hide();
          }.bind(this)
        );
     }
  }
  ajaxcall_1(val) {   
  
    let A_N = val.target.innerText;  
    let u2 = 'https://openlibrary.org/search/authors.json?q=';
    let URL2 = u2 + A_N;     
    $.ajax({
      url: URL2,
      contentType: "application/json"
    })
      .done(
        function(data) {
          this.setState({ author_detail : data.docs[0],
                          check : 1});
        }.bind(this)
      )
      .fail(
        function(datas) {
          
        }.bind(this)
      );   
      $("#ca").show();               
  }

   findvalid=(Val)=>{
    const detail = (Val === undefined) ? this.state.empty : Val;
    return detail;
  }

  sorting_table(event, sortKey){
    const data = this.state.Lib;
if(sortKey == "name"){
    if (this.state.order == "Asc"){    
    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({Lib : data, order : "Dec"})
      }
    if (this.state.order == "Dec"){     
      data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
      this.setState({Lib : data , order : "Asc"});
     }
     
   }  
  else if(sortKey == "work_count"){

    if (this.state.order == "Asc"){    
    data.sort((a,b) => a[sortKey] - b[sortKey])
    this.setState({Lib : data, order : "Dec"})
      }
    if (this.state.order == "Dec"){      
      data.sort((a,b) => b[sortKey] - a[sortKey])
      this.setState({Lib : data , order : "Asc"});
     }
     
   }
  } 
  tablefilter = val =>{
    if (val.target.value.length > 0){
    this.setState({searchInput : val.target.value})
    console.log(val.target.value);  
    const temp = this.state.Lib;
    console.log(temp);
    const filter = temp.filter(value => value.name.toLowerCase().includes(this.state.searchInput.toLowerCase()));    
    
    //console.log(filtered);
    this.setState({Lib : filter})

    }
   }
  render() {
    const UserData = this.state.Lib.map((author,index) => 
    <tr key={index}>
      <td>{index+1}</td>
     <td onClick={this.ajaxcall_1}>{author.name}</td>
      <td >{author.type}</td>
      <td>{this.findvalid(author.birth_date)}</td>
      <td>{author.work_count}</td>              
    </tr>
  )
    return (
      <div>
        <br></br>
            <h2 class="normal" align="center"><b>JSON Live Data Search using Ajax</b></h2>
            <h3 align="center"><b>Author's Data</b></h3>
            <br></br>
            <div >
            <center>
            <input type="text" id="cc"/>
            <button type="button"onClick={this.ajaxcall} className="btn btn-success">Search</button>
           
        </center> 
   
        <br />
             {this.state.Lib.length > 0 ? <div style={{top:"12px",left :"12px"}} className="input-group mb-3"><br/>    
   <input type="text" placeholder="Search by name " onChange={e => this.tablefilter(e.target.value) }/>
  </div> : ""}
        {this.state.load == 'on' ? <div id="loading">
        <div class="centerdiv">
            <img src={logo} style={{width:'50px',height:'50px'}}/>
        </div>
    </div>
    : " "}
       
    { this.state.Lib.length > 0  ? <table className="table table-hover table-success">          
         
    <tr>
          <td>S.No </td>
          <td >Name<i onClick={e => this.sorting_table(e, "name")} className="fa fa-fw fa-sort"></i></td>
          <td>Type </td>
          <td>DOB </td>
          <td >Work count <i onClick={e => this.sorting_table(e, "work_count")} className="fa fa-fw fa-sort" ></i></td>                
        </tr>       
          <tbody>{UserData}</tbody>
          </table>:" "}
      </div >
      <div>
        <Popup pr={this.state}/>
      </div>
      </div>
    );
  }
}
export default Data;