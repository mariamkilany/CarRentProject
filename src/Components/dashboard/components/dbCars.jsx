import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DbCarsAdd from './dbCarsAdd';




function DbCars() {


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

      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow >
              <TableCell align='center' fontWeight="700" >Id</TableCell>
              <TableCell align='center' >Car Name</TableCell>
              <TableCell align='center' >Type</TableCell>
              <TableCell align='center' >Steering </TableCell>
              <TableCell align='center'>Capacity</TableCell>
              <TableCell align='center'>Gasoline</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Reviews</TableCell>
              <TableCell align='center' title='No.Of Transaction'>No.Of Trans..</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

          <TableRow  >
                <TableCell align='center'> 65151</TableCell>
                <TableCell align='center'> toyota</TableCell>
                <TableCell align='center'> Sport</TableCell>
                <TableCell align='center'> Automatic</TableCell>
                <TableCell align='center'> 2</TableCell>
                <TableCell align='center'> 95L</TableCell>
                <TableCell align='center'> 6000LE</TableCell>
                <TableCell align='center'> 5 </TableCell>
                <TableCell align='center'> 10 </TableCell>

                <TableCell sx={{padding:"0px"}}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
          </TableRow>

          <TableRow  >
                <TableCell align='center'> 65151</TableCell>
                <TableCell align='center'> toyota</TableCell>
                <TableCell align='center'> Sport</TableCell>
                <TableCell align='center'> Automatic</TableCell>
                <TableCell align='center'> 2</TableCell>
                <TableCell align='center'> 95L</TableCell>
                <TableCell align='center'> 6000LE</TableCell>
                <TableCell align='center'> 5 </TableCell>
                <TableCell align='center'> 10 </TableCell>

                <TableCell sx={{padding:"0px"}}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
          </TableRow>

          <TableRow  >
                <TableCell align='center'> 65151</TableCell>
                <TableCell align='center'> toyota</TableCell>
                <TableCell align='center'> Sport</TableCell>
                <TableCell align='center'> Automatic</TableCell>
                <TableCell align='center'> 2</TableCell>
                <TableCell align='center'> 95L</TableCell>
                <TableCell align='center'> 6000LE</TableCell>
                <TableCell align='center'> 5 </TableCell>
                <TableCell align='center'> 10 </TableCell>

                <TableCell sx={{padding:"0px"}}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
          </TableRow>

          <TableRow  >
                <TableCell align='center'> 65151</TableCell>
                <TableCell align='center'> toyota</TableCell>
                <TableCell align='center'> Sport</TableCell>
                <TableCell align='center'> Automatic</TableCell>
                <TableCell align='center'> 2</TableCell>
                <TableCell align='center'> 95L</TableCell>
                <TableCell align='center'> 6000LE</TableCell>
                <TableCell align='center'> 5 </TableCell>
                <TableCell align='center'> 10 </TableCell>

                <TableCell sx={{padding:"0px"}}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
          </TableRow>
                
          </TableBody>
        </Table>
      </TableContainer>


    </div>
  );
}

export default DbCars;
