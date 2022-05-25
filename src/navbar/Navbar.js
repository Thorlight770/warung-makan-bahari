import { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import Menu from "../menu/Menu";
import Table from "../table/Table";
import "react-calendar/dist/Calendar.css";
import "../css/navbarcss.css";
import { Calendar } from "react-calendar";

const Navbar = (props) => {
  const { logout, menu, addDataMenu, deleteDataMenu, updateDataMenu, addDataTable, table } = props;
  const [navigation, setNavigation] = useState("dashboard");

  let page = "";
  if (navigation === "menu") {
    page = <Menu menu={menu} addDataMenu={addDataMenu} deleteDataMenu={deleteDataMenu} updateDataMenu={updateDataMenu}/>;
  } else if (navigation === "table") {
    page = <Table table={table} addDataTable={addDataTable}/>;
  } else if (navigation === "dashboard") {
    page = <Dashboard />;
  }

  return (
    <div className="container-fluid px-5 py-3 d-flex">
      <div className="side-left-nav px-3 py-3 col-2">
        <div className="logo px-3">
          <h4 className="px-3">WarBaharI</h4>
        </div>
        <div className="navigation pt-4">
          <ul>
            <li className="list" onClick={() => setNavigation('dashboard')}>Dashboard</li>
            <li className="list" onClick={() => setNavigation('menu')}>Menu</li>
            <li className="list" onClick={() => setNavigation('table')}>Table</li>
            <li className="list">Chart</li>
            <li className="list">About Us</li>
          </ul>
        </div>
        <div className="logout-nav px-2 text-center justify-content-center">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_tcwozhzv/MarketingCampaignsViralMethods.json"
            background="transparent"
            speed="1"
            style={{ width: "200px", height: "200px" }}
          ></lottie-player>
          <button className="btn btn-danger" onClick={() => logout(false)}>Logout</button>
        </div>
      </div>
      <div className="content col-7 px-4 d-flex flex-column">{page}</div>
      <div className="side-right-nav col-3 d-flex flex-column justify-content-betweens align-items-center">
        <div className="header text-center">
          <h4 className="my-2">Profil</h4>
          <i className="bi bi-person"></i>
          <p className="mt-2">Esther Howard</p>
        </div>
        <div className="body">
          <div className="calendar">
            <Calendar className="px-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
