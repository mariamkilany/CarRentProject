import React from 'react';
import {  TablePagination, Button, Tooltip, tooltipClasses, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DbCarsAdd from './dbCarsAdd';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RateReviewIcon from '@mui/icons-material/RateReview';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../dashboardtrial.css'
import { getAllUsersAction , deleteUsersAction } from '../../../features/car/usersAction';

const DbTransactions = () => {
      //redaing data 
  const usersInfo = useSelector((state)=>state.users.users)
  const dispatch = useDispatch();

  

  useEffect(()=>{
      dispatch(getAllUsersAction());	
  },[])

 
//   console.log(usersInfo);



/////////////////////////////////////////////////
    const theme = useTheme();

    ////////////////////////////////pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Change the number of rows per page as needed

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    };
    ////////////////////////////////// tooltip
    const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500,
        fontSize:"1.5rem"
    },
    });



////////////////////////////////////  slicing dscription 
    const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.slice(0, maxLength) + '...';
    }
    };

return (
  <div>

    {/* <div className="table-responsive">
        <table className="table table-hover table-nowrap">
            <thead className="thead-light">
            <tr>
            <td style={{paddingRight:"15px"}} >Id</td>
            <td > UserName</td>
            
            <td >UserEmail</td>
            <td >JobTitle </td>
            <td title='No.Of Transaction'>No.Of Trans..</td>
            </tr>
            </thead>
            <tbody>
            {(rowsPerPage > 0
                ? usersInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : usersInfo ).map((c, index) => (
                c? <tr>
                <td >
                    <div className='CarInfo'>
                    <LocalOfferIcon sx={{fontSize:"20px" , color:"#1A4393"}}></LocalOfferIcon>
                    <span className='carData' >
                    
                            {c.id}
                    </span>
                    </div>
                </td>

                <td >
                    <div className='CarInfo'>
                        {c.avatar?<img className="carImage" alt="..." src={c.avatar} />

                        :<AccountCircleOutlinedIcon  sx={{fontSize:'20px'}}></AccountCircleOutlinedIcon>}
                    <span className='carData'>
                    {c.name}
                    </span>
                    </div>
                </td>
            <td >
                    <div className='CarInfo'>
                    <MoveToInboxIcon sx={{fontSize:'20px'}}></MoveToInboxIcon>   
                    <span className='carData'>
                
                    {c.email}
                    </span>
                    </div>
                </td> 
                <td >
                    <div className='CarInfo'>
                    <WorkOutlinedIcon sx={{fontSize:'20px'}}></WorkOutlinedIcon>
                <span className='carData' style={{fontSize:"1.3rem"}}>
                {c.jobTitle}
                </span>
                    </div>
            </td>
                {/* <td >
                    <div  className='CarInfo'>
                    <RateReviewIcon sx={{fontSize:'20px' , color:"#FAAF00"}}></RateReviewIcon>
                        <span className='carData'>
                        {c.reviews.length}
                        </span>
                    </div>
                    </td> 
            <td >
                <div className='CarInfo'>
                {/* <RateReviewIcon sx={{fontSize:'20px'}}></RateReviewIcon> 
                <span className='carData'>
                {/* {c} 
                </span>
                </div>
            </td>


                <td>
                <Button title='delete' onClick={()=>dispatch(deleteUsersAction(c.id))} sx={{color:"var(--clr-e-600)"}}>
                <DeleteIcon/>
                </Button >
                </td>
            </tr>:<CircularProgress color="primary" size={40} thickness={4} />
            ))
            }
                
                
            </tbody> 
        
        </table>

        <TablePagination sx={{ '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar'  :{
                fontSize: '1.5rem !important',
                width:"100% !important"
            },
            '& .MuiTypography-body2': {
                fontSize: '1.5rem !important'
            }}}

            rowsPerPageOptions={[5, 10, 25]} // Change the options as needed
            component="div"
            count={usersInfo.length} // Total number of rows
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}/>
    </div> */}

  </div>

    );
}

export default DbTransactions;
