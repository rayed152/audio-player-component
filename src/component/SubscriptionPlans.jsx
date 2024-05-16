import React from "react";

const SubscriptionPlans = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>Take it to next level with our plans!</h2>
        <p>
          View your plan information or switch plans according to your needs
        </p>
        <div
          className="btn-group"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          role="group"
        >
          <button type="button" className="btn">
            Monthly
          </button>
          <button type="button" className="btn ">
            Annually
          </button>
        </div>
      </div>

      <div className="row">
        {/* Forever Free */}
        <div className="col-md-4">
          <div className="position-relative" style={{ borderRadius: "16px" }}>
            {/* Most popular */}

            {/* card */}
            <div
              className="card border-secondary position-relative"
              style={{
                borderRadius: "16px 16px 16px 16px",
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
              className="bg-primary w-100"
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
                top: "-15px",
                borderWidth: "3px",
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
          <div className="position-relative" style={{ borderRadius: "16px" }}>
            {/* Most popular */}

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
