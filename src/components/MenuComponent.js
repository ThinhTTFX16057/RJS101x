import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle}from 'reactstrap';


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            xemthucdon: null
        }
    }

    showmota(thucdon){
        this.setState({xemthucdon: thucdon})
    }

    renderShowmota(xemthucdon){
        if (xemthucdon != null){return(
            <Card key={xemthucdon.id} className='col-12 col-md-5 m-1'>
                <CardImg src={xemthucdon.image} alt={xemthucdon.name} />
                <CardBody>
                    <CardTitle>{xemthucdon.name}</CardTitle>
                    <CardText>{xemthucdon.description}</CardText>
                </CardBody>
            </Card>
        )}
        else {return(
            <div></div>
        )}
    }

    render(){
        //trong Appp.js thì thucdon có state la obj DISHES trich xuat tu shared/dishes.js
        //thucdon=DISHES [ {...} ]
        const displaymenu = this.props.thucdon.map( (x)=> {
            return(
                
                    <Card key={x.id} onClick={()=>this.showmota(x)} className='col-12 col-md-5 m-1'>
                        <CardImg src={x.image} alt={x.name} />
                        <CardImgOverlay>
                            <CardTitle>{x.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {displaymenu}
                </div>
                <div className='row'>
                    {this.renderShowmota(this.state.xemthucdon)}
                </div>
            </div>
        );


    }

    
}

export default Menu