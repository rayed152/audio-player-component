import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import svg from "../assets/Group.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStopCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function Audio({
  title,
  imageSrc,
  additionalText,
  description,
  titlePosition,
  imagePosition,
  additionalTextPosition,
  descriptionPosition,
  svgPosition,
}) {
  const getPositionStyle = (position) => {
    if (position === "top") {
      return { order: -1 };
    } else if (position === "right") {
      return { flexDirection: "row-reverse" };
    } else if (position === "bottom") {
      return { order: 1 };
    } else if (position === "left") {
      return { flexDirection: "row" };
    } else {
      return {};
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div
        className="card mx-auto"
        style={{
          width: "430px",
          height: "450px",
          padding: "20px",
          backgroundImage: "linear-gradient(to top, #ff8a00, #da1b60)",
        }}
      >
        <div className="card-body d-flex flex-column">
          <h5
            className="card-title align-self-center mb-3"
            style={getPositionStyle(titlePosition)}
          >
            {title}
          </h5>
          <p
            className="card-text"
            style={getPositionStyle(descriptionPosition)}
          >
            {description}
          </p>

          {/* Image and additional text */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={getPositionStyle(imagePosition)}
          >
            <div className="mt-3 mx-2">
              <img
                src={imageSrc}
                alt="Rectangle Image"
                style={{ width: "156px", height: "180px" }}
                className="rounded"
              />
            </div>
            <div
              className="mt-3 mx-2"
              style={getPositionStyle(additionalTextPosition)}
            >
              {/* Add margin-top to move the text down */}
              <p>{additionalText}</p>
            </div>
          </div>
          {/* svg here */}
          <div
            className="d-flex mx-auto"
            style={{
              ...getPositionStyle(svgPosition),
              bottom: "20px",
              left: "20px",
              width: "calc(100% - 40px)", // Adjusted width to account for paddings
              height: "auto",
            }}
          >
            <img src={svg} alt="logo" style={{ maxWidth: "100%" }} />
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
