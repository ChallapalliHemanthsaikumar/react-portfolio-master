import React, { Component } from 'react';
import './resume.css'
class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3 className='coloring'>{education.school}</h3>
        <p className="info coloring">{education.degree} <span>&bull;</span><em className="date coloring">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3 className='coloring'>{work.company}</h3>
            <p className="info coloring">{work.title}<span>&bull;</span> <em className="date coloring">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand  '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level,background:"#0f9b0f"}}className={className } ></span><em style={{color:'white'}}>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume" style={{backgroundColor:'#2B2B2B'}} >

      <div className="row education coloring">
         <div className="three columns header-col">
            <h1><span className='coloring'>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns ">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span className='coloring'>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span className='coloring'>Top Skills</span></h1>
         </div>

         <div className="nine columns main-col">

           
				<div className="bars ">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
