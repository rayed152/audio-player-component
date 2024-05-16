import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>Take it to next level with our plans!</h2>
        <p>
          View your plan information or switch plans according to your needs
        </p>
        <div
          className="btn-group"
          role="group"
          style={{
            backgroundColor: "#F7F7F7",
            borderRadius: "8px",
            overflow: "hidden",
            padding: "5px",
          }}
        >
          <Button
            onClick={() => handlePlanChange("Monthly")}
            style={{
              backgroundColor: selectedPlan === "Monthly" ? "white" : "inherit",
              borderRadius: selectedPlan === "Monthly" ? "8px" : "0",
              color: selectedPlan === "Monthly" ? "#2970FF" : "#818181",
              border: "none",
            }}
          >
            Monthly
          </Button>
          <Button
            onClick={() => handlePlanChange("Annually")}
            style={{
              backgroundColor:
                selectedPlan === "Annually" ? "white" : "inherit",
              borderRadius: selectedPlan === "Annually" ? "8px" : "0",
              color: selectedPlan === "Annually" ? "#2970FF" : "#818181",
              border: "none",
            }}
          >
            Annually
          </Button>
        </div>
      </div>

      <div className="row" style={{ paddingTop: "50px" }}>
        {/* Forever Free */}
        <div className="col-md-4">
          <div
            className="position-relative"
            style={{
              borderRadius: "16px",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            {/* card */}
            <div
              className="card border-secondary position-relative"
              style={{
                borderRadius: "16px 16px 16px 16px",
                height: "",
              }}
            >
              <div className="card-body " style={{}}>
                <h5 className="card-title text-primary">Forever</h5>
                <p className="card-text" style={{ width: "80%" }}>
                  Take your podcast promotion to the next level with more
                  features.
                </p>
                <h6 className="card-subtitle mb-2 text-muted">$7.99/month</h6>
                <button className="btn btn-primary">Start for Free</button>

                <ul className="list-unstyled">
                  <li>12 Videos per month</li>
                  <li>8 Transcription</li>
                  <li>12 Customize design</li>
                  <li>12 HD export</li>
                  <li>Without watermarks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Professional */}
        <div className="col-md-4">
          <div className="position-relative" style={{ borderRadius: "16px" }}>
            {/* Most popular */}
            <div
              className="bg-primary"
              style={{ borderRadius: "16px 16px 0px 0px", height: "40px" }}
            >
              <div
                className="position-absolute w-100 text-center text-white"
                style={{ top: "4px" }}
              >
                Most Popular
              </div>
            </div>
            {/* card */}
            <div
              className="card border-primary position-relative"
              style={{
                borderRadius: "16px 16px 16px 16px",
                borderWidth: "3px",
                bottom: "13px",
              }}
            >
              <div className="card-body " style={{}}>
                <h5 className="card-title text-primary">Professional</h5>
                <p className="card-text" style={{ width: "80%" }}>
                  Take your podcast promotion to the next level with more
                  features.
                </p>
                <h6 className="card-subtitle mb-2 text-muted">$7.99/month</h6>
                <button className="btn btn-primary">Start for Free</button>

                <ul className="list-unstyled">
                  <li>12 Videos per month</li>
                  <li>8 Transcription</li>
                  <li>12 Customize design</li>
                  <li>12 HD export</li>
                  <li>Without watermarks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced */}
        <div className="col-md-4">
          <div
            className="position-relative"
            style={{ borderRadius: "16px", paddingTop: "30px" }}
          >
            {/* card */}
            <div
              className="card border-secondary position-relative"
              style={{
                borderRadius: "16px 16px 16px 16px",
              }}
            >
              <div className="card-body " style={{}}>
                <h5 className="card-title text-primary">Advance</h5>
                <p className="card-text" style={{ width: "80%" }}>
                  Take your podcast promotion to the next level with more
                  features.
                </p>
                <h6 className="card-subtitle mb-2 text-muted">$7.99/month</h6>
                <button className="btn btn-primary">Start for Free</button>

                <ul className="list-unstyled">
                  <li>12 Videos per month</li>
                  <li>8 Transcription</li>
                  <li>12 Customize design</li>
                  <li>12 HD export</li>
                  <li>Without watermarks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
