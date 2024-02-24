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
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarAction, getSpecificCarAction, updateCarAction } from '../../../features/car/carActions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function UpdateModel({carId}) {

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

  const handleOpen =  async () =>{
      const specificCar = await axios.get(`https://65d24788987977636bfc333b.mockapi.io/api/cars/${carId}`)
      setOpen(true);
      setformData(specificCar.data);
  } 
  
  const handleClose = () => setOpen(false);

///hanel update logiv
const [updatedState,setUpdatedState] = useState();
  const [formData ,setformData] = useState({
    id:"",
    name:"",
    type:"",
    steering:"",
    gasoline:"",
    chairCapacity:"",
    price:"",
    carDesc:"",
    image:""
  })

  const dispatch = useDispatch()
  

  //form validation
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  
  const validateValues = (inputValues) => {
    let errors = {};
    if (typeof inputValues.name !== 'string' || !inputValues.name.trim()) {
      errors.name = "Name is required";
    }
    if (typeof inputValues.type !== 'string' || !inputValues.type.trim()) {
      errors.type = "Type is required";
    }

    if (!inputValues.gasoline) {
      errors.gasoline = "gasoline is required";
    }

    if (!inputValues.steering) {
      errors.steering = " Steering Type is required";
    }
    if (!inputValues.chairCapacity || inputValues.chairCapacity <= 0 || inputValues.chairCapacity >= 11) {
      errors.chairCapacity = "Capacity should be between 1 and 10";
    }

    if (!inputValues.price || inputValues.price <= 0) {
      errors.price = "Price is required and must be greater than 0";
    }
    if (!inputValues.carDesc) {
      errors.carDesc = "Description is required ";
    }
    return errors;
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const formErrors = validateValues(formData);
    if (Object.keys(formErrors).length === 0) {
      dispatch(updateCarAction( {id:carId, updatedInfo:updatedState}));
      setOpen(false);
      setformData({
        id: "",
        name: "",
        type: "",
        steering: "",
        gasoline: "",
        chairCapacity: "",
        price: "",
        carDesc: "",
        image: ""
      });
      setSubmitting(true);
    } else {
      setSubmitting(false);
    }

  
  }

  const handleChange = (e)=>{
    if (e.target.name === 'chairCapacity' || e.target.name === 'price') {
      if (e.target.value !== '' && !/^[0-9]+$/.test(e.target.value)) {
        return;
      }
    }
    setformData((oldData)=>({
      ...oldData,[e.target.name]:e.target.value
    }))
    setUpdatedState({...updatedState,[e.target.name]:e.target.value})
    
    const newErrors = validateValues({ ...formData, [e.target.name]:e.target.value });
    // setErrors(newErrors);
    // setErrors({ ...errors, ...newErrors });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: newErrors[e.target.name]
    }));
  };
 
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
          {Object.keys(errors).length === 0 && submitting ? (
            <span className="success">Successfully submitted ✓</span>
          ) : null}

            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography  variant='h5'> Car Name </Typography >
                <TextField
                    fullWidth
                    name="name"
                    value={formData?.name}
                    InputProps={{
                        sx: { fontSize: "1.5rem" } // Adjust the font size as needed
                    }}
                    onChange={handleChange}
                    equired
                />
                   {errors.name &&(
                  <p className="error" style={{color:"red"}}>
                   Name Field is required
                  </p>
                )}

                </Grid>
                <Grid item xs={12} sm={6}>
                   <Typography  variant='h5'> Type </Typography >
                    <TextField
                        fullWidth
                        name="type"
                    value={formData?.type}
                    onChange={handleChange}
                        InputProps={{
                            sx: { fontSize: "1.5rem" } // Adjust the font size as needed
                        }}
                        required
                    />
                        {errors.type &&(
                  <p className="error" style={{color:"red"}}>
                     Type Field is required
                  </p>
                )}
                </Grid>
                <Grid item xs={12} sm={6}>
                   <Typography  variant='h5'> Steering type </Typography >
                <FormControl fullWidth> 
                    <Select name="steering"
                    value={formData?.steering}
                    onChange={handleChange}
                       sx={{
                        fontSize: "1.5rem", // Adjust the font size of the Select component
                        "& .MuiMenuItem-root": {
                          fontSize: "1.5rem", // Adjust the font size of the menu items
                        }
                      }}
                      required
                      >
                        
                        <MenuItem value="manula">Manual</MenuItem>
                        <MenuItem value="automatic">Automatic</MenuItem>
                    </Select> 
                    {errors.steering &&(
                  <p className="error" style={{color:"red"}}>
                      Steering Type  is required 

                  </p>)} 

                </FormControl>                   

                </Grid>

                <Grid item xs={12} sm={6}>
                <FormControl fullWidth sx={{mb:2}}>
                       <Typography  variant='h5'> Gasoline </Typography >
                    <Select
                    name="gasoline"
                    value={formData?.gasoline}
                    onChange={handleChange}
                    sx={{

                        fontSize: "1.5rem", // Adjust the font size of the Select component
                        "& .MuiMenuItem-root": {
                          fontSize: "1.5rem", // Adjust the font size of the menu items
                        }
                      }}
                      required
                    >
                    <MenuItem value="80">80L</MenuItem>
                    <MenuItem value="90">90L</MenuItem>
                    <MenuItem value="92">92L</MenuItem>
                    <MenuItem value="95">95L</MenuItem>
                    <MenuItem value="Gas">Gas</MenuItem>


                    </Select>
                    {errors.gasoline &&(
                  <p className="error" style={{color:"red"}}>
                  Gasoline Field is required 

                  </p>)}
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    
                <FormControl fullWidth >
                    
                    <InputLabel htmlFor="outlined-adornment-capacity">Capacity</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-capacity"
                        name='chairCapacity'
                        value={formData?.chairCapacity}
                        onChange={handleChange}
                        startAdornment={<InputAdornment position="start"> <PersonIcon/> </InputAdornment>}
                        label="capacity"
                        sx={{ fontSize: "1.5rem" }} 
                        required
                    />
                     {errors.chairCapacity &&(
                  <p className="error" style={{color:"red"}}>
                    chairCapacity must not exceed 10  <br></br>
                    chairCapacity is required 

                  </p>)}
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        name='price'
                        startAdornment={<InputAdornment position="start">EGP</InputAdornment>}
                        value={formData?.price}
                        onChange={handleChange}
                        label="Amount"
                        sx={{ fontSize: "1.5rem" }} 
                        required
                    />
                        {errors.price &&(
                      <p className="error" style={{color:"red"}}>
                        Price should be number  <br></br>
                        Price is required
                      </p>
                    )}
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
                    name='carDesc'
                    value={formData?.carDesc}
                    onChange={handleChange}
                    InputProps={{
                        sx: { fontSize: "1.5rem" } // Adjust the font size as needed
                    }}
                    required
                    />
                    
                    {errors.carDesc &&(
                  <p className="error" style={{color:"red"}}>
                    Description is requied 
                 </p>
                )}
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