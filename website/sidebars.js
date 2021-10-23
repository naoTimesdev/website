module.exports = {
    docs: [
        "home",
        {
            type: "category",
            label: "Perintah Bot",
            collapsed: false,
            items: [
                "ntperintah",
                {
                    type: "category",
                    label: "Animanga, VN, dan VTuber",
                    items: [
                        "perintah/ayaya/animanga",
                        "perintah/ayaya/vn",
                        "perintah/ayaya/vtuber"
                    ]
                },
                {
                    type: "category",
                    label: "NSFW",
                    items: [
                        "perintah/bahaya/nh",
                        "perintah/bahaya/imagebooru"
                    ]
                },
                {
                    type: "category",
                    label: "\"Fun\"",
                    items: [
                        "perintah/fun/info",
                        "perintah/fun/tanya",
                        "perintah/fun/random",
                        "perintah/fun/reaksi",
                    ]
                },
                {
                    type: "category",
                    label: "Kutubuku",
                    items: [
                        "perintah/kutubuku/kbbi",
                        "perintah/kutubuku/kateglo",
                        "perintah/kutubuku/padanan",
                        "perintah/kutubuku/webster",
                        "perintah/kutubuku/jisho",
                        "perintah/kutubuku/translasi",
                        "perintah/kutubuku/matematika",
                    ]
                },
                {
                    type: "category",
                    label: "Moderasi",
                    items: [
                        "perintah/moderasi/user",
                    ]
                },
                "perintah/ntpshowtimes",
                "perintah/ntpfsrss",
                "perintah/ntppeninjau",
                "perintah/ntpvote",
                "perintah/ntpsaus",
            ]
        },
        {
            type: "category",
            label: "Integrasi",
            items: [
                "integrasi/ntui",
                "integrasi/ntwebsite"
            ]
        },
        {
            type: "category",
            label: "Referensi",
            items: [
                "referensi/timestring",
            ]
        },
        {
            type: "category",
            label: "Setup",
            items: [
                "selfhost/setup"
            ]
        },
        "credits/credits",
        "credits/changelog",
    ]
}