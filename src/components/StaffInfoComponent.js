import React from 'react';
import {CardImg,CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from "react-router-dom";
import dateFormat from 'dateformat';
import { Loading } from './LoadingComponent';

function RenderInfo({staff}){return(
    <div key={staff.id} className="row">
        <CardBody  className="col-md-3 col-sm-4 col-12">
            <CardImg src={staff.image} />
        </CardBody>
        <CardBody className="col-md-9 col-sm-8 col-12">       
            
            <h3>Họ và tên: {staff.name}</h3>
            
            <div className="my-3">
                <div className="title"><strong>Ngày sinh:</strong></div>
                <input type="text" disabled value={dateFormat(staff.doB,"dd/mm/yyyy")}></input>
            </div>
        
        
            <div className="my-3">
                <div className="title"><strong>Ngày vào công ty:</strong></div>
                <input type="text" disabled value={dateFormat(staff.startDate,"dd/mm/yyyy")}></input>
            </div>
        
        
            <div className="my-3">
                <div className="title"><strong>Phòng ban:</strong></div>
                <input type="text" disabled value={staff.departmentId ? staff.departmentId : staff.department}></input>
            </div>
        
        
            <div className="my-3">
                <div className="title"><strong>Số ngày nghỉ còn lại:</strong></div>
                <input type="text" disabled value={staff.annualLeave}></input>
            </div>
        
        
            <div className="my-3">
                <div className="title"><strong>Số giờ đã làm thêm:</strong></div>
                <input type="text" disabled value={staff.overTime}></input>
            </div>
            
        </CardBody>
    </div>
);}


function StaffInfo(props){
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.staff!=null){return(
        <div className="container-fluid">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/staff'>Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
                <div id="menubar" className='container-fluid'>
                    <div className="floatleft"><h3>Thông tin nhân viên</h3>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div className="row">
                    <RenderInfo staff={props.staff}/>
                </div>
            </div>
        </div>
        )}
    else {return(<div></div>)}
}

export default StaffInfo
