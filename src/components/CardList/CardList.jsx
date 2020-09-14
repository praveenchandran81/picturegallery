import React from 'react';
import './CardList-style.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Card from '../Card/card';

export const images=[
    "https://picsum.photos/id/0/5616/3744",
    "https://picsum.photos/id/10/2500/1667",
    "https://picsum.photos/id/100/2500/1656"
]

class CardList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='card-list-holder'>
                  {
                      images.map(imgUrl=>(
                        <Popup trigger={<img className='image' src={imgUrl}></img>} modal nested position="right center">
                        <div> <Card/> </div>
                        </Popup>
                      ))
                  }
                     
                       
                    
                   
                    
            </div>
        )
    }
};

export default CardList;