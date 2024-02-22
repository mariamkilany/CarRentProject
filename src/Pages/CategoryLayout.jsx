import React from "react";
import { Outlet } from "react-router-dom";
import Asidebar from "../Components/asidebar/asidebar";
import { Container, Stack } from "@mui/material";

export default function CategoryLayout() {
  return (
    <>
      <Stack direction={"row"}>
        <Asidebar />
        <Outlet />
      </Stack>
    </>
  );
}
