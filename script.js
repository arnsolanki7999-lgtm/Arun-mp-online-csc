// Services Data
const services = [
    {
        id: 1,
        title: "आधार कार्ड सेवाएं",
        category: "document",
        icon: "🆔",
        description: "Aadhar Card आवेदन और संपादन",
        fee: "₹50-100 सेवा शुल्क",
        guide: "GUIDE"
    },
    {
        id: 2,
        title: "नया पैन कार्ड / सुधार",
        category: "document",
        icon: "📄",
        description: "Protean (NSDL) e-KYC आवेदन",
        fee: "₹107 (e-KYC फीस)",
        guide: "GUIDE"
    },
    {
        id: 3,
        title: "जाति प्रमाण पत्र (Caste Certificate)",
        category: "document",
        icon: "📜",
        description: "SC/ST/OBC जाति प्रमाण पत्र आवेदन",
        fee: "निशुल्क + ₹50-100 मीटर",
        guide: "GUIDE"
    },
    {
        id: 4,
        title: "आय प्रमाण पत्र",
        category: "document",
        icon: "💰",
        description: "Annual Income Certificate आवेदन",
        fee: "निशुल्क + ₹20-50 मीटर",
        guide: "GUIDE"
    },
    {
        id: 5,
        title: "निवास प्रमाण पत्र",
        category: "document",
        icon: "🏠",
        description: "Domicile / Residency Certificate",
        fee: "निशुल्क + ₹20-50 मीटर",
        guide: "GUIDE"
    },
    {
        id: 6,
        title: "स्वतंत्रता सेनानी पत्र",
        category: "document",
        icon: "🇮🇳",
        description: "Freedom Fighter Certificate",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 7,
        title: "अविवाहित प्रमाण पत्र",
        category: "document",
        icon: "💍",
        description: "Unmarried / Bachelor Certificate",
        fee: "₹25-50 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 8,
        title: "भीड़ प्रमाण पत्र",
        category: "document",
        icon: "👤",
        description: "Family Relation Certificate",
        fee: "₹20-30 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 9,
        title: "नया पासपोर्ट आवेदन",
        category: "document",
        icon: "🛂",
        description: "POPSK Indore - Passport Seva",
        fee: "₹1,500 (36 पेज पासपोर्ट)",
        guide: "GUIDE"
    },
    {
        id: 10,
        title: "पासपोर्ट नवीनीकरण",
        category: "document",
        icon: "🛂",
        description: "Passport Renewal Service",
        fee: "₹2,000 + सेवा शुल्क",
        guide: "GUIDE"
    },
    {
        id: 11,
        title: "आयुष्मान भारत कार्ड",
        category: "banking",
        icon: "❤️",
        description: "AB-PMJAY Beneficiary Portal",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 12,
        title: "ई-श्रम कार्ड पंजीयन",
        category: "banking",
        icon: "💼",
        description: "अनौपचारिक क्षेत्र UAN",
        fee: "₹100 (single) / ₹200 (multi), BPL निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 13,
        title: "प्रधानमंत्री जन धन योजना",
        category: "banking",
        icon: "🏦",
        description: "PMJDY Bank Account खुलवाएं",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 14,
        title: "सुकन्या समृद्धि योजना",
        category: "banking",
        icon: "👧",
        description: "बेटी के लिए बचत खाता",
        fee: "निशुल्क + ₹50-100 मीटर",
        guide: "GUIDE"
    },
    {
        id: 15,
        title: "प्रधानमंत्री मुद्रा लोन",
        category: "banking",
        icon: "💳",
        description: "Business Loan ₹50,000 तक",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 16,
        title: "पीएम विश्वकर्मा योजना",
        category: "government",
        icon: "🏗️",
        description: "पारंपरिक कारीगर पेंशन",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 17,
        title: "प्रधानमंत्री आवास योजना",
        category: "government",
        icon: "🏡",
        description: "Affordable Housing Scheme",
        fee: "निशुल्क + ₹50 मीटर",
        guide: "GUIDE"
    },
    {
        id: 18,
        title: "राष्ट्रीय पारिवारिक लाभ योजना",
        category: "government",
        icon: "👨‍👩‍👧‍👦",
        description: "Family Benefit Scheme",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 19,
        title: "राष्ट्रीय वृद्धा पेंशन योजना",
        category: "government",
        icon: "👴",
        description: "Senior Citizen Pension",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 20,
        title: "राष्ट्रीय विकलांग पेंशन योजना",
        category: "government",
        icon: "♿",
        description: "Disability Pension",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 21,
        title: "पीएम सूर्य घर मुफ्त बिजली",
        category: "utility",
        icon: "☀️",
        description: "प्रकृति शक्ति सहायता",
        fee: "निशुल्क + ₹50 मीटर",
        guide: "GUIDE"
    },
    {
        id: 22,
        title: "बिजली बिल भुगतान",
        category: "utility",
        icon: "⚡",
        description: "Online Electricity Bill Payment",
        fee: "₹5-10 (सुविधा शुल्क)",
        guide: "GUIDE"
    },
    {
        id: 23,
        title: "पानी बिल भुगतान",
        category: "utility",
        icon: "💧",
        description: "Online Water Bill Payment",
        fee: "₹5-10 (सुविधा शुल्क)",
        guide: "GUIDE"
    },
    {
        id: 24,
        title: "रेडियो /दूरदर्शन लाइसेंस",
        category: "utility",
        icon: "📻",
        description: "Broadcast License Renewal",
        fee: "₹100-300 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 25,
        title: "लहरी ड्राइविंग लाइसेंस",
        category: "document",
        icon: "🚗",
        description: "Parivahan Sarathi पोर्टल",
        fee: "₹150 + ₹50 टेक्स + मीटर",
        guide: "GUIDE"
    },
    {
        id: 26,
        title: "स्थायी DL / नवीनीकरण",
        category: "document",
        icon: "📑",
        description: "Sarathi - स्थायी ड्राइविंग लाइसेंस",
        fee: "₹200 + ₹300 टेक्स + मीटर",
        guide: "GUIDE"
    },
    {
        id: 27,
        title: "वाहन RC सेवाएं",
        category: "utility",
        icon: "🚙",
        description: "Parivahan Vahan पोर्टल",
        fee: "₹100 सेवा",
        guide: "GUIDE"
    },
    {
        id: 28,
        title: "ट्रैफिक चालान भुगतान",
        category: "utility",
        icon: "⚠️",
        description: "eChallan Parivahan",
        fee: "₹20 मीटर",
        guide: "GUIDE"
    },
    {
        id: 29,
        title: "GST पंजीयन",
        category: "government",
        icon: "📊",
        description: "यदि आप सेवा प्रदान करते हैं",
        fee: "निशुल्क + ₹500-₹1000 मीटर",
        guide: "GUIDE"
    },
    {
        id: 30,
        title: "उद्यम MSME पंजीयन",
        category: "government",
        icon: "🏢",
        description: "Micro/Small/Medium Enterprise",
        fee: "निशुल्क + ₹200 मीटर",
        guide: "GUIDE"
    },
    {
        id: 31,
        title: "आयकर (ITR)",
        category: "banking",
        icon: "📈",
        description: "Income Tax e-Filing",
        fee: "₹300-₹1500 मीटर",
        guide: "GUIDE"
    },
    {
        id: 32,
        title: "FSSAI खाद्य लाइसेंस",
        category: "government",
        icon: "🛡️",
        description: "Basic / State / Central",
        fee: "₹100-₹750 + ₹300 मीटर",
        guide: "GUIDE"
    },
    {
        id: 33,
        title: "जन्म प्रमाण पत्र",
        category: "document",
        icon: "👶",
        description: "CRS / MP e-Nagar Palika",
        fee: "₹20 (21 दिन तक) + मीटर",
        guide: "GUIDE"
    },
    {
        id: 34,
        title: "मृत्यु प्रमाण पत्र",
        category: "document",
        icon: "⚫",
        description: "CRS / MP e-Nagar Palika",
        fee: "₹20 (21 दिन तक) + मीटर",
        guide: "GUIDE"
    },
    {
        id: 35,
        title: "विवाह प्रमाण पत्र",
        category: "document",
        icon: "💒",
        description: "MP e-District - TMC",
        fee: "₹100 + ₹100 मीटर",
        guide: "GUIDE"
    },
    {
        id: 36,
        title: "विवाह पंजीकरण / संशोधन",
        category: "document",
        icon: "💍",
        description: "Marriage Registration Service",
        fee: "₹50-100 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 37,
        title: "तलाक प्रमाण पत्र",
        category: "document",
        icon: "📋",
        description: "Divorce Certificate",
        fee: "₹50-100 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 38,
        title: "नागरिकता प्रमाण पत्र",
        category: "document",
        icon: "🌍",
        description: "Citizenship Certificate",
        fee: "₹500-1000 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 39,
        title: "खेत की जमीन नक्शा / खतौनी",
        category: "document",
        icon: "🚜",
        description: "Land Record / Revenue Map",
        fee: "₹25-50 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 40,
        title: "संपत्ति रजिस्ट्रेशन",
        category: "banking",
        icon: "🏘️",
        description: "Property Registration Service",
        fee: "₹5000-10000 (राजस्व शुल्क)",
        guide: "GUIDE"
    },
    {
        id: 41,
        title: "लाइसेंस के लिए आवेदन",
        category: "document",
        icon: "📜",
        description: "Business License Application",
        fee: "₹100-500 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 42,
        title: "ट्रेडमार्क पंजीकरण",
        category: "government",
        icon: "™️",
        description: "Trademark Registration",
        fee: "₹4,500-9,000 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 43,
        title: "पेटेंट आवेदन",
        category: "government",
        icon: "🔬",
        description: "Patent Application",
        fee: "₹2,200-10,000 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 44,
        title: "कॉपीराइट पंजीकरण",
        category: "government",
        icon: "©️",
        description: "Copyright Registration",
        fee: "₹300-500 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 45,
        title: "भारतीय नागरिकता के लिए आवेदन",
        category: "document",
        icon: "🇮🇳",
        description: "Indian Citizenship Application",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 46,
        title: "स्कूल छोड़ने का प्रमाणपत्र",
        category: "document",
        icon: "🎓",
        description: "School Leaving Certificate",
        fee: "₹20-50 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 47,
        title: "शैक्षणिक प्रमाणपत्र सत्यापन",
        category: "document",
        icon: "📚",
        description: "Educational Certificate Verification",
        fee: "₹50-100 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 48,
        title: "डिजिटल हस्ताक्षर (DSC)",
        category: "banking",
        icon: "🔐",
        description: "Digital Signature Certificate",
        fee: "₹500-2000 + मीटर",
        guide: "GUIDE"
    },
    {
        id: 49,
        title: "मोबाइल नंबर पोर्टिंग",
        category: "utility",
        icon: "📱",
        description: "MNP - Number Portability",
        fee: "₹19-99 (नेटवर्क शुल्क)",
        guide: "GUIDE"
    },
    {
        id: 50,
        title: "आधार सीडिंग (Linking)",
        category: "banking",
        icon: "🔗",
        description: "Aadhar Linking Service",
        fee: "निशुल्क",
        guide: "GUIDE"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderServices(services);
    setupFilters();
    setupSearch();
    updateStats();
});

// Render Services
function renderServices(data) {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = '';

    data.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-card-header">
                <div>
                    <div class="service-icon">${service.icon}</div>
                    <div class="service-category">${getCategoryLabel(service.category)}</div>
                </div>
                <button class="service-favorite-btn" onclick="toggleFavorite(this)">🤍</button>
            </div>
            <div class="service-card-body">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <div class="service-fee">${service.fee}</div>
            </div>
            <div class="service-footer">
                <div class="service-links">
                    <a href="#" class="service-link">📖 GUIDE</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Setup Filters
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            if (filter === 'all') {
                renderServices(services);
            } else {
                const filtered = services.filter(s => s.category === filter);
                renderServices(filtered);
            }
            updateStats();
        });
    });
}

// Setup Search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        const filtered = services.filter(s => 
            s.title.toLowerCase().includes(query) ||
            s.description.toLowerCase().includes(query)
        );
        renderServices(filtered);
    });
}

// Toggle Favorite
function toggleFavorite(btn) {
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '❤️' : '🤍';
}

// Update Stats
function updateStats() {
    document.getElementById('totalServices').textContent = services.length + '+';
}

// Category Label
function getCategoryLabel(category) {
    const labels = {
        'document': '🗂️ दस्तावेज़',
        'banking': '🏦 बैंकिंग',
        'utility': '⚡ यूटिलिटी',
        'government': '🏛️ सरकारी'
    };
    return labels[category] || category;
}