import React, { useState, useEffect } from "react";
import { DeleteIcon } from "../icons";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const TopAlert = () => (
  <BrowserOnly>
    {() => {
      const [closed, setClosed] = useState<boolean>(false);

      useEffect(() => {
        const alertState = JSON.parse(localStorage.getItem("topAlert"));
        if (alertState && alertState.closed) {
          setClosed(true);
        }
      }, []);

      const handleClose = () => {
        setClosed(true);
        localStorage.setItem("topAlert", JSON.stringify({ closed: true }));
      };

      if (closed) return null;

      return (
        <>
          <div className="mobileAlertContainer">
            <div className="topAlertMobileContainer">
              <div className="mobileAlertText">
                <p className="alertText">
                  This is the documentation for Hasura DDN, the future of data
                  delivery.
                  <span className="clickHereText">
                    {" "}
                    Click here for the Hasura v2.x docs.
                  </span>
                </p>
              </div>
              <span onClick={handleClose}>
                <DeleteIcon className="alertDeleteIcon" />
              </span>
            </div>
          </div>
          <div className="firstAlertTopContiner">
            <div className="topAlertContainer">
              <span onClick={handleClose}>
                <DeleteIcon className="alertDeleteIcon" />
              </span>
              <p className="alertText">
                This is the documentation for Hasura DDN, the future of data
                delivery.
                <span className="clickHereText">
                  {" "}
                  Click here for the Hasura v2.x docs.
                </span>
              </p>
              <div></div>
            </div>
          </div>
        </>
      );
    }}
  </BrowserOnly>
);
