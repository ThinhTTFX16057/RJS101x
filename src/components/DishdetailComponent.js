import React, { Component } from 'react'
import {Card, CardBody, CardImg, CardText, CardTitle}from 'reactstrap';
class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    renderDish(x){
        return(
            <Card key={x.id} className='col-12 col-md-5 m-1'>
                <CardImg src={x.image} alt={x.name} />
                <CardBody>
                    <CardTitle>{x.name}</CardTitle>
                    <CardText>{x.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    renderComments(comments){
        return(
            <div className='col-12 col-md-5 m-1'>
                <h4>Comment</h4>
                <ul className='list-unstyled'>
                    {comments.map((x)=>{
                        return(
                            <li key={x.id}>
                                <div>{x.comment}</div>
                                <div>-- {x.author}, {x.date}</div>
                            </li>
                        );
                    })}
                </ul>
             </div>
        )} 
    render(){
        if (this.props.dish!=null){return(
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            )}
        else {return(<div></div>)}
        
    }
}
export default DishDetail