// ===============================
// GLOBAL STATE
// ===============================
let currentFarm = null;
let currentSlide = 0;
let allMedia = [];
let lastScrollPosition = 0;


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
            <div class="farm-card-price">₹${farm.priceWeekday}/night</div>
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

    // Save scroll position BEFORE opening detail page
    lastScrollPosition = window.scrollY;

    currentFarm = farmHousesData[farmName];
    if (!currentFarm) return;

    allMedia = [...currentFarm.images, ...currentFarm.videos];
    currentSlide = 0;

    const detailPage = document.getElementById("detailPage");
    detailPage.innerHTML = renderDetailPage(currentFarm);
    detailPage.classList.remove("hidden");

    // Hide home layout
    document.body.style.overflow = "hidden";
    document.querySelector(".farms-section").style.display = "none";
    document.querySelector(".hero-section").style.display = "none";

    setupSlider();

    // ⭐ FIX: force scroll to top properly
    setTimeout(() => {
        // Scroll window to top
        window.scrollTo(0, 0);

        // Scroll detail page container also to top
        detailPage.scrollTop = 0;
    }, 10);
}



// ===============================
// DETAIL PAGE COMPONENT
// ===============================
function renderDetailPage(farm) {

    const weekdayPrice = farm.priceWeekday;
    const weekendPrice = farm.priceWeekend;

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
                                <p class="pricing-amount weekday">₹${weekdayPrice}</p>
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
                    </div>

                    <div class="contact-card">
                        <h3 class="contact-card-title">Contact Information</h3>
                        <p class="contact-label">Booking Hotline & WhatsApp</p>
                        <a href="tel:+91${farm.phone}" class="contact-phone">+91 ${farm.phone}</a>
                    </div>

                    <div class="social-card">
    <h3 class="social-card-title">Follow Us</h3>

    <a href="${farm.instagram}" target="_blank" class="farm-insta-btn">
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" class="farm-insta-icon">
        @${farm.name.replace(/\s+/g, '_').toLowerCase()}
    </a>
</div>

                </div>
            </div>
        </div>
    `;
}

// ===============================
// SLIDER FUNCTIONS
// ===============================
function setupSlider() {
    renderSlide();
    renderDots();

    // ===== SWIPE SUPPORT =====
    let touchStartX = 0;
    let touchEndX = 0;

    const slider = document.querySelector('.farm-slider');

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;

        // Swipe left → next slide
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }

        // Swipe right → previous slide
        if (touchEndX > touchStartX + 50) {
            previousSlide();
        }
    });
}


function renderSlide() {
    const container = document.getElementById("sliderContainer");
    const media = allMedia[currentSlide];

    const isVideo = media.endsWith(".mp4") || media.includes("video");

    container.innerHTML = isVideo
        ? `<video class="slider-media" controls autoplay muted playsinline>
                <source src="${media}" type="video/mp4">
           </video>`
        : `<img src="${media}" class="slider-media">`;
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

    // ⭐ Restore scroll position after DOM becomes visible
    setTimeout(() => {
        window.scrollTo({ top: lastScrollPosition, behavior: "instant" });
    }, 50);
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
            document.getElementById("durationDisplay").innerHTML = `<strong>${days} Days</strong>`;

            const weekdayPrice = currentFarm.priceWeekday;
            const weekendPrice = currentFarm.priceWeekend;

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

    const weekdayPrice = currentFarm.priceWeekday;
    const weekendPrice = currentFarm.priceWeekend;

    const message = `
-----------------------------------------
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



