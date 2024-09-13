import React from "react";
import Layout from "@theme-original/Layout";
import { TopAlert } from "@site/src/components/header/topAlert";
import { Logo } from "@site/src/components/icons/logo";
import { DocsSvg, MenuIcon, RightArrow } from "@site/src/components/icons";
import { DropDown } from "@site/src/components/header/dropdown";
import SearchBar from "@theme/SearchBar";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props}>
        <div className="headerContainer">
          <TopAlert />
          <div className="mobileNavbar">
            <div className="mobileNavbarFirstSection">
              <MenuIcon />
              <Logo />
              <DocsSvg />
            </div>
            <div style={{ width: "50px" }}>
              <SearchBar />
            </div>
          </div>
          <div className="navBarContainer">
            <div className="navBarFirstSection">
              <Logo /> <DocsSvg />
              <div className="dropDownAndBtn">
                <button className="outlinedBtn">Tuturials</button>
                <DropDown />
              </div>
            </div>
            <div className="navBarSecondSection">
              <SearchBar />
            </div>
            <div className="navBarLastSection">
              <button className="outlinedBtn">Hasura.io</button>
              <button className="outlinedBtn">Testomonials</button>
              <button className="primaryBtn">
                Log in <RightArrow />
              </button>
            </div>
          </div>
        </div>
        {props.children}
      </Layout>
    </>
  );
}
