import React, { useState } from "react";
import Topbar from "../Topbar";
import SideMenu from "../SideMenu";

export default function Navigation({ setBackground }) {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div>
      <Topbar setOpenSideMenu={setOpenSideMenu} />
      <SideMenu
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
        setBackground={setBackground}
      />
    </div>
  );
}
