import React from "react";
import BillingInfoCard from "../Components/BillingInfo/billingInfoCard";
import { Box, Stack } from "@mui/material";
import RentalInfopayment from "../Components/RentalInfo/rentalInfopayment";
import RentalSummaryCard from "../Components/RentalSummary/rentalSummaryCard";
import ConfirmationCard from "../Components/ConfirmationCard/confirmationCard";

const Payment = () => {
  const stylecontainer = {
    backgroundColor: "#efefefef",
    width: "1000px",
    borderRadius: "25px",
    padding: "40px",
    margin: "15px 20px ",
  };
  return (
    <>
      <Box sx={stylecontainer}>
        <Box
          sx={{
            margin: "40px auto ",
            width: "600px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <BillingInfoCard />
        </Box>
        <Box
          sx={{
            margin: "40px auto ",
            width: "700px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <RentalInfopayment></RentalInfopayment>
        </Box>
        <Box
          sx={{
            margin: "40px auto ",
            width: "700px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <RentalSummaryCard />
        </Box>


		<Box
          sx={{
            margin: "40px auto ",
            width: "900px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <ConfirmationCard />
        </Box>
      </Box>

    </>
  );
};

export default Payment;
