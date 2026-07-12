const servicesData = [
    {
        id: 1,
        title: "आधार कार्ड सेवाएं",
        category: "national",
        icon: "🆔",
        description: "अपॉइंटमेंट, अपडेट व सुधार",
        fee: "₹50 एंजिओग्राफिक / ₹100 बायोमेट्रिक",
        time: "3-5 दिन",
        documents: [
            "मूल आधार कार्ड / एनरोलमेंट स्लिप",
            "पहचान प्रमाण (PAN/Voter ID)",
            "पते का प्रमाण (बिजली बिल/पासबुक)",
            "रजिस्ट्रेड मोबाइल नंबर"
        ],
        steps: [
            "STEP 01 bookappointment.uidai.gov.in खोलें",
            "STEP 02 City में 'Indore' चुने और Proceed दबाएँ",
            "STEP 03 'Aadhaar Update' देख चुने, मोबाइल नंबर डालें व OTP लें",
            "STEP 04 आधार नंबर, नाम व अपडेट फ़ील्ड्स भरें",
            "STEP 05 नजदीकी सेवा केंद्र का अपॉइंटमेंट स्लॉट बुक करें",
            "STEP 06 अपॉलाइन शुल्क भरें (₹50/₹100)",
            "STEP 07 अपॉइंटमेंट पर्ची प्रिंट करके शाखा को दें"
        ],
        officialLink: "https://www.uidai.gov.in",
        contact: "1947 (Toll Free)"
    },
    {
        id: 2,
        title: "नया पैन कार्ड / सुधार",
        category: "national",
        icon: "📄",
        description: "Protean (NSDL) e-KYC आवेदन",
        fee: "₹107 (e-KYC फीसलें)",
        time: "7-10 दिन",
        documents: [
            "आधार कार्ड",
            "पहचान प्रमाण",
            "बैंक स्टेटमेंट (6 महीने)"
        ],
        steps: [
            "STEP 01 NSDL की website (utiitsl.com) खोलें",
            "STEP 02 e-KYC विकल्प चुनें",
            "STEP 03 अपना आधार नंबर डालें",
            "STEP 04 OTP verify करें",
            "STEP 05 फोटो और हस्ताक्षर अपलोड करें",
            "STEP 06 ₹107 का भुगतान करें",
            "STEP 07 7-10 दिन में PAN कार्ड आ जाएगा"
        ],
        officialLink: "https://www.utiitsl.com",
        contact: "1800-180-0229"
    },
    {
        id: 3,
        title: "जाति प्रमाण पत्र",
        category: "national",
        icon: "📜",
        description: "SC/ST/OBC जाति प्रमाण पत्र आवेदन",
        fee: "निशुल्क + ₹50-100 मीटर",
        time: "7-15 दिन",
        documents: [
            "जन्म प्रमाण पत्र या आधार कार्ड",
            "पिता का नाम और पता",
            "2 फोटो (पासपोर्ट साइज)",
            "आवेदन फॉर्म (e-District से)"
        ],
        steps: [
            "STEP 01 MP e-District portal खोलें",
            "STEP 02 'नागरिक सेवाएं' विकल्प चुनें",
            "STEP 03 'जाति प्रमाण पत्र' आवेदन खोलें",
            "STEP 04 सभी जानकारी सही-सही भरें",
            "STEP 05 दस्तावेज़ अपलोड करें",
            "STEP 06 तहसील में आवेदन जमा करें",
            "STEP 07 7-15 दिन में certificate मिल जाएगा"
        ],
        officialLink: "https://mpedistrict.gov.in",
        contact: "District Tehsil"
    },
    {
        id: 4,
        title: "आय प्रमाण पत्र",
        category: "national",
        icon: "💰",
        description: "वार्षिक आय प्रमाण पत्र आवेदन",
        fee: "निशुल्क + ₹20-50 मीटर",
        time: "3-7 दिन",
        documents: [
            "आधार कार्ड",
            "ITR या फॉर्म 16",
            "बैंक स्टेटमेंट (6 महीने)",
            "पिता/मालिक का स्वघोषणा पत्र"
        ],
        steps: [
            "STEP 01 MP e-District खोलें",
            "STEP 02 आय प्रमाण पत्र विकल्प चुनें",
            "STEP 03 सभी जानकारी भरें",
            "STEP 04 दस्तावेज़ अपलोड करें",
            "STEP 05 तहसील में आवेदन जमा करें",
            "STEP 06 3-7 दिन में certificate तैयार हो जाएगा"
        ],
        officialLink: "https://mpedistrict.gov.in",
        contact: "District Tehsil"
    },
    {
        id: 5,
        title: "निवास प्रमाण पत्र",
        category: "national",
        icon: "🏠",
        description: "Domicile / Residency Certificate",
        fee: "निशुल्क + ₹20-50 मीटर",
        time: "3-7 दिन",
        documents: [
            "आधार कार्ड",
            "बिजली का बिल / पानी का बिल",
            "रेंट एग्रीमेंट (किरायेदारों के लिए)",
            "पिता/मालिक का स्वघोषणा पत्र"
        ],
        steps: [
            "STEP 01 MP e-District खोलें",
            "STEP 02 निवास प्रमाण पत्र चुनें",
            "STEP 03 आवेदन फॉर्म भरें",
            "STEP 04 दस्तावेज़ अपलोड करें",
            "STEP 05 तहसील से सत्यापन करवाएं",
            "STEP 06 3-7 दिन में certificate मिल जाएगा"
        ],
        officialLink: "https://mpedistrict.gov.in",
        contact: "District Tehsil"
    },
    {
        id: 6,
        title: "नया पासपोर्ट आवेदन",
        category: "national",
        icon: "🛂",
        description: "POPSK Indore – Passport Seva",
        fee: "₹1,500 (36 पेज पासपोर्ट)",
        time: "30-45 दिन",
        documents: [
            "जन्म प्रमाण पत्र",
            "आधार कार्ड",
            "पते का प्रमाण",
            "2 पासपोर्ट साइज फोटो"
        ],
        steps: [
            "STEP 01 POPSK Indore से slot बुक करें",
            "STEP 02 Passport.gov.in पर online आवेदन करें",
            "STEP 03 सभी details सही-सही भरें",
            "STEP 04 POPSK में जाकर दस्तावेज़ जमा करें",
            "STEP 05 Police verification के लिए इंतजार करें",
            "STEP 06 30-45 दिन में passport आ जाएगा"
        ],
        officialLink: "https://www.passport.gov.in",
        contact: "1881 (Toll Free)"
    },
    {
        id: 7,
        title: "आयुष्मान भारत कार्ड",
        category: "state",
        icon: "❤️",
        description: "AB-PMJAY Beneficiary Portal",
        fee: "निशुल्क",
        time: "तुरंत",
        documents: [
            "आधार कार्ड",
            "राशन कार्ड",
            "मोबाइल नंबर"
        ],
        steps: [
            "STEP 01 अपने नजदीकी CSC में जाएं",
            "STEP 02 आधार और राशन कार्ड दिखाएं",
            "STEP 03 E-KYC पूरी करें",
            "STEP 04 Biometric स्कैन करवाएं",
            "STEP 05 तुरंत Aayushman card प्रिंट हो जाएगा"
        ],
        officialLink: "https://pmjay.gov.in",
        contact: "14555 (Toll Free)"
    },
    {
        id: 8,
        title: "ई-श्रम कार्ड",
        category: "state",
        icon: "💼",
        description: "असंगठित क्षेत्र के श्रमिकों के लिए",
        fee: "निशुल्क",
        time: "तुरंत",
        documents: [
            "आधार कार्ड",
            "बैंक खाता नंबर",
            "मोबाइल नंबर"
        ],
        steps: [
            "STEP 01 e-shram.gov.in खोलें",
            "STEP 02 अपना आधार नंबर दर्ज करें",
            "STEP 03 OTP verify करें",
            "STEP 04 बैंक account details भरें",
            "STEP 05 तुरंत e-Shram number मिल जाएगा"
        ],
        officialLink: "https://www.eshram.gov.in",
        contact: "14550 (Toll Free)"
    },
    {
        id: 9,
        title: "GST पंजीयन",
        category: "state",
        icon: "📊",
        description: "यदि आप सेवा प्रदान करते हैं",
        fee: "निशुल्क",
        time: "2-3 दिन",
        documents: [
            "PAN कार्ड",
            "आधार कार्ड",
            "बिजनेस का पता प्रमाण",
            "Bank Account Details"
        ],
        steps: [
            "STEP 01 GST portal (gst.gov.in) खोलें",
            "STEP 02 New Registration विकल्प चुनें",
            "STEP 03 Temporary Reference Number (TRN) से login करें",
            "STEP 04 सभी business details भरें",
            "STEP 05 दस्तावेज़ अपलोड करें",
            "STEP 06 2-3 दिन में GST registration approve हो जाएगा"
        ],
        officialLink: "https://www.gst.gov.in",
        contact: "1800-425-4477"
    },
    {
        id: 10,
        title: "ड्राइविंग लाइसेंस",
        category: "transport",
        icon: "🚗",
        description: "Sarathi - ड्राइविंग लाइसेंस",
        fee: "₹200 + ₹300 टेक्स + मीटर",
        time: "15-30 दिन",
        documents: [
            "आधार कार्ड या पहचान पत्र",
            "पते का प्रमाण",
            "2 पासपोर्ट साइज फोटो",
            "मेडिकल सर्टिफिकेट"
        ],
        steps: [
            "STEP 01 Sarathi Portal (parivahan.gov.in) खोलें",
            "STEP 02 अपने जिले का RTO ढूंढें",
            "STEP 03 Online slot बुक करें",
            "STEP 04 RTO में जाकर टेस्ट दें",
            "STEP 05 Driving test पास करें",
            "STEP 06 25-30 दिन में License आ जाएगा"
        ],
        officialLink: "https://www.parivahan.gov.in",
        contact: "RTO Office"
    },
    {
        id: 11,
        title: "वाहन RC सेवाएं",
        category: "transport",
        icon: "🚙",
        description: "Parivahan Vahan पोर्टल",
        fee: "निशुल्क + ₹100 मीटर",
        time: "7-10 दिन",
        documents: [
            "RC Original",
            "Fitness Certificate",
            "Pollution Certificate",
            "Owner ID Proof"
        ],
        steps: [
            "STEP 01 Parivahan Vahan Portal खोलें",
            "STEP 02 Registration Number दर्ज करें",
            "STEP 03 अपनी जानकारी confirm करें",
            "STEP 04 जरूरी सेवा चुनें",
            "STEP 05 शुल्क का भुगतान करें",
            "STEP 06 7-10 दिन में updated RC मिल जाएगी"
        ],
        officialLink: "https://www.parivahan.gov.in",
        contact: "RTO Office"
    },
    {
        id: 12,
        title: "जन्म प्रमाण पत्र",
        category: "welfare",
        icon: "👶",
        description: "नवजात का जन्म प्रमाण पत्र",
        fee: "₹20 (21 दिन तक) + मीटर",
        time: "तुरंत",
        documents: [
            "माता-पिता के नाम और पता",
            "अस्पताल की रिपोर्ट",
            "साक्षी के साथ आवेदन फॉर्म"
        ],
        steps: [
            "STEP 01 Nagar Palika या तहसील में जाएं",
            "STEP 02 जन्म प्रमाण पत्र के लिए आवेदन करें",
            "STEP 03 अस्पताल की रिपोर्ट दिखाएं",
            "STEP 04 21 दिन के अंदर जमा करें",
            "STEP 05 तुरंत या 7 दिन में certificate मिल जाएगा"
        ],
        officialLink: "https://mpedistrict.gov.in",
        contact: "Nagar Palika Office"
    },
    {
        id: 13,
        title: "विवाह प्रमाण पत्र",
        category: "welfare",
        icon: "💒",
        description: "MP e-District - TMC",
        fee: "₹100 + ₹100 मीटर",
        time: "5-10 दिन",
        documents: [
            "पति-पत्नी के आधार कार्ड",
            "शादी की तस्वीरें",
            "2 साक्षी",
            "आवेदन फॉर्म"
        ],
        steps: [
            "STEP 01 Nagar Palika में आवेदन फॉर्म लें",
            "STEP 02 सभी दस्तावेज़ के साथ भरें",
            "STEP 03 2 साक्षी के साथ submit करें",
            "STEP 04 15 दिन की public notice period",
            "STEP 05 5-10 दिन में certificate मिल जाएगा"
        ],
        officialLink: "https://mpedistrict.gov.in",
        contact: "Nagar Palika"
    },
    {
        id: 14,
        title: "आय कर रिटर्न (ITR)",
        category: "utility",
        icon: "📈",
        description: "Income Tax e-Filing",
        fee: "₹300-₹1500 मीटर",
        time: "5-7 दिन",
        documents: [
            "PAN कार्ड",
            "आधार कार्ड",
            "Bank Statements",
            "Income Documents"
        ],
        steps: [
            "STEP 01 income-tax.gov.in खोलें",
            "STEP 02 e-File विकल्प चुनें",
            "STEP 03 सही ITR form चुनें",
            "STEP 04 सभी income details भरें",
            "STEP 05 Digital signature से sign करें",
            "STEP 06 5-7 दिन में acknowledgement आ जाएगी"
        ],
        officialLink: "https://www.income-tax.gov.in",
        contact: "18001800220"
    },
    {
        id: 15,
        title: "MSME पंजीयन",
        category: "utility",
        icon: "🏢",
        description: "Micro/Small/Medium Enterprise",
        fee: "निशुल्��",
        time: "2-3 दिन",
        documents: [
            "आधार कार्ड",
            "PAN कार्ड",
            "Business Address Proof",
            "Bank Details"
        ],
        steps: [
            "STEP 01 MSME portal (udyamregistration.gov.in) खोलें",
            "STEP 02 अपना आधार नंबर दर्ज करें",
            "STEP 03 Business details भरें",
            "STEP 04 सभी documents upload करें",
            "STEP 05 तुरंत Udyam number मिल जाएगा"
        ],
        officialLink: "https://udyamregistration.gov.in",
        contact: "1800-110-140"
    }
];
