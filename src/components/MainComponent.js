import React, {Component} from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES, selectedDish:null
        }
    }
    
    onDishSelect(dishId){
    this.setState({selectedDish: dishId})}
    
    render(){return (
        <div>
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>

            <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>

            <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />

        </div>
    )}
}

export default Main;
//MainComponent.js đóng vai trò container component để hiển thị Navbar, Menu và DishDetail
//<Menu /> sử dụng sự kiện onClick để gán giá trị selectedDish = id của món ăn
// <DishDetail/> filter các mảng món ăn trong CSDL, tìm mảng có id món ăn =selectedDish thì trả về thành props để truy xuất tại DishDetailComponent.js