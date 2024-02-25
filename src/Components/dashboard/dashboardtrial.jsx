import React from "react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CarRentalIcon from "@mui/icons-material/CarRental";
import PeopleIcon from "@mui/icons-material/People";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RateReviewIcon from "@mui/icons-material/RateReview";
import styles from "./dashboardtrial.module.css";
const Dashboardtrial = () => {
  return (
    <div>
      <div className={styles.table_responsive}>
        <table className={`${styles.table} table table-hover table-nowrap`}>
          <thead className={styles.thead_light}>
            <tr>
              <td style={{ paddingRight: "15px" }}>Id</td>
              <td>Car Name</td>
              <td>Type</td>
              <td>Steering </td>
              <td>Capacity</td>
              <td>Gasoline</td>
              <td>Price</td>
              <td>Reviews</td>
              <td title="No.Of Transaction">No.Of Trans..</td>
              <td style={{ width: "100px" }} title="No.Of Transaction">
                Description
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.CarInfo}>
                  <LocalOfferIcon sx={{ fontSize: "15px" }}></LocalOfferIcon>
                  <span className={styles.carData}>152364</span>
                </div>
              </td>
              <td>
                <div className={styles.CarInfo}>
                  <img
                    className={styles.carImage}
                    alt="..."
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  />
                  <span className={styles.carData}>Mazda 3</span>
                </div>
              </td>
              <td>
                <div className={styles.CarInfo}>
                  <span className={styles.carData}>Sport</span>
                </div>
              </td>
              <td>
                <div className={styles.CarInfo}>
                  <CarRentalIcon></CarRentalIcon>
                  <span className={styles.carData}>Automatic</span>
                </div>
              </td>
              <td>
                <div className={styles.CarInfo}>
                  <PeopleIcon></PeopleIcon>
                  <span className={styles.carData}>2</span>
                </div>
              </td>
              <td>
                <div className={styles.CarInfo}>
                  <LocalGasStationIcon></LocalGasStationIcon>
                  <span className={styles.carData}>80 L</span>
                </div>
              </td>
              <td>
                <div className={styles.CarInfo}>
                  <PriceChangeIcon></PriceChangeIcon>
                  <span className={styles.carData}>50000 lE</span>
                </div>
              </td>
              <td>
                <div className={styles.CarInfo}>
                  <RateReviewIcon></RateReviewIcon>
                  <span className={styles.carData}>5</span>
                </div>
              </td>
              <td>
                <div className={styles.CarInfo}>
                  <RateReviewIcon></RateReviewIcon>
                  <span className={styles.carData}>1,54</span>
                </div>
              </td>

              <td>
                <div className={styles.CarInfo}>
                  <span className={styles.carData}></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboardtrial;
