import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField } from '@mui/material';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/material/styles';



export default function UpdateModel() {

    const theme = useTheme();
    const style = (theme) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        height:"98%",
        bgcolor: 'background.paper',
  
       
        p: 5,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height:"80%",
            overflowY: 'auto'
        },
        [theme.breakpoints.down('md')]: {
            width: '80%',
            height:"90%",
            overflowY: 'auto'
        }
    });

    
    // upload image button
    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
                   
      <Button onClick={handleOpen}  title='Edit' >
                
        <EditIcon />
       </Button >

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
     sx={{ overflowY: 'auto'}}
     >
        <Box sx={style(theme)}>
          <Typography id="modal-modal-title" variant="h4" component="h2"
          sx={{color:"var(--clr-m)", fontWeight:"bold"}}>
            Update Car Info
            <hr></hr>
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography  variant='h5'> Car Name </Typography >
                <TextField
                    fullWidth
                    name="carName"
                    InputProps={{
                        sx: { fontSize: "1.5rem" } // Adjust the font size as needed
                    }}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                   <Typography  variant='h5'> Type </Typography >
                    <TextField
                        fullWidth
                        name="type"
                        InputProps={{
                            sx: { fontSize: "1.5rem" } // Adjust the font size as needed
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                   <Typography  variant='h5'> Steering type </Typography >
                <FormControl fullWidth> 
                    <Select name="steering"
                       sx={{
                        fontSize: "1.5rem", // Adjust the font size of the Select component
                        "& .MuiMenuItem-root": {
                          fontSize: "1.5rem", // Adjust the font size of the menu items
                        }
                      }} >
                        
                        <MenuItem value="manula">Manual</MenuItem>
                        <MenuItem value="automatic">Automatic</MenuItem>
                    </Select>  
                </FormControl>                   

                </Grid>

                <Grid item xs={12} sm={6}>
                <FormControl fullWidth sx={{mb:2}}>
                       <Typography  variant='h5'> Gasoline </Typography >
                    <Select
                    name="gasoline"
                    sx={{
                        fontSize: "1.5rem", // Adjust the font size of the Select component
                        "& .MuiMenuItem-root": {
                          fontSize: "1.5rem", // Adjust the font size of the menu items
                        }
                      }}
                    >
                    <MenuItem value="petrol">80L</MenuItem>
                    <MenuItem value="diesel">90L</MenuItem>
                    <MenuItem value="electric">92L</MenuItem>
                    <MenuItem value="electric">95L</MenuItem>
                    <MenuItem value="electric">Gas</MenuItem>


                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    
                <FormControl fullWidth >
                    
                    <InputLabel htmlFor="outlined-adornment-capacity">Capacity</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-capacity"
                        startAdornment={<InputAdornment position="start"> <PersonIcon/> </InputAdornment>}
                        label="capacity"
                        sx={{ fontSize: "1.5rem" }} 
                    />
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                        label="Amount"
                        sx={{ fontSize: "1.5rem" }} 
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                       <Typography  variant='h5'>
                        Description
                    </Typography >
                    <TextField fullWidth
                    id="filled-multiline-static"
                    multiline
                    rows={4}
                    InputProps={{
                        sx: { fontSize: "1.5rem" } // Adjust the font size as needed
                    }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Image
                        <VisuallyHiddenInput type="file" />
                      </Button>
                  </Grid>

      
            </Grid>
            <br></br> 
            <hr></hr>
            
           <Stack direction="row"  justifyContent="flex-end" sx={{marginTop:"10px"}}>
                <Button type="submit" variant="contained"  sx={{backgroundColor:"var(--clr-m)", 
                        color:"white",padding:"8px 30px" , width:"20%", marginRight:"25px",
                        "&:hover":{color:"white",
                        backgroundColor:"var(--clr-m-900)",
                        border:"1px solid var(--clr-m)"},
                        fontSize:"1.5rem"}}>
                            Update
                    </Button>

                    <Button onClick={handleClose} aria-label="close"  sx={{backgroundColor:"var(--clr-e-600)", 
                            color:"white",padding:"8px 30px",width:"20%",
                            "&:hover":{color:"white",
                            backgroundColor:"var(--clr-e-800)",
                            border:"1px solid var(--clr-e-800)"},
                            fontSize:"1.5rem"}}> 
                             Cancel
                    </Button>
           </Stack>

            </form>

          </Typography>

        </Box>
      </Modal>
    </div>
  );
}