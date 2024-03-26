import { Button, Container, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {

  const [wishlist, setWishList] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );
  const navigate = useNavigate();
  return (
    <Container py={4} style={{ overflow: "auto" }}>
      <Stack justifyContent={"center"} py={4}>
        <Typography variant="h2" color={"primary"} textAlign={"center"}>
          My WishList <FavoriteIcon fontSize="25px" />
        </Typography>
      </Stack>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align={"center"}>
              <Typography variant="h5">CarImage</Typography>
            </TableCell>
            <TableCell align={"center"}>
              {" "}
              <Typography variant="h5">CarType</Typography>
            </TableCell>
            <TableCell align={"center"}>
              <Typography variant="h5">CarName </Typography>
            </TableCell>
            <TableCell align={"center"}>
              {" "}
              <Typography variant="h5">Price</Typography>
            </TableCell>
            <TableCell align={"center"}>#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wishlist?.map((car) => (
            <TableRow>
              <TableCell align={"center"}>
                <img src={car.image} width={"150px"} height={"50px"} />
              </TableCell>
              <TableCell align={"center"}>
                <Typography variant="h5">{car.type}</Typography>
              </TableCell>
              <TableCell align={"center"}>
                <Typography variant="h5">{car.name}</Typography>
              </TableCell>
              <TableCell align={"center"}>
                <Typography variant="h5">{car.price}</Typography>
              </TableCell>
              <TableCell align="center">
                <Stack direction={"row"} gap={"10px"}>
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/category/${car.id}`)}
                  >
                    Details
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() =>
                      navigate("../payment", { state: { car: car } })
                    }
                  >
                    Rent Now
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );

};

export default Wishlist;
