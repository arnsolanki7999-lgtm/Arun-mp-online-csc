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
        title: "महराना प्रथाप पत्र",
        category: "document",
        icon: "📋",
        description: "Form 6 / Form 8 - ECI",
        fee: "निशुल्क (सेवा शुल्क लागू)",
        guide: "GUIDE"
    },
    {
        id: 4,
        title: "नया पासपोर्ट आवेदन",
        category: "document",
        icon: "🛂",
        description: "POPSK Indore - Passport Seva",
        fee: "₹1,500 (36 पेज पासपोर्ट)",
        guide: "GUIDE"
    },
    {
        id: 5,
        title: "आयुष्मान भारत कार्ड",
        category: "banking",
        icon: "❤️",
        description: "AB-PMJAY Beneficiary Portal",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 6,
        title: "ई-श्रम कार्ड पंजीयन",
        category: "banking",
        icon: "💼",
        description: "अनौपचारिक क्षेत्र UAN",
        fee: "₹100 (single) / ₹200 (multi), BPL निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 7,
        title: "पीएम विश्वकर्मा योजना",
        category: "government",
        icon: "🏠",
        description: "पारंपरिक कारीगर पेंशन",
        fee: "निशुल्क",
        guide: "GUIDE"
    },
    {
        id: 8,
        title: "पीएम सूर्य घर मुफ्त बिजली",
        category: "utility",
        icon: "☀️",
        description: "प्रकृति शक्ति सहायता",
        fee: "निशुल्क + ₹50 मीटर",
        guide: "GUIDE"
    },
    {
        id: 9,
        title: "मत्स्य पालन अकाउंट",
        category: "document",
        icon: "🐟",
        description: "जिलीन तत्पारता खोल्टर",
        fee: "₹20 मीटर",
        guide: "GUIDE"
    },
    {
        id: 10,
        title: "लहरी ड्राइविंग लाइसेंस",
        category: "document",
        icon: "🚗",
        description: "Parivahan Sarathi पोर्टल",
        fee: "₹150 + ₹50 टेक्स + मीटर",
        guide: "GUIDE"
    },
    {
        id: 11,
        title: "स्थायी DL / नवीनीकरण",
        category: "document",
        icon: "📑",
        description: "Sarathi - गृहीत लाइसेंस",
        fee: "₹200 + ₹300 टेक्स + मीटर",
        guide: "GUIDE"
    },
    {
        id: 12,
        title: "वाहन RC सेवाएं",
        category: "utility",
        icon: "🚙",
        description: "Parivahan Vahan पोर्टल",
        fee: "₹100 सेवा",
        guide: "GUIDE"
    },
    {
        id: 13,
        title: "ट्रैफिक चालान भुगतान",
        category: "utility",
        icon: "⚠️",
        description: "eChallan Parivahan",
        fee: "₹20 मीटर",
        guide: "GUIDE"
    },
    {
        id: 14,
        title: "GST पंजीयन",
        category: "government",
        icon: "📊",
        description: "यदि आप सेवा प्रदान करते हैं",
        fee: "निशुल्क + ₹500-₹1000 मीटर",
        guide: "GUIDE"
    },
    {
        id: 15,
        title: "उद्यम MSME पंजीयन",
        category: "government",
        icon: "🏢",
        description: "Micro/Small/Medium Enterprise",
        fee: "निशुल्क + ₹200 मीटर",
        guide: "GUIDE"
    },
    {
        id: 16,
        title: "आयकर (ITR)",
        category: "banking",
        icon: "📈",
        description: "Income Tax e-Filing",
        fee: "₹300-₹1500 मीटर",
        guide: "GUIDE"
    },
    {
        id: 17,
        title: "FSSAI खाद्य लाइसेंस",
        category: "government",
        icon: "🛡️",
        description: "Basic / State / Central",
        fee: "₹100-₹750 + ₹300 मीटर",
        guide: "GUIDE"
    },
    {
        id: 18,
        title: "जन्म प्रमाण पत्र",
        category: "document",
        icon: "👶",
        description: "CRS / MP e-Nagar Palika",
        fee: "₹20 (21 दिन तक) + मीटर",
        guide: "GUIDE"
    },
    {
        id: 19,
        title: "मृत्यु प्रमाण पत्र",
        category: "document",
        icon: "⚫",
        description: "CRS / MP e-Nagar Palika",
        fee: "₹20 (21 दिन तक) + मीटर",
        guide: "GUIDE"
    },
    {
        id: 20,
        title: "विवाह प्रमाण पत्र",
        category: "document",
        icon: "💒",
        description: "MP e-District - TMC",
        fee: "₹100 + ₹100 मीटर",
        guide: "GUIDE"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderServices(services);
    setupFilters();
    setupSearch();
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