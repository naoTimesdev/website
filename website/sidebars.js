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
                        "perintah/fun/pengingat",
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
                        "perintah/moderasi/automod",
                        "perintah/moderasi/kanal",
                        "perintah/moderasi/pesan",
                        "perintah/moderasi/user",
                        "perintah/moderasi/utas",
                        "perintah/moderasi/modlogs",
                    ]
                },
                {
                    type: "category",
                    label: "Peninjau Website",
                    items: [
                        "perintah/peninjau/anibin",
                        "perintah/peninjau/cuaca",
                        "perintah/peninjau/kurs",
                        "perintah/peninjau/saus",
                    ]
                },
                {
                    type: "category",
                    label: "Showtimes",
                    items: [
                        "perintah/showtimes/intro",
                        "perintah/showtimes/user",
                        "perintah/showtimes/staff",
                        "perintah/showtimes/admin",
                        "perintah/showtimes/alias",
                        "perintah/showtimes/kolaborasi",
                    ]
                },
                {
                    type: "category",
                    label: "Pemutar Musik",
                    items: [
                        "perintah/musik/intro",
                        "perintah/musik/perintah",
                    ]
                },
                // "perintah/ntpshowtimes",
                "perintah/ntpfsrss",
                "perintah/vote",
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
                "selfhost/intro",
                "selfhost/persiapan",
                "selfhost/setup",
            ]
        },
        "credits/credits",
        "credits/changelog",
    ]
}