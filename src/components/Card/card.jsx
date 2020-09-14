import React from 'react';
import './card-style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

class Card extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
         
        return(
            <Carousel className="carouser-outer">
                <div className="img-holder">
                    <img className="image" src='https://picsum.photos/id/0/5616/3744' alt="1.jpg"></img>
                    <p className="legend">Legend 1</p>
                </div>
                <div className="img-holder">
                    <img className="image"  src='https://picsum.photos/id/10/2500/1667' alt="2.jpg"></img>
                    <p className="legend">Legend 2</p>
                </div>
                <div className="img-holder">
                    <img  className="image"  src='https://picsum.photos/id/100/2500/1656' alt="3.jpg"></img>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        )
    }
}
export default Card;