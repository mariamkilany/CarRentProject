import { TablePagination, Button, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  getAllUsersAction,
  deleteUsersAction,
} from "../../../features/car/usersAction";
import styles from "../dashboardtrial.module.css";

function DbCustomers() {
  const usersInfo = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <br />
      <br />
      <div className={styles.table_responsive}>
        <table className={styles.table}>
          <thead className={styles.thead_light}>
            <tr>
              <td style={{ paddingRight: "15px" }}>Id</td>
              <td> UserName</td>
              <td>UserEmail</td>
              <td>JobTitle </td>
              <td title="No.Of Transaction">No.Of Trans..</td>
            </tr>
          </thead>
          <tbody>
            {(rowsPerPage > 0
              ? usersInfo.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : usersInfo
            ).map((c, index) =>
              c ? (
                <tr>
                  <td>
                    <div className={styles.CarInfo}>
                      <LocalOfferIcon
                        sx={{ fontSize: "20px", color: "#1A4393" }}
                      ></LocalOfferIcon>
                      <span className={styles.carData}>{c.id}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.CarInfo}>
                      {c.avatar ? (
                        <img
                          className={styles.carImage}
                          alt="..."
                          src={c.avatar}
                        />
                      ) : (
                        <AccountCircleOutlinedIcon
                          sx={{ fontSize: "20px" }}
                        ></AccountCircleOutlinedIcon>
                      )}
                      <span className={styles.carData}>{c.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.CarInfo}>
                      <MoveToInboxIcon
                        sx={{ fontSize: "20px" }}
                      ></MoveToInboxIcon>
                      <span className={styles.carData}>{c.email}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.CarInfo}>
                      <WorkOutlinedIcon
                        sx={{ fontSize: "20px" }}
                      ></WorkOutlinedIcon>
                      <span
                        className={styles.carData}
                        style={{ fontSize: "1.3rem" }}
                      >
                        {c.jobTitle}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.CarInfo}>
                      <span className={styles.carData}>{/* {c} */}</span>
                    </div>
                  </td>
                  <td>
                    <Button
                      title="delete"
                      onClick={() => dispatch(deleteUsersAction(c.id))}
                      sx={{ color: "var(--clr-e-600)" }}
                    >
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ) : (
                <CircularProgress color="primary" size={40} thickness={4} />
              )
            )}
          </tbody>
        </table>

        <TablePagination
          sx={{
            "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar": {
              fontSize: "1.5rem !important",
              width: "100% !important",
            },
            "& .MuiTypography-body2": {
              fontSize: "1.5rem !important",
            },
          }}
          rowsPerPageOptions={[5, 10, 25]} // Change the options as needed
          component="div"
          count={usersInfo.length} // Total number of rows
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

export default DbCustomers;
