import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle}from 'reactstrap';


function RenderDish({x}){return(
    <Card key={x.id} className='col-12 col-md-5 m-1'>
        <CardImg src={x.image} alt={x.name} />
        <CardBody>
            <CardTitle>{x.name}</CardTitle>
            <CardText>{x.description}</CardText>
        </CardBody>
    </Card>
)}
function RenderComments({y}){return(
    <div className='col-12 col-md-5 m-1'>
        <h4>Comment</h4>
        <ul className='list-unstyled'>
            {y.map((x)=>{
                return(
                <li key={x.id}>
                    <div>{x.comment}</div>
                    <div>-- {x.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</div>
                </li>
                )
            })}
        </ul>
    </div>
)} 
const DishDetail=(props)=>{
    if (props.dish!=null){return(
        <div className="container">
            <div className="row">
                <RenderDish x={props.dish}/>
                <RenderComments y={props.dish.comments}/>
            </div>
        </div>
        )}
    else {return(<div></div>)}
}   

export default DishDetail