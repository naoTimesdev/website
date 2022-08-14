// @ts-ignore
import Layout from "@theme/Layout";
import React from "react";

import config from "../../docusaurus.config";
import { LinkButton } from "../components/LinkButton";

interface StyleData {
  imgSlot: React.CSSProperties;
  container: React.CSSProperties;
  ntTitleContainer: React.CSSProperties;
  ntTitle: React.CSSProperties;
  ntSubVersion: React.CSSProperties;
  ntDescription: React.CSSProperties;
  shieldContainer: React.CSSProperties;
  linkContainer: React.CSSProperties;
}

const Styles: StyleData = {
  imgSlot: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    marginTop: "3rem",
    borderRadius: "999px",
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '',
    flexDirection: "column",
    fontSize: '20px',
  },
  ntTitleContainer: {
    marginTop: "1rem",
    marginBottom: "0rem",
  },
  ntTitle: {
    fontSize: "3rem",
    fontWeight: "lighter",
  },
  ntSubVersion: {
    fontWeight: "bold",
    marginLeft: "0.5rem",
  },
  ntDescription: {
    marginTop: "1rem",
    fontSize: "1.15rem",
    marginBottom: "1rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    textAlign: "center",
  },
  shieldContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
    marginBottom: "1.25rem",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
  }
}

export default function IndexHomePage() {
  return (
    <Layout
        description="Bot berbahasa Indonesia untuk membantu tracking garapan fansubber"
    >
      <img src="/assets/img/nt192.png" style={Styles.imgSlot} />
      <div style={Styles.container}>
        <p style={Styles.ntTitleContainer}>
          <span style={Styles.ntTitle}>naoTimes</span>
          <span style={Styles.ntSubVersion}>
              v{config.customFields.version}
          </span>
        </p>
        <p style={Styles.ntDescription}>
            Bot berbahasa Indonesia untuk membantu tracking garapan fansubber
        </p>
        <div style={Styles.shieldContainer}>
          <img src="https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fserver" alt="Server Count" />
          <img src="https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fshowtimes" alt="Showtimes Count" />
          <img src="https://img.shields.io/uptimerobot/status/m786469671-606ba8f8deaf00978879eb7d?label=Bot&style=for-the-badge" alt="Uptime Status" />
        </div>
        <div style={Styles.linkContainer}>
          <LinkButton href="/invite/">Invite</LinkButton>
          <LinkButton href="/docs/">Dokumentasi</LinkButton>
          <LinkButton href="/blog/">Blog</LinkButton>
        </div>
      </div>
      <br />
    </Layout>
  )
}