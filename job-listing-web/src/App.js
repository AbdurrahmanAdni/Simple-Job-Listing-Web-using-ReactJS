import React, { Component } from 'react';
import './App.css';
import JobList from './components/JobList';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      Jobs:[
        {
          id : 1,
          companyName : "Digitech",
          companyLogo : "/image/digitech.png",
          positionName : "Senior Frontend Developer",
          jobDesc : "Work as Frontend developer",
          salaryRange : "Rp15.000.000,00 - Rp22.000.000,00",
          jobLocation : "USA",
          postTag : "FEATURED",
          jobTag : ['Frontend','Senior','HTML','CSS'],
          datePost : 17,
          monthPost : 3,
          yearPost : 2020,
        },
        {
          id : 2,
          companyName : "DocLaunch",
          companyLogo : "/image/doclaunch.png",
          positionName : "Junior Frontend Developer",
          jobDesc : "Work as Junior developer",
          salaryRange : "Rp10.000.000,00 - Rp12.000.000,00",
          jobLocation : "Indonesia",
          postTag : null,
          jobTag : ['Junior','Frontend', 'Javascript'],
          datePost : 22,
          monthPost : 3,
          yearPost : 2020,
        },
        {
          id : 3,
          companyName : "Openly",
          companyLogo : "/image/openly.png",
          positionName : "Junior Frontend Developer",
          jobDesc : "Work as Junior developer",
          salaryRange : "Rp10.000.000,00 - Rp12.000.000,00",
          jobLocation : "Indonesia",
          postTag : null,
          jobTag : ['Frontend','Junior','HTML','CSS'],
          datePost : 26,
          monthPost : 3,
          yearPost : 2020,
        },
        {
          id : 4,
          companyName : "Mechanize Cyber",
          companyLogo : "/image/mechanize.png",
          positionName : "Backend Web Developer",
          jobDesc : "Work as Junior developer",
          salaryRange : "Rp10.000.000,00 - Rp12.000.000,00",
          jobLocation : "Indonesia",
          postTag : "FEATURED",
          jobTag : ['Backend', 'Javascript', 'AWS'],
          datePost : 24,
          monthPost : 3,
          yearPost : 2020,
        },
        {
          id : 5,
          companyName : "Occamp",
          companyLogo : "/image/occamp.png",
          positionName : "Senior Backend Developer",
          jobDesc : "Work as Junior developer",
          salaryRange : "Rp10.000.000,00 - Rp12.000.000,00",
          jobLocation : "Indonesia",
          postTag : "FEATURED",
          jobTag : ['Senior','Backend', 'Javascript', 'AWS'],
          datePost : 27,
          monthPost : 3,
          yearPost : 2020,
        },
        {
          id : 6,
          companyName : "Endavo Tech",
          companyLogo : "/image/endavotech.png",
          positionName : "Frontend Developer",
          jobDesc : "Work as Junior developer",
          salaryRange : "Rp10.000.000,00 - Rp12.000.000,00",
          jobLocation : "Indonesia",
          postTag : "FEATURED",
          jobTag : ['Frontend', 'Javascript'],
          datePost : 20,
          monthPost : 3,
          yearPost : 2020,
        },
        {
          id : 7,
          companyName : "Up Word",
          companyLogo : "/image/upword.png",
          positionName : "Junior Frontend Developer",
          jobDesc : "Work as Junior developer",
          salaryRange : "Rp10.000.000,00 - Rp12.000.000,00",
          jobLocation : "Indonesia",
          postTag : null,
          jobTag : ['Frontend', 'HTML', 'CSS', 'Junior'],
          datePost : 2,
          monthPost : 3,
          yearPost : 2020,
        }
      ],

      Filter : []
    }
  }

  addTagToFilter(tag){
    //alert("Add");
    if(!(this.state.Filter.indexOf(tag) > -1)){
      this.setState({
        Filter:[...this.state.Filter, tag]
      });
    }
  }

  clearFilter(){
    //alert("clear all tag");
    this.setState({Filter:[]});
  }

  deleteTag(tag){
    //alert("delete")
    const newFilter = this.state.Filter;
    newFilter.splice(this.state.Filter.indexOf(tag), 1);
    this.setState({Filter:newFilter});
  }
  

  render(){

    let filteredJob = this.state.Jobs.filter((job) => {
      return this.state.Filter.every(r => job.jobTag.includes(r));
    });

    /*console.log(this.state.Filter);
    console.log(filteredJob);*/

    return (
      <div className="App">
        <Header filterTag = {this.state.Filter} clearFilter = {this.clearFilter.bind(this)} deleteTag = {this.deleteTag.bind(this)} />
        <JobList jobs = {filteredJob} addTagToFilter = {this.addTagToFilter.bind(this)}/>
      </div>
    );
  }
}

class Header extends Component{

  constructor(props){
    super(props);

    this.clearAllTag = this.clearAllTag.bind(this);
    this.delTag = this.delTag.bind(this);
  }

  delTag(tag){
    this.props.deleteTag(tag);
  }

  clearAllTag(){
    this.props.clearFilter();
  }

  render(){

    //console.log(this.props.filterTag);

    const renderTagList = () => {
      if (this.props.filterTag.length === 0 ){
        return (
          <div className = "Filter-tag-item">
            <div className = "Filter-tag">Filter - Empty</div>
          </div>
        );
      } else {    
        return this.props.filterTag.map((tag) => (
          <div className = "Filter-tag-item">
            <div className = "Filter-tag">{tag}</div>
            <div className = "Delete-button" onClick = {() => this.delTag(tag)}>x</div>
          </div>
        ));
      }
    }

    return(
      <div id="Header-container">
        <div id="Header-wrapper">  
          <div id ="Job-tag-filter">{renderTagList()}</div>
          <div id="Clear-container">
            <div id="Clear" onClick = {() => this.clearAllTag()}>Clear</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
