// ===============================
// GLOBAL STATE
// ===============================
let currentFarm = null;
let currentSlide = 0;
let allMedia = [];

// ===============================
// INITIALIZE APP ON LOAD
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    initializeApp();
    setupEventListeners();
    renderFarmCards();
});

// ===============================
// INITIALIZE APP
// ===============================
function initializeApp() {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("checkInDate").min = today;
    document.getElementById("checkOutDate").min = today;

    window.addEventListener("scroll", handleNavbarScroll);
}

// ===============================
// EVENT LISTENERS
// ===============================
function setupEventListeners() {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
            navMenu.classList.remove("active");
        });
    });

    const bookingForm = document.getElementById("bookingForm");
    bookingForm.addEventListener("submit", handleBookingSubmit);

    document.getElementById("checkInDate").addEventListener("change", updateBookingDetails);
    document.getElementById("checkOutDate").addEventListener("change", updateBookingDetails);
}

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
function handleNavbarScroll() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
}

// ===============================
// RENDER FARM CARDS
// ===============================
function renderFarmCards() {
    const grid = document.getElementById("farmsGrid");
    grid.innerHTML = "";

    Object.keys(farmHousesData).forEach((farmName) => {
        const farm = farmHousesData[farmName];
        grid.appendChild(createFarmCard(farm));
    });
}

// ===============================
// FARM CARD COMPONENT
// ===============================
function createFarmCard(farm) {
    const card = document.createElement("div");
    card.className = "farm-card";
    card.onclick = () => showFarmDetail(farm.name);

    card.innerHTML = `
        <div class="farm-card-image">
            <img src="${farm.images[0]}" alt="${farm.name}">
            <div class="farm-card-overlay"></div>
        </div>
        <div class="farm-card-content">
            <div class="farm-card-price">₹${farm.price}/night</div>
            <h3 class="farm-card-title">${farm.name}</h3>
            
        </div>
        <button class="farm-card-btn">View Details</button>
    `;

    return card;
}

// ===============================
// AMENITY ICONS
// ===============================
function getAmenityIcon(name) {
    const icons = {
        "Swimming Pool": "🏊‍♂️",
        "Bonfire": "🔥",
        "Cycling Track": "🚴‍♂️",
        "Projector & Outdoor Screening": "🎥",
        "Fully Air-Conditioned Bedrooms": "🛏️",
        "Landscaped Gardens": "🌳",
        "Indoor Games": "🎮",
        "BBQ Area": "🍖"
    };

    return icons[name] || "✓";
}

// ===============================
// SHOW FARM DETAIL PAGE
// ===============================
function showFarmDetail(farmName) {
    currentFarm = farmHousesData[farmName];
    if (!currentFarm) return;

    allMedia = [...currentFarm.images, ...currentFarm.videos];
    currentSlide = 0;

    const detailPage = document.getElementById("detailPage");
    detailPage.innerHTML = renderDetailPage(currentFarm);
    detailPage.classList.remove("hidden");

    document.body.style.overflow = "hidden";
    document.querySelector(".farms-section").style.display = "none";
    document.querySelector(".hero-section").style.display = "none";

    // ❌ Removed footer hide line
    // document.querySelector(".footer").style.display = "none";

    setupSlider();
}

// ===============================
// DETAIL PAGE COMPONENT
// ===============================
function renderDetailPage(farm) {
    const weekendPrice = farm.price * 2;

    return `
        <div class="detail-container">

            <div class="detail-header">
                <button onclick="closeDetailPage()" class="back-btn">
                    <svg width="24" height="24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    <span>Back to Home</span>
                </button>
            </div>

            <div class="farm-slider">
                <div class="slider-container" id="sliderContainer"></div>
                <button class="slider-btn slider-prev" onclick="previousSlide()"><svg width="28" height="28"><path d="M15 18l-6-6 6-6"/></svg></button>
                <button class="slider-btn slider-next" onclick="nextSlide()"><svg width="28" height="28"><path d="M9 18l6-6-6-6"/></svg></button>
                <div class="slider-dots" id="sliderDots"></div>
                <div class="slider-info">
                    <h1 class="slider-title">${farm.name}</h1>
                    <div class="slider-subtitle"><span>Premium Luxury Villa</span><span class="slider-stars">⭐⭐⭐⭐⭐</span></div>
                </div>
            </div>

            <div class="detail-content">

                <div class="detail-main">

                    <section class="detail-section">
                        <h2 class="detail-title">About ${farm.name}</h2>
                        <p class="detail-text">${farm.description}</p>
                    </section>

                    <section class="detail-section">
                        <h2 class="detail-title">Premium Amenities</h2>

                        <div class="amenities-grid">
                            ${farm.amenities.map((amenity) => {
                                return `
                                    <div class="amenity-card">
                                        <div class="amenity-icon">${getAmenityIcon(amenity)}</div>
                                        <h3 class="amenity-name">${amenity}</h3>
                                    </div>
                                `;
                            }).join("")}
                        </div>
                    </section>

                    <section class="detail-section">
    <h2 class="detail-title">Location</h2>
    <div class="map-container">
        <iframe src="${farm.mapUrl}" width="100%" height="450" style="border:0;" allowfullscreen loading="lazy"></iframe>
    </div>
    <a href="${farm.openMapUrl}" target="_blank" class="map-link">
        <svg width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Open in Google Maps
    </a>
</section>


                </div>

                <div class="detail-sidebar">

                    <div class="pricing-card">
                        <h3 class="pricing-card-title">Pricing</h3>

                        <div class="pricing-item">
                            <div>
                                <p class="pricing-label">Weekday Price</p>
                                <p class="pricing-days">(Mon-Thu)</p>
                            </div>
                            <div class="pricing-amount-container">
                                <p class="pricing-amount weekday">₹${farm.price}</p>
                                <p class="pricing-per">per night / 24hrs</p>
                            </div>
                        </div>

                        <div class="pricing-item">
                            <div>
                                <p class="pricing-label">Weekend Price</p>
                                <p class="pricing-days">(Fri-Sun)</p>
                            </div>
                            <div class="pricing-amount-container">
                                <p class="pricing-amount weekend">₹${weekendPrice}</p>
                                <p class="pricing-per">per night / 24hrs</p>
                            </div>
                        </div>
                    </div>

                    <div class="booking-card">
                        <h3 class="booking-card-title">Reserve Your Stay</h3>
                        <button onclick="openBookingModal('${farm.name}')" class="btn-reserve">Reserve Now</button>
                        <p class="booking-card-text">Send booking request via WhatsApp</p>
                            <p class="booking-info-note">
        When you tap Reserve, your selected dates will be sent to us on WhatsApp for availability check. 
        Our team will contact you to confirm your booking. You can also call us directly anytime.
    </p>

                    </div>

                    <div class="contact-card">
                        <h3 class="contact-card-title">Contact Information</h3>
                        <p class="contact-label">Booking Hotline & WhatsApp</p>
                        <a href="tel:+91${farm.phone}" class="contact-phone">+91 ${farm.phone}</a>
                    </div>

                    <div class="social-card">
                        <h3 class="social-card-title">Follow Us</h3>

                        <a href="${farm.instagram}" target="_blank" class="instagram-link">
                            <div class="instagram-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.5 5.5 0 0012 7.5zm0 9A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 16.5zm4.8-10.9a1.3 1.3 0 11-1.3 1.3 1.3 1.3 0 011.3-1.3z"/>
                                </svg>
                            </div>

                            <span class="instagram-text">Instagram</span>
                        </a>
                    </div>

                    <div class="badge-card">
                        <span class="badge-check">✓ License Approved</span>
                        <div class="badge-stars">⭐⭐⭐⭐⭐</div>
                        <p class="badge-text">Certified & Verified Property</p>
                    </div>

                </div>

            </div>

        </div>
    `;
}

// ===============================
// SLIDER CONTROLS
// ===============================
function setupSlider() {
    renderSlide();
    renderDots();
}

function renderSlide() {
    const container = document.getElementById("sliderContainer");
    const media = allMedia[currentSlide];

    // Detect video correctly
    const isVideo =
        media.endsWith(".mp4") ||
        media.includes(".mp4") ||
        media.includes("video/upload") ||
        media.includes("/video/");

    // Insert video or image
    container.innerHTML = isVideo
        ? `
            <video class="slider-media" controls autoplay muted playsinline>
                <source src="${media}" type="video/mp4">
            </video>
        `
        : `<img src="${media}" class="slider-media">`;

    // ⭐ FIX: Enable volume button (tap to unmute)
    const video = container.querySelector("video");

    if (video) {
        video.addEventListener("click", () => {
            if (video.muted) video.muted = false; // unmute on first tap
        }, { once: true });
    }
}




function renderDots() {
    const dots = document.getElementById("sliderDots");
    dots.innerHTML = allMedia
        .map((_, i) => `<button class="slider-dot ${i === currentSlide ? "active" : ""}" onclick="goToSlide(${i})"></button>`)
        .join("");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % allMedia.length;
    renderSlide();
    renderDots();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + allMedia.length) % allMedia.length;
    renderSlide();
    renderDots();
}

function goToSlide(i) {
    currentSlide = i;
    renderSlide();
    renderDots();
}

// ===============================
// CLOSE DETAIL PAGE
// ===============================
function closeDetailPage() {
    document.getElementById("detailPage").classList.add("hidden");
    document.body.style.overflow = "";

    document.querySelector(".farms-section").style.display = "block";
    document.querySelector(".hero-section").style.display = "flex";

    // ✅ Show footer again
    document.querySelector(".footer").style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ===============================
// BOOKING MODAL
// ===============================
function openBookingModal(farmName) {
    currentFarm = farmHousesData[farmName];
    document.getElementById("modalFarmName").textContent = farmName;
    document.getElementById("bookingModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeBookingModal() {
    document.getElementById("bookingModal").classList.add("hidden");
    document.body.style.overflow = "";
    document.getElementById("bookingForm").reset();
    document.getElementById("pricingSummary").classList.add("hidden");
}

// ===============================
// UPDATE BOOKING DETAILS
// ===============================
function updateBookingDetails() {
    const checkIn = document.getElementById("checkInDate").value;
    const checkOut = document.getElementById("checkOutDate").value;
    const submitBtn = document.getElementById("submitBtn");

    if (checkIn && checkOut) {
        const days = calculateDays(checkIn, checkOut);

        if (days > 0) {
            document.getElementById("durationDisplay").innerHTML = `<strong>${days} ${days === 1 ? "Day" : "Days"}</strong>`;

            const weekdayPrice = currentFarm.price;
            const weekendPrice = weekdayPrice * 2;

            document.getElementById("weekdayPrice").textContent = `₹${weekdayPrice}/night`;
            document.getElementById("weekendPrice").textContent = `₹${weekendPrice}/night`;
            document.getElementById("totalDays").textContent = `${days} days`;

            document.getElementById("pricingSummary").classList.remove("hidden");
            submitBtn.disabled = false;
            submitBtn.classList.add("active");
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove("active");
        }
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove("active");
    }

    if (checkIn) document.getElementById("checkOutDate").min = checkIn;
}

// ===============================
// DATE CALCULATION
// ===============================
function calculateDays(checkIn, checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
}

// ===============================
// FINAL BOOKING SUBMIT
// ===============================
function handleBookingSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const checkIn = document.getElementById("checkInDate").value;
    const checkOut = document.getElementById("checkOutDate").value;
    const days = calculateDays(checkIn, checkOut);

    const weekdayPrice = currentFarm.price;
    const weekendPrice = weekdayPrice * 2;

    const message = `-----------------------------------------
📌 Farm House Booking Request

Farm House Name : ${currentFarm.name}
Weekday Price (per night) : ₹${weekdayPrice}
Weekend Price (per night) : ₹${weekendPrice}

Booking Details:
Check-in Date  : ${checkIn}
Check-out Date : ${checkOut}
Number of Days : ${days}

Customer Details:
Name  : ${name}
Email : ${email}
Phone : ${phone}

Kindly confirm the availability.
-----------------------------------------`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/91${WHATSAPP_PHONE}?text=${encoded}`;

    window.open(url, "_blank");
    closeBookingModal();
}

// ===============================
// OPEN WHATSAPP DIRECTLY
// ===============================
function openWhatsApp() {
    const message = encodeURIComponent("Hi, I would like to inquire about booking a farm house.");
    window.open(`https://wa.me/91${WHATSAPP_PHONE}?text=${message}`, "_blank");
}