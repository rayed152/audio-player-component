import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStopCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function Audio({ title, imageSrc, additionalText, decription }) {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div
        className="card mx-auto"
        style={{ width: "400px", height: "450px", padding: "20px" }}
      >
        <div className="card-body d-flex flex-column">
          <h5 className="card-title align-self-center mb-3">{title}</h5>
          <p className="card-text">{decription}</p>

          {/* Image and additional text */}
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <img
                src={imageSrc}
                alt="Rectangle Image"
                style={{ width: "156px", height: "180px" }}
                className="rounded"
              />
            </div>
            <div className="mt-3 mx-2">
              {/* Add margin-top to move the text down */}
              <p>{additionalText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Play Pause Buttons */}
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn btn-primary rounded-circle mx-1"
          style={{ width: "40px", height: "40px" }}
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button
          type="button"
          className="btn border rounded-circle mx-1"
          style={{ width: "40px", height: "40px" }}
        >
          <FontAwesomeIcon icon={faStopCircle} />
        </button>
        {/* Button for choosing folder */}
        <div className="text-center mt-1 mx-4">
          <button type="button" className="btn btn-light">
            Choose Folder to save video
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Audio;
