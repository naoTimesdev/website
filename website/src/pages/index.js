import Layout from "@theme/Layout";
import React from "react";

import config from "../../docusaurus.config";

export default () => {
  return (
    <Layout title="naoTimes">
      <img
        src={"/img/icon/nt192.png"}
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "auto",
          marginTop: "3rem",
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '',
          flexDirection: "column",
          fontSize: '20px',
        }}>
        <p>
          <span
            style={{
              "fontSize": "3rem",
              "fontWeight": "lighter"
            }}
          >
            naoTimes
          </span>
          <span style={{"fontWeight": "bold", "marginLeft": "0.5rem"}}>
            v{config.customFields.version}
          </span>
        </p>
        <div style={{display: "flex", flexDirection: "row"}}>
            <a
              style={{display: "block", paddingLeft: "0.5rem", paddingRight: "0.5rem"}}
              href={"/invite"}
            >
              Invite
            </a>
            <a
              style={{display: "block", paddingLeft: "0.5rem", paddingRight: "0.5rem"}}
              href={"/docs"}
            >
              Dokumentasi
            </a>
            <a
              style={{display: "block", paddingLeft: "0.5rem", paddingRight: "0.5rem"}}
              href={"/blog"}
            >
              Blog
            </a>
        </div>
      </div>
    </Layout>
  );
};
