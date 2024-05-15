import React from "react";

const SubscriptionPlans = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>Take it to next level with our plans!</h2>
        <p>
          View your plan information or switch plans according to your needs
        </p>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-outline-primary">
            Monthly
          </button>
          <button type="button" className="btn btn-outline-primary">
            Annually
          </button>
        </div>
      </div>
      {/* Forever Free */}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Forever Free</h5>
              <h6 className="card-subtitle mb-2 text-muted">$0 Free</h6>
              <p className="card-text">
                Perfect if you're just getting started with your podcast
                promotion.
              </p>
              <ul className="list-unstyled">
                <li>6 Videos per month</li>
                <li>2 Transcription</li>
                <li>2 Customize design</li>
                <li>2 HD export</li>
                <li>With watermarks</li>
              </ul>
              <button className="btn btn-primary">Start for Free</button>
            </div>
          </div>
        </div>

        {/* Professional */}
        <div className="col-md-4">
          <div
            className="card border-primary position-relative"
            style={{ borderRadius: "16px" }}
          >
            <div className="card-body">
              <h5 className="card-title">Professional</h5>
              <p className="card-text w-6">
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

        {/* Advanced */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Advanced</h5>
              <h6 className="card-subtitle mb-2 text-muted">$19.99/month</h6>
              <p className="card-text">
                Completely automate the promotion of any podcast.
              </p>
              <ul className="list-unstyled">
                <li>Unlimited videos</li>
                <li>Unlimited transcription</li>
                <li>Unlimited Customize design</li>
                <li>Unlimited HD export</li>
                <li>Without watermarks</li>
              </ul>
              <button className="btn btn-primary">Talk to Sales</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
