import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination, Button, Tooltip, tooltipClasses, Typography, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DbCarsAdd from './dbCarsAdd';
import { useTheme } from '@emotion/react';
import DbCarsUpdate from './dbCarsUpdate';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCarAction, getAllCarAction } from '../../../features/car/carActions';




function DbCars() {
//redaing data 
  const carsInfo = useSelector((state)=>state.car.car)
	const dispatch = useDispatch();

	

	useEffect(()=>{
		dispatch(getAllCarAction());	
	},[])

   
	console.log(carsInfo);



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
      <div style={{ marginBottom: '20px', textAlign:"end" }}>   
        <DbCarsAdd></DbCarsAdd>
        {/* {isEditing && (
          <IconButton onClick={handleCloseEdit} style={{ marginLeft: '10px' }}>
            <CloseIcon />
          </IconButton>
        )} */}
      </div>

      <TableContainer component={Paper} >
        <Table  >
          <TableHead>
            <TableRow sx={{ '& > *': { fontSize: '1.7rem !important', fontWeight:"bold" } }} >
              <TableCell align='center' >Id</TableCell>
              <TableCell align='center' >Car Name</TableCell>
              <TableCell align='center' title='No.Of Transaction'>Description</TableCell>
              <TableCell align='center' >Type</TableCell>
              <TableCell align='center' >Steering </TableCell>
              <TableCell align='center'>Capacity</TableCell>
              <TableCell align='center'>Gasoline</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Reviews</TableCell>
              <TableCell align='center' title='No.Of Transaction'>No.Of Trans..</TableCell>
              <TableCell align='center' title='No.Of Transaction'>Image</TableCell>
              <TableCell align='center' title='No.Of Transaction'></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {(rowsPerPage > 0
            ? carsInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : carsInfo
          ).map((c, index) => (
            c?<TableRow key={index}  sx={{ '& > *': { fontSize: '1.6rem !important'},"&:hover":{bgcolor:"whitesmoke"},cursor:"pointer"}} >
            <TableCell align='center'> {c.id}</TableCell>
            <TableCell align='center'> {c.name}</TableCell>
            <TableCell align='center' sx={{width:"400px !important"}}>
                <CustomWidthTooltip  title={c.carDesc}  sx={{fontSize:"1.5rem" }}>
                    <Typography sx={{ m: 1  ,fontSize: '1.6rem !important'}}> {truncateDescription( c.carDesc , 20)} </Typography>
                </CustomWidthTooltip >
            </TableCell>
            <TableCell align='center'> {c.type}</TableCell>
            <TableCell align='center'> {c.steering}</TableCell>
            <TableCell align='center'> {c.chairCapacity}</TableCell>
            <TableCell align='center'> {c.gasoline}</TableCell>
            <TableCell align='center'> {c.price}LE</TableCell>
            <TableCell align='center'>{c.reviews.length} </TableCell>
            <TableCell align='center'> {c.transactions.length} </TableCell>
            <TableCell align='center'> 
                <img width={"70px"} src='https://www.4pawsveterinaryhospital.com/wp-content/uploads/sites/239/2022/03/Cat-facts-1240x650.jpg'>
                </img>
              </TableCell>
            <TableCell sx={{padding:"0px"}}>
               <DbCarsUpdate></DbCarsUpdate>
                  {/* {console.log(c.id)} */}
                <Button title='delete' onClick={()=>dispatch(deleteCarAction(c.id))} sx={{color:"var(--clr-e-600)"}}>
                <DeleteIcon/>
                </Button >
            </TableCell>
            </TableRow>:<CircularProgress color="primary" size={40} thickness={4} />
          ))} 
          </TableBody>
        </Table>

             {/* Pagination */}
             <TablePagination sx={{ '& .MuiTablePagination-spacer': {
                  fontSize: '1.5rem !important'
                },
                '& .MuiTypography-body2': {
                  fontSize: '1.5rem !important'
                }}}

              rowsPerPageOptions={[5, 10, 25]} // Change the options as needed
              component="div"
              count={carsInfo.length} // Total number of rows
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
      </TableContainer>


    </div>
  );
}

export default DbCars;
