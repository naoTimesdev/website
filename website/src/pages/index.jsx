import Layout from "@theme/Layout";
import React from "react";

import config from "../../docusaurus.config";

import {LinkButton} from "../components/LinkButton";

export default () => {
  return (
    <Layout>
      <img
        src={"/assets/img/nt192.png"}
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
        <p style={{marginTop: "1rem", marginBottom: "0rem"}}>
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
        <p style={{marginTop: "0rem", fontSize: "1.15rem", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", textAlign: "center"}}>
          Bot berbahasa Indonesia untuk membantu tracking garapan fansubber
        </p>
        <div style={{display: "flex", flexDirection: "row", "gap": "0.5rem", marginBottom: "1.25rem"}}>
          <img src={"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fserver"} alt={"Server Count"} />
          <img src={"https://img.shields.io/uptimerobot/status/m786469671-606ba8f8deaf00978879eb7d?label=Bot&style=for-the-badge"} alt={"Uptime Status"} />
        </div>
        <div style={{display: "flex", flexDirection: "row", gap: "0.5rem"}}>
          <LinkButton href="/invite">Invite</LinkButton>
          <LinkButton href="/docs">Dokumentasi</LinkButton>
          <LinkButton href="/blog">Blog</LinkButton>
        </div>
      </div>
      <br />
    </Layout>
  );
};
