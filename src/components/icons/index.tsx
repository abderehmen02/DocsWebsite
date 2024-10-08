import React from "react";

export const DeleteIcon: React.FC<{ className? }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      className={className}
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#F3F4F6" rx="16"></rect>
      <path
        stroke="#1F2A37"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21.714 10.286 10.285 21.714m0-11.428 11.429 11.428"
      ></path>
    </svg>
  );
};

export const DocsSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="24"
      fill="none"
      viewBox="0 0 57 24"
    >
      <rect width="57" height="24" fill="#80A3FF" rx="12"></rect>
      <path
        fill="#fff"
        d="M13.031 5.721h4.67q2.122 0 2.122 1.927v8.426q0 1.926-2.121 1.926h-4.67zm4.534 10.119V7.881q0-.311-.116-.409-.116-.116-.429-.116h-1.75v9.01h1.75q.311 0 .429-.098.116-.116.116-.428m6.097-10.119h2.374q2.12 0 2.12 1.927v8.426q0 1.926-2.12 1.926h-2.374q-2.121 0-2.121-1.927V7.648q0-1.927 2.12-1.927m2.257 10.041V7.96q0-.312-.117-.409-.116-.117-.428-.116h-1.031q-.33 0-.448.116-.117.097-.116.409v7.803q0 .312.116.428.117.098.448.098h1.031q.311 0 .428-.098.117-.117.117-.428m10.464-5.974h-2.258V7.881q0-.311-.116-.409-.117-.116-.428-.116h-.915q-.311 0-.428.116-.117.098-.117.41v7.978q0 .31.117.428.117.096.428.097h.915q.31 0 .428-.097.116-.117.116-.428V13.99h2.258v2.102q0 1.927-2.122 1.927h-2.276q-2.121 0-2.121-1.927V7.648q0-1.927 2.12-1.927h2.277q2.122 0 2.122 1.927zm5.47 5.974v-2.627q0-.311-.117-.409-.116-.116-.428-.116h-1.576q-2.004 0-2.004-1.946V7.648q0-1.927 2.102-1.927h2.14q2.102 0 2.102 1.927V9.36h-2.258V7.959q0-.312-.116-.409-.116-.117-.428-.116h-.74q-.33 0-.447.116-.117.097-.117.409v2.471q0 .312.117.428.116.098.447.098h1.537q2.043 0 2.044 1.907v3.21Q44.11 18 41.99 18h-2.102q-2.121 0-2.121-1.927v-1.692h2.238v1.381q0 .312.116.428.117.098.448.098h.74q.31 0 .428-.098.116-.117.116-.428"
      ></path>
    </svg>
  );
};

export const RightArrow = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 15.5L12.5 10.5L7.5 5.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export const ArrowDown = () => {
  return (
    <svg
      width="20px"
      height="20px"
      style={{ marginLeft: 20 }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};

export const MenuIcon = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M4 7h22M4 15h22M4 23h22"
      ></path>
    </svg>
  );
};
