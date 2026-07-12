// Services Data with Complete Details
const servicesData = [
    {
        id: 1,
        title: "आधार कार्ड",
        icon: "🆔",
        category: "document",
        description: "आधार कार्ड आवेदन और संपादन",
        fee: "₹50-100 (सेवा शुल्क)",
        time: "3-5 दिन",
        documents: [
            "पहचान पत्र (वोटर आईडी/पैन/ड्राइविंग लाइसेंस)",
            "पता प्रमाण (बिजली बिल/पानी बिल/राशन कार्ड)",
            "जन्म प्रमाण पत्र",
            "मोबाइल नंबर"
        ],
        steps: [
            "UIDAI की official website (uidai.gov.in) खोलें",
            "Enroll के विकल्प पर क्लिक करें",
            "अपने नजदीकी Aadhar Center को ढूंढें",
            "वहाँ जाकर सभी documents दिखाएं",
            "Biometric (फिंगरप्रिंट/आइरिस) स्कैन करवाएं",
            "Registration number लिखकर रखें",
            "3-5 दिन में आधार कार्ड आ जाएगा"
        ],
        officialLink: "https://www.uidai.gov.in",
        contactCenter: "1947 (Toll Free)"
    },
    {
        id: 2,
        title: "जाति प्रमाण पत्र",
        icon: "📜",
        category: "document",
        description: "SC/ST/OBC जाति प्रमाण पत्र",
        fee: "निशुल्क + ₹50-100 मीटर",
        time: "7-15 दिन",
        documents: [
            "जन्म प्रमाण पत्र या आधार कार्ड",
            "पिता का नाम और पता",
            "2 फोटो (पासपोर्ट साइज)",
            "आवेदन फॉर्म (e-District से)"
        ],
        steps: [
            "MP e-District portal (mpedistrict.gov.in) खोलें",
            "'नागरिक सेवा' विकल्प चुनें",
            "'जाति प्रमाण पत्र' आवेदन खोलें",
            "सभी जानकारी भरें",
            "दस्तावेज़ अपलोड करें",
            "तहसील में आवेदन जमा करें",
            "7-15 दिन में certificate मिल जाएगा"
        ],
        officialLink: "https://mpedistrict.gov.in",
        contactCenter: "District Tehsil Office"
    },
    {
        id: 3,
        title: "पैन कार्ड",
        icon: "📄",
        category: "document",
        description: "नया पैन कार्ड आवेदन",
        fee: "₹107 (e-KYC फीस)",
        time: "7-10 दिन",
        documents: [
            "आधार कार्ड",
            "पासपोर्ट या ड्राइविंग लाइसेंस",
            "बैंक स्टेटमेंट"
        ],
        steps: [
            "NSDL की website (utiitsl.com) खोलें",
            "e-KYC विकल्प चुनें",
            "अपना आधार नंबर डालें",
            "OTP verify करें",
            "फोटो और हस्ताक्षर अपलोड करें",
            "₹107 का भुगतान करें",
            "7-10 दिन में PAN कार्ड आ जाएगा"
        ],
        officialLink: "https://www.utiitsl.com",
        contactCenter: "1800-180-0229"
    },
    {
        id: 4,
        title: "ड्राइविंग लाइसेंस",
        icon: "🚗",
        category: "document",
        description: "नया ड्राइविंग लाइसेंस आवेदन",
        fee: "₹150 + ₹50 टेक्स + मीटर",
        time: "15-30 दिन",
        documents: [
            "आधार कार्ड या पहचान पत्र",
            "पता प्रमाण (बिजली बिल)",
            "2 पासपोर्ट साइज फोटो",
            "मेडिकल सर्टिफिकेट"
        ],
        steps: [
            "Sarathi Portal (parivahan.gov.in) खोलें",
            "अपने जिले का RTO ढूंढें",
            "Online slot बुक करें",
            "RTO में जाकर टेस्ट दें",
            "Driving test पास करें",
            "25-30 दिन में License आ जाएगा"
        ],
        officialLink: "https://www.parivahan.gov.in",
        contactCenter: "RTO Office"
    },
    {
        id: 5,
        title: "जन्म प्रमाण पत्र",
        icon: "👶",
        category: "document",
        description: "नवजात का जन्म प्रमाण पत्र",
        fee: "₹20 (21 दिन तक)",
        time: "तुरंत",
        documents: [
            "माता-पिता के नाम और पता",
            "अस्पताल की रिपोर्ट",
            "साक्षी के साथ आवेदन फॉर्म"
        ],
        steps: [
            "Nagar Palika या तहसील में जाएं",
            "जन्म प्रमाण पत्र के लिए आवेदन करें",
            "अस्पताल की रिपोर्ट दिखाएं",
            "21 दिन के अंदर जमा करें",
            "तुरंत या 7 दिन में certificate मिल जाएगा"
        ],
        officialLink: "https://mpedistrict.gov.in",
        contactCenter: "Nagar Palika Office"
    },
    {
        id: 6,
        title: "आय प्रमाण पत्र",
        icon: "💰",
        category: "document",
        description: "वार्षिक आय प्रमाण पत्र",
        fee: "निशुल्क + ₹20-50 मीटर",
        time: "3-7 दिन",
        documents: [
            "आधार कार्ड",
            "ITR या फॉर्म 16",
            "बैंक स्टेटमेंट (6 महीने)",
            "पिता/मालिक का स्वघोषणा पत्र"
        ],
        steps: [
            "MP e-District खोलें",
            "आय प्रमाण पत्र विकल्प चुनें",
            "सभी जानकारी भरें",
            "दस्तावेज़ अपलोड करें",
            "तहसील में आवेदन जमा करें",
            "3-7 दिन में certificate तैयार हो जाएगा"
        ],
        officialLink: "https://mpedistrict.gov.in",
        contactCenter: "District Tehsil"
    },
    {
        id: 7,
        title: "पासपोर्ट",
        icon: "🛂",
        category: "document",
        description: "नया पासपोर्ट आवेदन",
        fee: "₹1,500 (36 पेज)",
        time: "30-45 दिन",
        documents: [
            "जन्म प्रमाण पत्र",
            "आधार कार्ड",
            "पते का प्रमाण",
            "2 पासपोर्ट साइज फोटो"
        ],
        steps: [
            "POPSK Indore से slot बुक करें",
            "Passport.gov.in पर online आवेदन करें",
            "सभी details सही-सही भरें",
            "POPSK में जाकर दस्तावेज़ जमा करें",
            "Police verification के लिए इंतज़ार करें",
            "30-45 दिन में passport आ जाएगा"
        ],
        officialLink: "https://www.passport.gov.in",
        contactCenter: "1881 (Toll Free)"
    },
    {
        id: 8,
        title: "GST रजिस्ट्रेशन",
        icon: "📊",
        category: "government",
        description: "GST नंबर के लिए आवेदन",
        fee: "निशुल्क",
        time: "2-3 दिन",
        documents: [
            "PAN कार्ड",
            "आधार कार्ड",
            "बिजनेस का पता प्रमाण",
            "Bank Account Details"
        ],
        steps: [
            "GST portal (gst.gov.in) खोलें",
            "New Registration विकल्प चुनें",
            "Temporary Reference Number (TRN) से login करें",
            "सभी business details भरें",
            "दस्तावेज़ अपलोड करें",
            "2-3 दिन में GST registration approve हो जाएगा"
        ],
        officialLink: "https://www.gst.gov.in",
        contactCenter: "1800-425-4477"
    },
    {
        id: 9,
        title: "आयुष्मान भारत कार्ड",
        icon: "❤️",
        category: "banking",
        description: "5 लाख का health बीमा",
        fee: "निशुल्क",
        time: "तुरंत",
        documents: [
            "आधार कार्ड",
            "राशन कार्ड",
            "मोबाइल नंबर"
        ],
        steps: [
            "अपने नजदीकी CSC में जाएं",
            "आधार और राशन कार्ड दिखाएं",
            "E-KYC पूरी करें",
            "Biometric स्कैन करवाएं",
            "तुरंत Aayushman card प्रिंट हो जाएगा"
        ],
        officialLink: "https://pmjay.gov.in",
        contactCenter: "14555 (Toll Free)"
    },
    {
        id: 10,
        title: "ई-श्रम कार्ड",
        icon: "💼",
        category: "banking",
        description: "असंगठित क्षेत्र के श्रमिकों के लिए",
        fee: "निशुल्क",
        time: "तुरंत",
        documents: [
            "आधार कार्ड",
            "बैंक खाता नंबर",
            "मोबाइल नंबर"
        ],
        steps: [
            "e-shram.gov.in खोलें",
            "अपना आधार नंबर दर्ज करें",
            "OTP verify करें",
            "बैंक account details भरें",
            "तुरंत e-Shram number मिल जाएगा"
        ],
        officialLink: "https://www.eshram.gov.in",
        contactCenter: "14550 (Toll Free)"
    }
];
