import { useState } from "react";
import 'animate.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart sales 2022",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <div className="header d-flex justify-content-between  animate__fadeInUp">
        <h1>Dashboard</h1>
        <form className="d-flex align-items-center">
          <i className="bi bi-bell mx-3"></i>
          <input className="search form-control" placeholder="Search"></input>
        </form>
      </div>
      <hr />
      <div className="body-content">
        <Line options={options} data={data} />;
        <button className="btn btn-primary mt-4">Download PDF</button>
      </div>
    </>
  );
};
export default Dashboard;
