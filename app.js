let currentBookings = JSON.parse(localStorage.getItem('bookings')) || [];
let allServices = [...servicesData];
let currentFilter = 'all';

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    updateStats();
    renderServices(allServices);
});

// Show Page
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'priceTable') renderPriceTable();
    if (pageId === 'customers') renderCustomerTable();
    if (pageId === 'dashboard') renderServices(allServices);
}

// Render Services
function renderServices(services) {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = services.map(service => `
        <div class="service-card" onclick="showServiceDetail(${service.id})">
            <div class="service-card-header">
                <div class="service-icon-box">${service.icon}</div>
                <div class="service-card-external">⤴️</div>
            </div>
            <div class="service-category-badge">${getCategoryName(service.category)}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <div class="service-fee">${service.fee}</div>
            <div class="service-card-footer">
                <a class="guide-link" onclick="event.stopPropagation(); showServiceDetail(${service.id})">📖 GUIDE</a>
            </div>
        </div>
    `).join('');
}

// Show Service Detail
function showServiceDetail(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    const detail = `
        <div class="detail-header">
            <div class="detail-header-top">
                <div class="detail-icon-large">${service.icon}</div>
                <div class="detail-header-text">
                    <div class="detail-category">${getCategoryName(service.category)} सेवाएं</div>
                    <h1>${service.title}</h1>
                    <div class="detail-header-desc">${service.description}</div>
                </div>
            </div>
            <div class="detail-buttons">
                <button class="detail-btn primary" onclick="window.open('${service.officialLink}', '_blank')">🔗 अधिकारिक वेबसाइट खोलें</button>
                <button class="detail-btn">📋 Self-service</button>
                <button class="detail-btn whatsapp" onclick="shareViaWhatsApp('${service.title}')">💬 WhatsApp पर भेजें</button>
                <button class="detail-btn">👋 त्रिकक किराए</button>
                <button class="detail-btn" onclick="downloadGuide('${service.title}')">📥 PDF डाउनलोड करें</button>
                <button class="detail-btn">🖨️ प्रिंट</button>
            </div>
        </div>
        <div class="detail-body">
            <div class="detail-grid">
                <div class="detail-box">
                    <div class="detail-box-label">💰 शुल्क</div>
                    <div class="detail-box-value">${service.fee}</div>
                </div>
                <div class="detail-box">
                    <div class="detail-box-label">⏱️ समय अवधि</div>
                    <div class="detail-box-value">${service.time}</div>
                </div>
                <div class="detail-box">
                    <div class="detail-box-label">📞 सहायता</div>
                    <div class="detail-box-value">${service.contact}</div>
                </div>
            </div>

            <div class="detail-section">
                <h3>📄 आवश्यक दस्तावेज़</h3>
                <ul>
                    ${service.documents.map(doc => `<li>${doc}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h3>📝 फॉर्म - किलिंग गाइड - चरण-दर-चरण प्रार्थना</h3>
                <ol>
                    ${service.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>

            <div class="detail-section">
                <h3>🔗 अधिकारिक वेबसाइट</h3>
                <a href="${service.officialLink}" target="_blank" class="detail-link">➜ ${service.officialLink}</a>
            </div>

            <button class="detail-btn apply" onclick="openBooking(${service.id})" style="margin-top: 20px; width: 100%; justify-content: center;">
                ✅ आवेदन करें
            </button>
        </div>
    `;
    
    document.getElementById('detailContent').innerHTML = detail;
    showPage('serviceDetail');
}

// Filter Services
function filterByCategory(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (category === 'all') {
        renderServices(servicesData);
    } else {
        const filtered = servicesData.filter(s => s.category === category);
        renderServices(filtered);
    }
}

function filterServices() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = servicesData.filter(s => 
        s.title.toLowerCase().includes(query) || 
        s.description.toLowerCase().includes(query)
    );
    renderServices(filtered);
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'national': '🇮🇳 राष्ट्रीय सेवाएं',
        'state': '🏛️ मध्य प्रदेश सेवाएं',
        'indore': '🏙️ इंदौर स्थानीय',
        'transport': '🚗 वाहन व परिवहन',
        'utility': '⚡ व्यवसाय व टैक्स',
        'welfare': '❤️ प्रमाणपत्र व रिकॉर्ड',
        'schemes': '🎁 कल्याण योजनाएं'
    };
    return names[category] || category;
}

// Booking Functions
function openBooking(serviceId) {
    document.getElementById('selectedServiceId').value = serviceId;
    document.getElementById('bookingModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function submitBooking(e) {
    e.preventDefault();
    const booking = {
        id: Date.now(),
        serviceId: parseInt(document.getElementById('selectedServiceId').value),
        name: document.getElementById('bookingName').value,
        phone: document.getElementById('bookingPhone').value,
        email: document.getElementById('bookingEmail').value,
        notes: document.getElementById('bookingNotes').value,
        date: new Date().toLocaleDateString('hi-IN'),
        status: 'pending'
    };
    
    currentBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(currentBookings));
    
    alert('✅ आवेदन सफल! आपको जल्द ही WhatsApp पर रिमाइंडर मिलेगा।');
    document.getElementById('bookingForm').reset();
    closeModal();
    updateStats();
}

// Update Stats
function updateStats() {
    document.getElementById('totalServices').textContent = servicesData.length + '+';
    const pending = currentBookings.filter(b => b.status === 'pending').length;
    const completed = currentBookings.filter(b => b.status === 'completed').length;
    document.getElementById('pendingCount').textContent = pending;
    document.getElementById('completedCount').textContent = completed;
}

// Render Price Table
function renderPriceTable() {
    const tbody = document.getElementById('priceTableBody');
    const services = servicesData;
    let html = '';
    
    for (let i = 0; i < services.length; i += 2) {
        const service1 = services[i];
        const service2 = services[i + 1];
        
        html += `
            <tr>
                <td><strong>${service1.title}</strong><br/><span style="font-size: 11px; color: #999;">${service1.description}</span></td>
                <td style="color: #A25C3B; font-weight: 600;">${service1.fee}</td>
                ${service2 ? `
                    <td><strong>${service2.title}</strong><br/><span style="font-size: 11px; color: #999;">${service2.description}</span></td>
                    <td style="color: #A25C3B; font-weight: 600;">${service2.fee}</td>
                ` : '<td></td><td></td>'}
            </tr>
        `;
    }
    
    tbody.innerHTML = html;
}

// Render Customer Table
function renderCustomerTable() {
    const tbody = document.getElementById('customerTableBody');
    
    if (currentBookings.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px; color: #999;">अभी कोई रिकॉर्ड नहीं। कृपया जल्दी ही वापस आएँ या Quick Create करें!</td></tr>';
        return;
    }
    
    tbody.innerHTML = currentBookings.map(booking => {
        const service = servicesData.find(s => s.id === booking.serviceId);
        const statusClass = booking.status === 'pending' ? 'status-pending' : 'status-completed';
        const statusText = booking.status === 'pending' ? '⏳ पेंडिंग' : '✅ पूर्ण';
        
        return `
            <tr>
                <td><span class="${statusClass}">${statusText}</span></td>
                <td>${service ? service.title : 'N/A'}</td>
                <td><a href="https://wa.me/91${booking.phone.replace(/\D/g, '').slice(-10)}" target="_blank" class="whatsapp-link">${booking.phone}</a></td>
                <td>${booking.name}</td>
                <td>${booking.email || '-'}</td>
                <td>
                    <button class="detail-btn whatsapp" onclick="sendReminder(${booking.id})" style="padding: 6px 12px; font-size: 12px;">💬 Reminder</button>
                    <button style="padding: 6px 12px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;" onclick="deleteBooking(${booking.id})">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

function filterCustomers() {
    const query = document.getElementById('customerSearch').value.toLowerCase();
    const filtered = currentBookings.filter(b => 
        b.name.toLowerCase().includes(query) || 
        b.phone.includes(query) || 
        servicesData.find(s => s.id === b.serviceId)?.title.toLowerCase().includes(query)
    );
    
    // Show filtered results
    const tbody = document.getElementById('customerTableBody');
    tbody.innerHTML = filtered.map(booking => {
        const service = servicesData.find(s => s.id === booking.serviceId);
        const statusClass = booking.status === 'pending' ? 'status-pending' : 'status-completed';
        const statusText = booking.status === 'pending' ? '⏳ पेंडिंग' : '✅ पूर्ण';
        
        return `
            <tr>
                <td><span class="${statusClass}">${statusText}</span></td>
                <td>${service ? service.title : 'N/A'}</td>
                <td><a href="https://wa.me/91${booking.phone.replace(/\D/g, '').slice(-10)}" target="_blank" class="whatsapp-link">${booking.phone}</a></td>
                <td>${booking.name}</td>
                <td>${booking.email || '-'}</td>
                <td>
                    <button class="detail-btn whatsapp" onclick="sendReminder(${booking.id})" style="padding: 6px 12px; font-size: 12px;">💬 Reminder</button>
                    <button style="padding: 6px 12px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;" onclick="deleteBooking(${booking.id})">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

function sendReminder(bookingId) {
    const booking = currentBookings.find(b => b.id === bookingId);
    const service = servicesData.find(s => s.id === booking.serviceId);
    
    const message = `नमस्ते ${booking.name}!\n\n✅ आपकी सेवा: ${service.title}\n💰 शुल्क: ${service.fee}\n⏱️ समय: ${service.time}\n\n🔗 Official: ${service.officialLink}\n\nधन्यवाद! 🙏`;
    
    const phone = booking.phone.replace(/\D/g, '').slice(-10);
    window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function deleteBooking(bookingId) {
    if (confirm('क्या आप इस आवेदन को हटाना चाहते हैं?')) {
        currentBookings = currentBookings.filter(b => b.id !== bookingId);
        localStorage.setItem('bookings', JSON.stringify(currentBookings));
        renderCustomerTable();
        updateStats();
    }
}

function exportCSV() {
    let csv = 'नाम,फोन,ईमेल,सेवा,तारीख,स्टेटस\n';
    currentBookings.forEach(booking => {
        const service = servicesData.find(s => s.id === booking.serviceId);
        csv += `"${booking.name}","${booking.phone}","${booking.email}","${service.title}","${booking.date}","${booking.status}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bookings.csv';
    a.click();
}

function shareViaWhatsApp(serviceName) {
    const message = `मुझे ${serviceName} के बारे में जानकारी चाहिए।`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
}

function downloadGuide(serviceName) {
    alert('📥 गाइड डाउनलोड शुरू हो रहा है...');
    // यहाँ PDF generation code जोड़ा जा सकता है
}

function changeLanguage(lang) {
    if (lang === 'en') {
        alert('English version coming soon!');
    }
}

function logout() {
    if (confirm('क्या आप लॉगआउट करना चाहते हैं?')) {
        alert('आप लॉगआउट हो गए हैं।');
    }
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
