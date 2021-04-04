import Layout from "@theme/Layout";
import React from "react";

export default class InviteLink extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const script = document.createElement("script");
    const InviteLink = "https://discord.com/api/oauth2/authorize?client_id=558256913926848537&permissions=1556606198&scope=bot%20applications.commands";
    script.async = true;
    script.innerHTML = `window.location = "${InviteLink}";`;
    document.body.appendChild(script);
  };

  render() {
    return (
      <Layout title="Invite">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '20px',
          }}>
          <p>
            Mengalihkan...
          </p>
        </div>
      </Layout>
    )
  }
}
