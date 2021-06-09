import React from "react";

const Err = () => {
  const styles = {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={styles} className="container">
      <h1 style={{ fontSize: "4vw" }}>404</h1>
      <h2>Error, page not found</h2>
    </div>
  );
};

export default Err;
