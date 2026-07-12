// Global Variables
let currentServiceId = null;
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

// Page Navigation
function showHome() {
    switchPage('homePage');
}

function showServices() {
    switchPage('servicesPage');
    renderServices();
}

function showAdmin() {
    switchPage('adminPage');
    showAdminTab('pending');
}

function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Render Services
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = servicesData.filter(s => 
        s.title.toLowerCase().includes(search) ||
        s.description.toLowerCase().includes(search)
    );
    
    grid.innerHTML = filtered.map(service => `
        <div class="service-card" onclick="showServiceDetail(${service.id})">
            <div class="service-header">
                <span class="service-icon">${service.icon}</span>
                <span class="service-category">${service.category === 'document' ? '📋 दस्तावेज़' : '🏦 बैंकिंग'}</span>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
            <div class="service-info">
                <span>💰 ${service.fee}</span>
                <span>⏱️ ${service.time}</span>
            </div>
            <button class="detail-btn">विस्तार से देखें →</button>
        </div>
    `).join('');
}

// Show Service Detail
function showServiceDetail(id) {
    const service = servicesData.find(s => s.id === id);
    currentServiceId = id;
    
    const detailHTML = `
        <div class="detail-header">
            <h2>${service.icon} ${service.title}</h2>
            <p>${service.description}</p>
        </div>
        
        <div class="detail-grid">
            <div class="detail-box">
                <h3>💰 शुल्क</h3>
                <p>${service.fee}</p>
            </div>
            <div class="detail-box">
                <h3>⏱️ समय अवधि</h3>
                <p>${service.time}</p>
            </div>
            <div class="detail-box">
                <h3>📞 सहायता</h3>
                <p>${service.contactCenter}</p>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>📋 आवश्यक दस्तावेज़</h3>
            <ul>
                ${service.documents.map(doc => `<li>✓ ${doc}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h3>📝 Step-by-Step Guide</h3>
            <ol class="steps-list">
                ${service.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        
        <div class="detail-section">
            <h3>🔗 Official Website</h3>
            <a href="${service.officialLink}" target="_blank" class="official-link">👉 ${service.officialLink}</a>
        </div>
        
        <div class="detail-actions">
            <button class="action-btn" onclick="openBooking()">✅ आवेदन करें</button>
            <button class="action-btn whatsapp-btn" onclick="shareWhatsApp('${service.title}')">💬 WhatsApp करें</button>
            <button class="action-btn download-btn" onclick="downloadGuide('${service.title}')">📥 गाइड डाउनलोड करें</button>
        </div>
    `;
    
    document.getElementById('detailContent').innerHTML = detailHTML;
    switchPage('detailPage');
}

// Booking Functions
function openBooking() {
    document.getElementById('bookingModal').style.display = 'block';
}

function closeBooking() {
    document.getElementById('bookingModal').style.display = 'none';
}

function submitBooking(e) {
    e.preventDefault();
    
    const service = servicesData.find(s => s.id === currentServiceId);
    const booking = {
        id: Date.now(),
        serviceId: currentServiceId,
        serviceName: service.title,
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        customerEmail: document.getElementById('customerEmail').value,
        notes: document.getElementById('customerNotes').value,
        date: new Date().toLocaleDateString('hi-IN'),
        status: 'pending',
        fee: service.fee
    };
    
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    alert('✅ आपका आवेदन सफलतापूर्वक जमा हो गया!\n\nआपको WhatsApp पर reminder भेजा जाएगा।');
    closeBooking();
    document.getElementById('bookingForm').reset();
}

// Admin Panel
function showAdminTab(type) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    let filteredBookings = bookings;
    if (type === 'pending') filteredBookings = bookings.filter(b => b.status === 'pending');
    if (type === 'completed') filteredBookings = bookings.filter(b => b.status === 'completed');
    
    const content = document.getElementById('adminContent');
    
    if (filteredBookings.length === 0) {
        content.innerHTML = '<p class="no-data">कोई डेटा नहीं</p>';
        return;
    }
    
    content.innerHTML = `
        <div class="admin-table">
            <table>
                <thead>
                    <tr>
                        <th>नाम</th>
                        <th>सेवा</th>
                        <th>फोन</th>
                        <th>तिथि</th>
                        <th>स्थिति</th>
                        <th>कार्य</th>
                    </tr>
                </thead>
                <tbody>
                    ${filteredBookings.map(booking => `
                        <tr>
                            <td>${booking.customerName}</td>
                            <td>${booking.serviceName}</td>
                            <td><a href="https://wa.me/91${booking.customerPhone.slice(-10)}" target="_blank">${booking.customerPhone}</a></td>
                            <td>${booking.date}</td>
                            <td>
                                <select onchange="updateStatus(${booking.id}, this.value)" class="status-select">
                                    <option value="pending" ${booking.status === 'pending' ? 'selected' : ''}>⏳ पेंडिंग</option>
                                    <option value="completed" ${booking.status === 'completed' ? 'selected' : ''}>✅ पूरी</option>
                                </select>
                            </td>
                            <td>
                                <button onclick="sendReminder(${booking.id})" class="action-btn">💬 Reminder</button>
                                <button onclick="deleteBooking(${booking.id})" class="delete-btn">🗑️</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function updateStatus(id, status) {
    const booking = bookings.find(b => b.id === id);
    if (booking) {
        booking.status = status;
        localStorage.setItem('bookings', JSON.stringify(bookings));
        showAdminTab('all');
    }
}

function sendReminder(id) {
    const booking = bookings.find(b => b.id === id);
    const service = servicesData.find(s => s.id === booking.serviceId);
    
    const message = `नमस्ते ${booking.customerName}!\n\n✅ आपकी सेवा: ${booking.serviceName}\n💰 शुल्क: ${booking.fee}\n⏱️ समय: ${service.time}\n\n📋 Step-by-step guide के लिए हमारी website देखें।\n\nधन्यवाद! 🙏`;
    
    const whatsappUrl = `https://wa.me/91${booking.customerPhone.slice(-10)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function deleteBooking(id) {
    if (confirm('क्या आप यह आवेदन हटाना चाहते हैं?')) {
        bookings = bookings.filter(b => b.id !== id);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        showAdminTab('all');
    }
}

// WhatsApp Share
function shareWhatsApp(serviceName) {
    const message = `नमस्ते! मुझे ${serviceName} के बारे में जानकारी चाहिए। कृपया विस्तार से बताएं।`;
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`; // अपना number डालें
    window.open(whatsappUrl, '_blank');
}

// Download Guide
function downloadGuide(serviceName) {
    alert('📥 Guide डाउनलोड हो रही है...');
    // आप यहाँ PDF generation कोड जोड़ सकते हैं
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', renderServices);
    }
});

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}