import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  svg,
  svgPosition,
}) {
  const getPositionStyle = (position) => {
    if (position === "top") {
      return { order: -1 };
    } else if (position === "right") {
      return { marginLeft: "auto" };
    } else if (position === "bottom") {
      return { order: 1 };
    } else if (position === "left") {
      return { marginRight: "auto" };
    } else {
      return {};
    }
  };

  const renderDefaultLayout = () => (
    <>
      <h5 className="card-title align-self-center mb-3">{title}</h5>
      <p className="card-text">{description}</p>
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
          <p>{additionalText}</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div
        className="card mx-auto"
        style={{ width: "430px", height: "450px", padding: "20px" }}
      >
        <div className="card-body d-flex flex-column">
          {titlePosition ||
          imagePosition ||
          additionalTextPosition ||
          descriptionPosition ? (
            <>
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

              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  flexDirection: "column",
                  ...getPositionStyle(imagePosition),
                }}
              >
                <div>
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
                  <p>{additionalText}</p>
                </div>
              </div>
            </>
          ) : (
            renderDefaultLayout()
          )}
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
