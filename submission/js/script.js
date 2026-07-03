
// Hazina Transport Packages


const transportPackages = [

    {
        name: "1-Way Package",
        price: "Custom Zone Rates",
        description:
            "Perfect for parents who only need morning drop-offs or afternoon pick-ups."
    },

    {
        name: "2-Way Package",
        price: "Bundled Discount Rate",
        description:
            "Daily morning and afternoon transport at a discounted rate."
    },

    {
        name: "Weekly Package",
        price: "KSh 4,500",
        description:
            "Unlimited transport for one school week."
    },

    {
        name: "Monthly Package",
        price: "KSh 17,000",
        description:
            "Our best-value package for parents needing transport every school day."
    }

];

const packagesContainer = document.getElementById("packagesContainer");

transportPackages.forEach(function (pkg) {

    const card = document.createElement("div");

    card.classList.add("package-card");

    if (pkg.name === "2-Way Package") {

        card.classList.add("featured");

    }

    card.innerHTML = `

        ${pkg.name === "2-Way Package"
            ? '<span class="badge">Popular</span>'
            : ""}

        <h3>${pkg.name}</h3>

        <p class="price-info">
            ${pkg.price}
        </p>

        <p>
            ${pkg.description}
        </p>

    `;

    packagesContainer.appendChild(card);

});