import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {promotion, PROMOTIONS} from '../shared/promotions';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
        }
    }
    
    
    render(){

        const Homepage=()=>{
            return(
            <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
            promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
            leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
            />);
        }
        return (
        <div>
            <Header/>
            <Switch>
              <Route path='/home' component={Homepage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path="/contactus" component={Contact} />
              <Redirect to="/home"/>
            </Switch>
            <Footer />
        </div>
    )}
}

export default Main;
//MainComponent.js đóng vai trò container component để hiển thị Navbar, Menu và DishDetail
//<Menu /> sử dụng sự kiện onClick để gán giá trị selectedDish = id của món ăn
// <DishDetail/> filter các mảng món ăn trong CSDL, tìm mảng có id món ăn =selectedDish thì trả về thành props để truy xuất tại DishDetailComponent.js

//Switch trong react-router v6 đã đổi tên thành Routes