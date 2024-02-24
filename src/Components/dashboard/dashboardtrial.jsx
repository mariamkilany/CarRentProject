import React from 'react';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CarRentalIcon from '@mui/icons-material/CarRental';
import PeopleIcon from '@mui/icons-material/People';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReviewsIcon from '@mui/icons-material/Reviews';
import './dashboardtrial.css'
const Dashboardtrial = () => {
    return (
        <div>
            <div className="table-responsive">
            <table className="table table-hover table-nowrap">
                <thead className="thead-light">
                <tr>
                <td style={{paddingRight:"15px"}} >Id</td>
                <td >Car Name</td>
               
                <td >Type</td>
                <td >Steering </td>
                <td>Capacity</td>
                <td>Gasoline</td>
                <td>Price</td>
                <td>Reviews</td>
                <td title='No.Of Transaction'>No.Of Trans..</td>
                <td style={{width:"100px"}} title='No.Of Transaction'>Description</td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >
                            <div className='CarInfo'>
                            <LocalOfferIcon sx={{fontSize:"15px"}}></LocalOfferIcon>
                            <span className='carData' >
                            
                                    152364
                            </span>
                            </div>
                        </td>

                      <td >
                            <div className='CarInfo'>
                            <img className="carImage" alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                            <span className='carData'>
                                    Mazda 3 
                            </span>
                            </div>
                        </td>
                    <td >
                         <div className='CarInfo'>
                         <span className='carData'>
                                Sport
                            </span>
                         </div>
                        </td> 
                        <td >
                            <div className='CarInfo'>
                            <CarRentalIcon></CarRentalIcon>
                        <span className='carData'>
                            Automatic
                        </span>
                            </div>
                    </td>
                        <td >
                        <div className='CarInfo'>
                        <PeopleIcon></PeopleIcon>
                            <span className='carData'>
                            2
                            </span>
                        </div>
                        </td>
                        <td >
                            <div className='CarInfo'>
                            <LocalGasStationIcon></LocalGasStationIcon>
                            <span className='carData'>
                            80 L
                            </span>
                            </div>
                        </td>
                    <td >
                        <div className='CarInfo'>
                        <PriceChangeIcon></PriceChangeIcon>
                            <span className='carData'>
                            50000 lE
                            </span>
                        </div>
                        </td>
                        <td >
                           <div  className='CarInfo'>
                           <RateReviewIcon></RateReviewIcon>
                                <span className='carData'>
                                5 
                                </span>
                           </div>
                            </td>
                    <td >
                        <div className='CarInfo'>
                        <RateReviewIcon></RateReviewIcon>
                        <span className='carData'>
                        1,54
                        </span>
                        </div>
                    </td>

                    <td >
                      <div className='CarInfo'>
                      {/* <ReviewsIcon></ReviewsIcon> */}
                            <span className='carData'>
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis optio itaque qui nemo? Consequatur alias vitae perferendis ullam deleniti odio asperiores voluptate ad, iusto aut tempora placeat et? Odio, minima. */}
                            </span>
                      
                      </div>
                      </td>
                    </tr>
                   
                </tbody> 
  </table>
            </div>

                  
        </div>
    );
}

export default Dashboardtrial;


