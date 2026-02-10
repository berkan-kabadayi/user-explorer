import NavbarBS from "../components/NavbarBS/NavbarBS";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavbarBS />
      <Outlet />
    </>
  );
}

export default RootLayout;
