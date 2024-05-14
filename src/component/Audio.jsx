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
  titlePositionX,
  titlePositionY,
  descriptionPositionY,
  descriptionPositionX,
  imgPositionX,
  imgPositionY,
  additionalTextPositionX,
  additionalTextPositionY,
  svgPositionX,
  svgPositionY,
}) {
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
            style={{
              position: "relative",
              top: titlePositionY + "px",
              left: titlePositionX + "px",
            }}
          >
            {title}
          </h5>
          <p
            className="card-text"
            style={{
              position: "relative",
              top: descriptionPositionY + "px",
              left: descriptionPositionX + "px",
            }}
          >
            {description}
          </p>

          <div className="d-flex justify-content-center align-items-center">
            <div
              className="mt-3 mx-2"
              style={{
                position: "relative",
                top: imgPositionY + "px",
                left: imgPositionX + "px",
              }}
            >
              <img
                src={imageSrc}
                alt="Rectangle Image"
                style={{ width: "156px", height: "180px" }}
                className="rounded"
              />
            </div>
            <div
              className="mt-3 mx-2"
              style={{
                position: "relative",
                top: additionalTextPositionY + "px",
                left: additionalTextPositionX + "px",
              }}
            >
              <p>{additionalText}</p>
            </div>
          </div>

          <div
            className="d-flex mx-auto"
            style={{
              width: "calc(100% - 40px)",
              position: "relative",
              top: svgPositionY + "px",
              left: svgPositionX + "px",
            }}
          >
            <img src={svg} alt="logo" style={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>

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
