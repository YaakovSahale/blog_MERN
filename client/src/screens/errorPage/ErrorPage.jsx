import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <h1 style={{ flex: 3, alignSelf: "center", textAlign: "center" }}>
        Sorry, there is no data to display.
      </h1>
      <Sidebar />
    </div>
  );
};

export default ErrorPage;
