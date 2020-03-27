import React, { Component } from 'react';
import Job from './Job';


class JobList extends Component{
    render(){
        //console.log(this.props.jobs)
        return this.props.jobs.map( (job) => (
            <Job job = {job} addTagToFilter = {this.props.addTagToFilter}/>
        ));
    }
}

export default JobList;
