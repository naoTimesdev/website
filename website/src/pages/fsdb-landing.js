import Layout from "@theme/Layout";
import React from "react";

export default class FSDBLandingPage extends React.Component {
    render() {
        return (
            <>
                <Layout title="FSDB Landing">
                    <div className="flex-invite">
                        <div className="flex-invite-content" style={{ alignItems: "center" }}>
                            <h2>Selamat datang di website naoTimes.</h2>
                            <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                                <span>Jika anda datang dari website FansubDB, Fansub yang ingin anda unduh harus mengubah link URL terlebih dahulu</span>
                                <span>Mohon kontak Fansub anda untuk mengubah link proyek Fansub ke URL yang benar.</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <a href="/docs" className="button button--outline button--primary" style={{ marginRight: "0.25rem" }}>
                            Tertarik dengan naoTimes?
                        </a>
                        <a href="/invite" className="button button--outline button--primary" style={{ marginLeft: "0.25rem" }}>
                            Invite naoTimes
                        </a>
                    </div>
                </Layout>
            </>
        )
    }
}