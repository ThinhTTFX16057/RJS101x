import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle}from 'reactstrap';


class Menu extends Component {

    render(){
        const displaymenu = this.props.dishes.map( (dish)=> {
            return(           
                <Card key={dish.id} onClick={()=>this.props.onClick(dish.id)} className='col-12 col-md-5 m-1'>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {displaymenu}
                </div>
            </div>
        );
    }    
}

export default Menu
//MenuComponent.js đóng vai trò presentational component để hiển thị Menu ban đầu, với sự kiện onClick(id)) trả về id của món ăn trong CSDL