import React, { Component } from 'react';
import Card from './Card';

class Portfolio extends Component {
  render() {

    
    

    return (
      <section id="portfolio" style={{backgroundColor:'#2B2B2B'}}>

      <div className="row" >

         <div className="twelve columns collapsed">

            <h1 style={{color:'white',fontWeight:'bolder',fontSize:'large'}}>Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {
                  this.props.data?this.props.data.projects.map(
                    card => { return (<Card  title={card.title} url={card.url} description={card.description1} imageUrl={ 'images/portfolio/'+card.image} category={card.category}/>)
                    }
                  ) : <div> </div>
                }
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
