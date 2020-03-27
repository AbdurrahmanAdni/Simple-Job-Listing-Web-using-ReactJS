import React, { Component } from 'react';

class Job extends Component{

  constructor(props){
    super(props);
    this.clickJobDetail = this.clickJobDetail.bind(this);
    
  }

  clickJobDetail(posName){
    alert("this.props.job.positionName = " + posName);
  }

  addTag(tag){
    this.props.addTagToFilter(tag);
  }

  render(){     
    
    //console.log(this.props.job.jobTag);

    const renderJobTagList = () => {
      const data = Array.from(this.props.job.jobTag)
      return data.map((tag) => (
        <div className = "Job-tag" onClick = {() => this.addTag(tag)}>{tag}</div>
      ));
    }

    const renderPostTagList = () => {
      if (this.props.job.postTag != null){
        return <div className = "Post-tag">{this.props.job.postTag}</div>
      }
    }

    const renderNewTag = () => {
      const timePost = new Date(this.props.job.yearPost, this.props.job.monthPost - 1, this.props.job.datePost); //Year, Month, Date  
      const newDate = new Date()
      const date = newDate.getDate();
      const month = newDate.getMonth();
      const year = newDate.getFullYear();
      const dateNow = new Date(year, month, date); //Year, Month, Date 
      const diff = ((dateNow - timePost)/(24*3600*1000));
      if (diff < 2){
        return <div className = "New-post">New</div>
      }
    
    }

    const renderTimeTag = () => {
      const timePost = new Date(this.props.job.yearPost, this.props.job.monthPost - 1, this.props.job.datePost); //Year, Month, Date  
      const newDate = new Date()
      const date = newDate.getDate();
      const month = newDate.getMonth();
      const year = newDate.getFullYear();
      const dateNow = new Date(year, month, date); //Year, Month, Date 

      const diff = ((dateNow - timePost)/(24*3600*1000));
      return diff
    
    }

    return(
      <div className="Card">
        <div className = "Card-container">
          <div className = "Card-logo"><img className = "Logo" src = {this.props.job.companyLogo} alt = "Card-logo" /></div>
          <div className = "Card-detail">
            <div className = "Card-detail-head">
              <div className = "Company-name">{this.props.job.companyName}</div>
              {renderNewTag()}
              {renderPostTagList()}
            </div>
            <div className = "Card-detail-middle">
              <div className = "Job-position-name" onClick = {() => this.clickJobDetail(this.props.job.positionName)}>{this.props.job.positionName}</div>
              <div className = "Job-tag-container">
                {renderJobTagList()}
              </div>
            </div>
            <div className = "Card-detail-bottom">
              <div className = "Time">{renderTimeTag()}d ago</div>
              <div className = "Dot">.</div>
              <div className = "Job-type">Internship</div>
              <div className = "Dot">.</div>
              <div className = "Job-location">Indonesia</div>
            </div>
            <div className = "Mobile-job-tag">
              {renderJobTagList()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Job;