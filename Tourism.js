// Tourist places data
const touristPlaces = [
  {
    id: 1,
    name: "Hundru Falls",
    category: "waterfall",
    description: "A breathtaking 320 feet waterfall cascading down rocky terrain, surrounded by lush green forests.",
    fullDescription:
      "Hundru Falls is one of the most spectacular waterfalls in Jharkhand, dropping 320 feet from the Subarnarekha River. Located 45 km from Ranchi, this natural wonder is surrounded by dense forests and rocky landscapes. The falls are at their most magnificent during the monsoon season when the water flow is at its peak. Visitors can enjoy the scenic beauty from multiple viewing points and experience the refreshing mist created by the cascading water.",
    image: "images/hundru-falls-waterfall-jharkhand.jpg",
    lat: 23.4434,
    lng: 85.5871,
    bestTime: "July - October",
    distance: "45 km from Ranchi",
    activities: "Photography, Nature walks, Picnicking",
    gallery: ["images/hundru-falls-view-1.jpg", "images/hundru-falls-view-2.jpg", "images/hundru-falls-rocks.jpg"],
  },
  {
    id: 2,
    name: "Deoghar",
    category: "temple",
    description:
      "A sacred pilgrimage town famous for the Baidyanath Jyotirlinga Temple, one of the twelve Jyotirlingas.",
    fullDescription:
      "Deoghar, meaning 'Home of the Gods,' is one of the most important pilgrimage sites in India. The town is renowned for the Baidyanath Temple, housing one of the twelve Jyotirlingas of Lord Shiva. During the holy month of Shravan, millions of devotees undertake the 'Kanwar Yatra,' carrying holy water from the Ganges to offer at the temple. The town also features numerous other temples, beautiful parks, and scenic landscapes, making it a perfect blend of spirituality and natural beauty.",
    image: "images/baidyanath-temple-deoghar.jpg",
    lat: 24.4852,
    lng: 86.7012,
    bestTime: "October - March",
    distance: "250 km from Ranchi",
    activities: "Temple visits, Spiritual retreats, Cultural exploration",
    gallery: ["images/deoghar-temple-front.jpg", "images/deoghar-temple-night.jpg", "images/deoghar-pilgrims.jpg"],
  },
  {
    id: 3,
    name: "Patratu Valley",
    category: "valley",
    description: "A picturesque valley offering stunning sunset views and a beautiful dam surrounded by hills.",
    fullDescription:
      "Patratu Valley is a hidden gem located approximately 40 km from Ranchi. The valley is famous for its mesmerizing sunset views, where the sun dips behind the Patratu Dam, creating a spectacular display of colors across the sky. The area features winding roads through hills, lush greenery, and the serene Patratu Dam. It's a popular spot for road trips, photography, and picnics. The valley provides a perfect escape from city life and offers numerous viewpoints for nature enthusiasts.",
    image: "images/patratu-valley-sunset-dam.jpg",
    lat: 23.6858,
    lng: 85.1656,
    bestTime: "September - February",
    distance: "40 km from Ranchi",
    activities: "Sunset viewing, Photography, Road trips",
    gallery: ["images/patratu-valley-sunset.jpg", "images/patratu-dam-aerial.jpg", "images/patratu-hills.jpg"],
  },
  {
    id: 4,
    name: "Netarhat",
    category: "hill-station",
    description: "Known as the 'Queen of Chotanagpur,' this hill station offers breathtaking sunrise and sunset views.",
    fullDescription:
      "Netarhat, often referred to as the 'Queen of Chotanagpur,' is a beautiful hill station situated at an altitude of 1,128 meters. It's famous for its spectacular sunrise and sunset points, dense forests, and pleasant weather throughout the year. The town is surrounded by valleys and offers panoramic views of the surrounding hills. Magnolia Point and Koel View Point are popular attractions. Netarhat also houses a residential school and is known for its pine forests and tribal culture.",
    image: "images/netarhat-sunrise-point.jpg",
    lat: 23.4676,
    lng: 84.2608,
    bestTime: "October - March",
    distance: "156 km from Ranchi",
    activities: "Trekking, Nature photography, Camping",
    gallery: ["images/netarhat-hills-sunrise.jpg", "images/netarhat-forest-view.jpg", "images/netarhat-hills.jpg"],
  },
  {
    id: 5,
    name: "Betla National Park",
    category: "wildlife",
    description: "One of the first national parks in India, home to tigers, elephants, and diverse flora and fauna.",
    fullDescription:
      "Betla National Park, located in the Palamu district, is one of India's earliest national parks established in 1974. Spread across 250 square kilometers, it's part of the Palamu Tiger Reserve. The park is home to Bengal tigers, Indian elephants, leopards, wild boars, deer, and numerous bird species. The landscape features dense forests, grasslands, and rivers. Visitors can enjoy jeep safaris, nature walks, and wildlife photography. The park also has historical significance with ancient forts within its boundaries.",
    image: "images/betla-national-park.jpg",
    lat: 23.8697,
    lng: 84.192,
    bestTime: "November - June",
    distance: "170 km from Ranchi",
    activities: "Wildlife safari, Bird watching, Trekking",
    gallery: [
      "images/betla-national-park-view.jpg",
      "images/betla-wildlife-safari.jpg",
      "images/betla-forest.jpg",
    ],
  },
  {
    id: 6,
    name: "Jonha Falls",
    category: "waterfall",
    description: "Also known as Gautamdhara, this 43-meter waterfall is surrounded by dense forests and temples.",
    fullDescription:
      "Jonha Falls, also called Gautamdhara, is a beautiful 43-meter waterfall located 40 km from Ranchi. According to legend, Lord Buddha once meditated here, giving the falls its alternate name. The waterfall is surrounded by dense forests and rocky cliffs, creating a serene and mystical atmosphere. A temple dedicated to Lord Shiva is located at the base of the falls. The site involves a trek down approximately 750 steps, making it an adventure for nature lovers and pilgrims alike.",
    image: "images/jonha-falls.jpeg",
    lat: 23.2771,
    lng: 85.4297,
    bestTime: "July - December",
    distance: "40 km from Ranchi",
    activities: "Trekking, Temple visits, Photography",
    gallery: [
      "images/jonha-falls-view-1.jpeg",
      "images/jonha-falls-view-2.jpeg",
      "images/jonha-falls-view-3.jpeg",
    ],
  },
  {
    id: 7,
    name: "Tagore Hill",
    category: "hill-station",
    description: "A scenic hilltop where Rabindranath Tagore found inspiration, offering panoramic city views.",
    fullDescription:
      "Tagore Hill, located in Morabadi, Ranchi, is a historic hilltop where Nobel laureate Rabindranath Tagore used to spend time during his visits to the city. The peaceful environment and panoramic views inspired much of his creative work. The hill features a beautiful rock garden, a temple, and well-maintained pathways. At the summit stands a memorial dedicated to Tagore. The site offers stunning views of Ranchi city and is a popular spot for morning walks, picnics, and meditation.",
    image: "images/tagore-hill.jpg",
    lat: 23.3569,
    lng: 85.3221,
    bestTime: "October - March",
    distance: "5 km from Ranchi center",
    activities: "Morning walks, Meditation, City views",
    gallery: [
      "images/tagore-hill-view-1.jpeg",
      "images/tagore-hill-view-2.jpeg",
      "images/tagore-hill-view-3.jpeg",
    ],
  },
  {
    id: 8,
    name: "Dassam Falls",
    category: "waterfall",
    description: "A majestic waterfall dropping from 144 feet, creating a beautiful cascade and natural pool.",
    fullDescription:
      "Dassam Falls, located on the Kanchi River, is a spectacular waterfall plunging 144 feet. The name 'Dassam' comes from the local Mundari language, meaning 'act of pouring water.' The falls create a wide cascade flowing over rocky terrain, forming natural pools at the base. Surrounded by dense forests, it's a popular picnic spot and attracts nature lovers and photographers. The falls are especially impressive during the monsoon season. The area also features several small streams and walking trails.",
    image: "images/dassam-falls.jpg",
    lat: 23.204,
    lng: 85.5381,
    bestTime: "July - October",
    distance: "40 km from Ranchi",
    activities: "Picnicking, Swimming, Photography",
    gallery: [
      "images/dassam-falls-view-1.jpeg",
      "images/dassam-falls-view-2.jpeg",
      "images/dassam-falls-view-3.jpeg",
    ],
  },
]

// Import Leaflet library
const L = window.L

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderDestinations(touristPlaces)
  initializeMap()
  initializeSearch()
  initializeFilters()
  initializeMobileMenu()
  initializeNavbar()
  initializeLazyLoading()
})

// Render destination cards
function renderDestinations(places) {
  const grid = document.getElementById("destinationsGrid")
  grid.innerHTML = ""

  if (places.length === 0) {
    grid.innerHTML =
      '<p style="text-align: center; grid-column: 1/-1; color: var(--text-light); font-size: 1.2rem;">No destinations found. Try a different search or filter.</p>'
    return
  }

  places.forEach((place, index) => {
    const card = document.createElement("div")
    card.className = "destination-card"
    card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`
    card.style.opacity = "0"
    card.onclick = () => openModal(place)

    card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" class="card-image" loading="lazy">
            <div class="card-content">
                <h3 class="card-title">${place.name}</h3>
                <span class="card-category">${place.category.replace("-", " ")}</span>
                <p class="card-description">${place.description}</p>
            </div>
        `

    grid.appendChild(card)
  })
}

// Initialize map
function initializeMap() {
  const mapContainer = document.getElementById("mapContainer")
  const map = L.map(mapContainer).setView([23.3441, 85.3096], 8)

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map)

  // Custom icon
  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `<div style="background: var(--forest-green); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">📍</div>`,
    iconSize: [30, 30],
  })

  // Add markers
  touristPlaces.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], { icon: customIcon }).addTo(map)

    marker.bindPopup(
      `
            <div style="text-align: center; min-width: 200px;">
                <img src="${place.image}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
                <h4 style="margin: 0 0 5px 0; color: var(--forest-green);">${place.name}</h4>
                <p style="margin: 0 0 10px 0; font-size: 0.9rem; color: var(--text-light);">${place.description.substring(0, 80)}...</p>
                <button onclick="openModal(touristPlaces.find(p => p.id === ${place.id}))" style="padding: 8px 16px; background: var(--sage-green); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: 600;">View Details</button>
            </div>
        `,
      {
        maxWidth: 250,
      },
    )
  })
}

// Search functionality
function initializeSearch() {
  const searchInput = document.getElementById("searchInput")
  let searchTimeout

  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      const searchTerm = e.target.value.toLowerCase()
      const activeCategory = document.querySelector(".filter-btn.active").dataset.category

      let filtered = touristPlaces

      // Apply category filter
      if (activeCategory !== "all") {
        filtered = filtered.filter((place) => place.category === activeCategory)
      }

      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(
          (place) =>
            place.name.toLowerCase().includes(searchTerm) ||
            place.description.toLowerCase().includes(searchTerm) ||
            place.category.toLowerCase().includes(searchTerm),
        )
      }

      renderDestinations(filtered)
    }, 300)
  })
}

// Filter functionality
function initializeFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active state
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      const category = this.dataset.category
      const searchTerm = document.getElementById("searchInput").value.toLowerCase()

      let filtered = touristPlaces

      // Apply category filter
      if (category !== "all") {
        filtered = filtered.filter((place) => place.category === category)
      }

      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(
          (place) =>
            place.name.toLowerCase().includes(searchTerm) || place.description.toLowerCase().includes(searchTerm),
        )
      }

      renderDestinations(filtered)
    })
  })
}

// Modal functionality
function openModal(place) {
  const modal = document.getElementById("modal")
  const modalBody = document.getElementById("modalBody")

  let galleryHTML = ""
  if (place.gallery && place.gallery.length > 0) {
    galleryHTML = `
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--forest-green);">Gallery</h3>
            <div class="modal-gallery">
                ${place.gallery.map((img) => `<img src="${img}" alt="${place.name}" class="gallery-image" loading="lazy">`).join("")}
            </div>
        `
  }

  modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${place.image}" alt="${place.name}" class="modal-image">
        </div>
        <div class="modal-body-content">
            <h2 class="modal-title">${place.name}</h2>
            <span class="modal-category">${place.category.replace("-", " ")}</span>
            <p class="modal-description">${place.fullDescription}</p>
            
            <div class="modal-details">
                <div class="detail-item">
                    <div class="detail-label">Best Time to Visit</div>
                    <div class="detail-value">${place.bestTime}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Distance</div>
                    <div class="detail-value">${place.distance}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Activities</div>
                    <div class="detail-value">${place.activities}</div>
                </div>
            </div>
            
            ${galleryHTML}
        </div>
    `

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modal = document.getElementById("modal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Mobile menu
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navMenu = document.getElementById("navMenu")

  mobileMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active")
    this.classList.toggle("active")
  })

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      mobileMenuBtn.classList.remove("active")
    })
  })
}

// Navbar scroll effect
function initializeNavbar() {
  const navbar = document.getElementById("navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  section.scrollIntoView({ behavior: "smooth" })
}

// Lazy loading images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target
          image.src = image.src
          image.classList.add("loaded")
          observer.unobserve(image)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Close modal on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".destination-card, .section-title, .section-subtitle")
  elements.forEach((el) => observer.observe(el))
})
