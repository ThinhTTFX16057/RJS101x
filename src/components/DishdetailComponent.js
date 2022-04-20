import React, { useState } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button}from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';


function RenderDish({x}){return(
    <Card key={x.id} className='col-12 col-md-5 m-1'>
        <CardImg src={baseUrl + x.image} alt={x.name} />
        <CardBody>
            <CardTitle>{x.name}</CardTitle>
            <CardText>{x.description}</CardText>
        </CardBody>
    </Card>
)}


function RenderComments({comments,addComment,dishId}){
    const [isOpen,setState] =useState(false);
    const toggleModal = () => {setState(!isOpen)};
    
    return(
    <div className='col-12 col-md-5 m-1'>
        <h4>Comment</h4>
        <ul className='list-unstyled'>
            {comments.map((x)=>{
                return(
                <li key={x.id}>
                    <div>{x.comment}</div>
                    <div>-- {x.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</div>
                </li>
                )
            })}
        </ul>
        <Button outline onClick={toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comments</Button>
        <CommentForm isOpen={isOpen} toggle={toggleModal} dishId={dishId} addComment={addComment}/>
    </div>
    )
} 

const DishDetail=(props)=>{
    if (props.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }
    else if (props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish!=null){return(
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <RenderDish x={props.dish}/>
                <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id}/>
            </div>
        </div>
        )}
    else {return(<div></div>)}
}   
export default DishDetail