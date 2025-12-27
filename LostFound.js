// Simulated database (10 items)
let itemsDB = [
  {
    name: "Black Mobile Phone",
    description: "Android phone with cracked screen",
    location: "Railway Station",
    contact: "9876543210",
    type: "Lost",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    name: "College ID Card",
    description: "Engineering college ID",
    location: "Library",
    contact: "9123456780",
    type: "Found",
    image: "https://images.unsplash.com/photo-1581091012184-5c1f6c3c2a3c"
  },
  {
    name: "Brown Wallet",
    description: "Leather wallet with cash",
    location: "Bus Stand",
    contact: "9988776655",
    type: "Lost",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693"
  },
  {
    name: "Bike Keys",
    description: "Hero Honda key with keychain",
    location: "Parking Area",
    contact: "9001122334",
    type: "Found",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  },
  {
    name: "Laptop Bag",
    description: "Black Dell laptop bag",
    location: "Metro Station",
    contact: "8899776655",
    type: "Lost",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    name: "Water Bottle",
    description: "Blue steel bottle",
    location: "Gym",
    contact: "9345678123",
    type: "Found",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
  },
  {
    name: "Earphones",
    description: "Wireless earbuds",
    location: "College Canteen",
    contact: "9090909090",
    type: "Lost",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693"
  },
  {
    name: "School Bag",
    description: "Red school bag",
    location: "Playground",
    contact: "9871234560",
    type: "Found",
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f"
  },
  {
    name: "Watch",
    description: "Black digital watch",
    location: "Temple",
    contact: "8888888888",
    type: "Lost",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Helmet",
    description: "Black bike helmet",
    location: "Traffic Signal",
    contact: "9012345678",
    type: "Found",
    image: "https://images.unsplash.com/photo-1602526219043-3f7b2b2a8c65"
  }
];

const itemsDiv = document.getElementById("items");

// Render items
function renderItems(data) {
  itemsDiv.innerHTML = "";

  if (data.length === 0) {
    itemsDiv.innerHTML = "<p>No items found</p>";
    return;
  }

  data.forEach(item => {
    itemsDiv.innerHTML += `
      <div class="item">
        <img src="${item.image}">
        <div>
          <h3>${item.name}
            <span class="badge ${item.type.toLowerCase()}">${item.type}</span>
          </h3>
          <p>${item.description}</p>
          <p><b>Location:</b> ${item.location}</p>
          <p><b>Contact:</b> ${item.contact}</p>
        </div>
      </div>
    `;
  });
}

// Search & Filter
function applyFilters() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const type = document.getElementById("filterType").value;

  const filtered = itemsDB.filter(item => {
    const matchesText =
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search);

    const matchesType = type === "All" || item.type === type;

    return matchesText && matchesType;
  });

  renderItems(filtered);
}

// Add new item
function addItemToDB(item) {
  itemsDB.unshift(item);
  applyFilters();
}

// Initial render
renderItems(itemsDB);
