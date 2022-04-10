import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import {Routes, Route} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES, selectedDish:null
        }
    }
    
    onDishSelect(dishId){
    this.setState({selectedDish: dishId})}
    
    render(){
        const HomePage = () => {
            return(
                <Home 
                />
            );
          }
        
        return (
        <div>
            <Header/>
            <Routes>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />

            </Routes>
            <Footer />
        </div>
    )}
}

export default Main;
//MainComponent.js đóng vai trò container component để hiển thị Navbar, Menu và DishDetail
//<Menu /> sử dụng sự kiện onClick để gán giá trị selectedDish = id của món ăn
// <DishDetail/> filter các mảng món ăn trong CSDL, tìm mảng có id món ăn =selectedDish thì trả về thành props để truy xuất tại DishDetailComponent.js

//Switch trong react-router v6 đã đổi tên thành Routes