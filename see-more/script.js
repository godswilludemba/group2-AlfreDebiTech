document.addEventListener("DOMContentLoaded", function () {
  const phoneFiguresContainers = document.querySelectorAll(".phone-figure");

  const phoneDataArray = [
    {
      imageUrls: [
        "../images/images (1).jpeg",
        "../images/images (2).jpeg",
        "../images/images (3).jpeg",
      ],
      description: "Tecno Camon 18P 6.8\" FHD+, 8GB RAM + 128GB ROM-16MP FC",
      price: "₦ 131,500",
    },
    {
      imageUrls: [
        "../images/images (4).jpeg",
        "../images/images (5).jpeg",
        "../images/images (6).jpeg",
      ],
      description: "Tecno Camon 18P 6.8\" FHD+, 8GB RAM + 128GB ROM-16MP FC",
      price: "₦ 100,000",
    },
    {
      imageUrls: [
        "../images/images (7).jpeg",
        "../images/images (10).jpeg",
        "../images/images (9).jpeg",
      ],
      description: "Tecno Camon 18P 6.8\" FHD+, 8GB RAM + 128GB ROM-16MP FC",
      price: "₦ 131,500",
    },
    {
      imageUrls: [
        "../images/images (11).jpeg",
        "../images/images (1).jpeg",
        "../images/images (12).jpeg",
      ],
      description: "Tecno Camon 18P 6.8\" FHD+, 8GB RAM + 128GB ROM-16MP FC",
      price: "₦ 100,000",
    },
    {
      imageUrls: [
        "../images/images (5).jpeg",
        "../images/images (3).jpeg",
        "../images/images (7).jpeg",
      ],
      description: "Tecno Camon 18P 6.8\" FHD+, 8GB RAM + 128GB ROM-16MP FC",
      price: "₦ 131,500",
    },
    {
      imageUrls: [
        "../images/images (7).jpeg",
        "../images/images (2).jpeg",
        "../images/images (9).jpeg",
      ],
      description: "Tecno Camon 18P 6.8\" FHD+, 8GB RAM + 128GB ROM-16MP FC",
      price: "₦ 131,500",
    },
  ];

  for (let index = 0; index < phoneFiguresContainers.length; index++) {
    const figure = phoneFiguresContainers[index];
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const button = document.createElement("button");

    // Set up the content for each figure using different phone data
    const currentPhoneData = phoneDataArray[index % phoneDataArray.length];
    img.src = currentPhoneData.imageUrls[0];
    figcaption.innerHTML = `${currentPhoneData.description}<br><strong>${currentPhoneData.price}</strong>`;
    button.textContent = "ADD TO CART";
    button.classList.add("add-to-cart-button");
    button.onclick = addToCart;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(button);

    // Dynamically change images
    let currentImageIndex = 0;
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % currentPhoneData.imageUrls.length;
      img.src = currentPhoneData.imageUrls[currentImageIndex];
    }, 10000);
  }
});

function addToCart() {
  alert("Item added to cart!");
}
