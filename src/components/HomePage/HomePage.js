import React from "react";

function HomePage() {
  const quote =
    "The first step towards getting somewhere is to decide that you are not going to stay where you are.";

  const quoteStyle = {
    color: "navy",
    textAlign: "center",
    fontSize: "35px",
    marginTop: "100px",
    textShadow: "2px 2px 4px rgba(0 , 0 , 0, 0.5)",
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="row">
        <div
          className="col-md-12 d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div>
            <h1
              style={{
                color: "#001f3f",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Welcome to the Budgeting App
            </h1>
            <p style={quoteStyle}>{quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
