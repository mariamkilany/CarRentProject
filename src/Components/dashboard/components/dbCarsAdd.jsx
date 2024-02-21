import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import { FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField } from '@mui/material';
import { useTheme } from '@emotion/react';



export default function BasicModal() {

    const theme = useTheme();
    const style = (theme) => ({
    
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        height:"98%",
        bgcolor: 'background.paper',
        boxShadow: 24,
       
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
                   
      <Button onClick={handleOpen} 
        sx={{backgroundColor:"var(--clr-m)", 
            color:"white",
            "&:hover":{color:"var(--clr-m)",
            backgroundColor:"white",
            border:"1px solid var(--clr-m)"}}} >
                
        <AddIcon /> Add New
       </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
     sx={{ overflowY: 'auto'}}
     >
        <Box sx={style(theme)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Car
            <hr></hr>
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <label> Car Name </label>
                <TextField
                    fullWidth
                    name="carName"
                    
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <label> Type </label>
                    <TextField
                        fullWidth
                        name="type"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                <label> Steering type </label>
                <FormControl fullWidth> 
                    <Select name="steering">
                        <MenuItem value="manula">Manual</MenuItem>
                        <MenuItem value="automatic">Automatic</MenuItem>
                    </Select>  
                </FormControl>                   

                </Grid>

                <Grid item xs={12} sm={6}>
                <FormControl fullWidth sx={{mb:2}}>
                    <label> Gasoline </label>
                    <Select
                    name="gasoline"
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
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <label>
                        Description
                    </label>
                    <TextField fullWidth
                    id="filled-multiline-static"
                    multiline
                    rows={4}
                    />
                </Grid>

      
            </Grid>
            <br></br> 
            <hr></hr>
            
           <Stack direction="row"  justifyContent="flex-end" sx={{marginTop:"10px"}}>
                <Button type="submit" variant="contained"  sx={{backgroundColor:"var(--clr-m)", 
                        color:"white",padding:"8px 30px" , width:"20%", marginRight:"25px",
                        "&:hover":{color:"var(--clr-m)",
                        backgroundColor:"white",
                        border:"1px solid var(--clr-m)"}}}>
                            Add
                    </Button>

                    <Button onClick={handleClose} aria-label="close"  sx={{backgroundColor:"var(--clr-e-600)", 
                            color:"white",padding:"8px 30px",width:"20%",
                            "&:hover":{color:"var(--clr-e-600)",
                            backgroundColor:"white",
                            border:"1px solid var(--clr-e-600)"}}}> 
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