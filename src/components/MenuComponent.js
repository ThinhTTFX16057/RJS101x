import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle}from 'reactstrap';

function RenderMenuItem({dish}){
    return (
        <Card >
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu=(props)=>{
    const displaymenu = props.dishes.map( (dish)=>{
        return(           
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });
    return(
        <div className='container'>
            <div className='row'>
                {displaymenu}
            </div>
        </div>
    );

}

export default Menu
