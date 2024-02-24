import React from 'react';
import ToysIcon from '@mui/icons-material/Toys';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MapIcon from '@mui/icons-material/Map';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import "./landingLayout.css"
import { Button, Grid } from '@mui/material';

const  LandingLayout = () => {
    return (
        <div>
            <div className="landingSection">
                <div className='headerText'>
                    <h1>Experience Luxury On Wheels</h1>
                    <h2>Rent Your Dream Car Today In The United Kingdom</h2>
                    <div className="headerBtns">
                        <div className='rentBtn'>Rent A Car</div>
                        <div className='learnMoreBtn'>Learn More</div>
                    </div>
                </div>
            </div>

            <div className="choosingSection">
                <h6>
                    why choose us ?
                </h6>
                <h5>
                    Why choose MORENT ? 
                </h5>

                <Grid container spacing={2}>
                <Grid item xs={12} md={4} >
                    <div className="choosing">
                        <ToysIcon sx={{color:"var(--clr-m-800)", fontSize:"6.5rem"}}></ToysIcon>
                        <h6>
                        Extnsinve Morent fleet
                        </h6>
                        <p>
                            Select from a wide range of prestigious cars, <br>
                            </br>
                            each meticulously maintained to ensure  <br></br>
                            the ultimate driving experience
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} >
                <div className="choosing">
                    <HandshakeIcon sx={{color:"var(--clr-m-800)", fontSize:"6.5rem"}}></HandshakeIcon>
                    <h6>
                   Flexible Rental Options
                    </h6>
                    <p>
                        choose from daily , weekly  or long-term rentals<br>
                        </br>
                        tailored to your specific needs and prefrences
                    </p>
                </div>
                </Grid>
                <Grid item xs={12} md={4} >
                <div className="choosing">
                    <MapIcon sx={{color:"var(--clr-m-800)", fontSize:"6.5rem"}}></MapIcon>
                    <h6>
                  convenient locations
                    </h6>
                    <p>
                       we have rental hubs in major cities across the  <br>
                        </br>
                        Egypt making it convenient for you to pick up and  <br></br>
                        return your rental car
                    </p>
                </div>
                </Grid>
            </Grid>
            </div>
            {/* second section */}
            <div className="choosingSection">
                <h6>
                    Most popular Among our Clients
                </h6>
                <h5>
                  Discover our most popular Rental Cars!
                </h5>

                <Grid container spacing={2}>
                    {/* looping on the data */}
                <Grid item xs={12} md={4} >
                    {/* //set data of cards */}
                </Grid>
                
                </Grid>
            </div>

            <div className="choosingSection">
                <h6>
                   How to rent ?
                </h6>
                <h5>
                  Rent Your dream car in 3 simple steps 
                </h5>

                <Grid container spacing={2}>
                    {/* looping on the data */}
                <Grid item xs={12} md={4} >
                <div className="choosing stepsSection">
                        <DirectionsCarFilledIcon sx={{color:"var(--clr-m-800)", fontSize:"6.5rem"}}></DirectionsCarFilledIcon>
                        <h6> 
                        <span className='steps'> Step 1:</span>
                        Extnsinve Morent fleet
                        </h6>
                       
                    </div>
                </Grid>
                <Grid item xs={12} md={4} >
                <div className="choosing stepsSection">
                        <CalendarMonthIcon sx={{color:"var(--clr-m-800)", fontSize:"6.5rem"}}></CalendarMonthIcon>
                        <h6> 
                        <span className='steps'> Step 2:</span>
                            Select Rental Dates and Location
                        </h6>
                       
                    </div>
                </Grid>
                <Grid item xs={12} md={4} >
                <div className="choosing stepsSection">
                        <AssignmentTurnedInIcon sx={{color:"var(--clr-m-800)", fontSize:"6.5rem"}}></AssignmentTurnedInIcon>
                        <h6> 
                        <span className='steps'> Step 3:</span>
                       Reserve and Confirm
                        </h6>
                       
                    </div>
                </Grid>
                
                </Grid>
            </div>
            <div className="choosingSection joining">
                <Grid container spacing={2} justifyContent="center"
        alignItems="center">
                    {/* looping on the data */}
                <Grid item xs={12} md={6} >
                <div className="joiningSection">
                        <h6>
                            Join us Now 
                        </h6>
                        <h5>
                            Get Your Comfortable car 
                        </h5>
                        Complete the login process to join and rent our cars
                       
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                       <button className='getStarted'>
                       Get Started
                       </button>
                </Grid>
                
                </Grid>
            </div>
        </div>
    );
}

export default LandingLayout;
