
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

// Schools of Interest


const schoolInput = document.getElementById("schoolInput");

const addSchoolBtn = document.getElementById("addSchoolBtn");

const schoolList = document.getElementById("schoolList");

addSchoolBtn.addEventListener("click", function(){

    const schoolName = schoolInput.value.trim();

    if(schoolName === ""){

        alert("Please enter a school name.");

        return;

    }

    // Create list item

    const listItem = document.createElement("li");

    listItem.classList.add("school-item");

    // School name

    const schoolText = document.createElement("span");

    schoolText.textContent = schoolName;

    // Remove button

    const removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";

    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function(){

        listItem.remove();

    });

    listItem.appendChild(schoolText);

    listItem.appendChild(removeBtn);

    schoolList.appendChild(listItem);

    schoolInput.value="";

    schoolInput.focus();

});

// Booking Form Validation

const bookingForm = document.getElementById("bookingForm");

const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event){

    event.preventDefault();

    const parentName =
        document.getElementById("parentName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const childSchool =
        document.getElementById("childSchool").value.trim();

    const selectedPackage =
        document.getElementById("package").value;

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(
        parentName === "" ||
        email === "" ||
        childSchool === "" ||
        selectedPackage === ""
    ){

        formMessage.className = "error-message";

        formMessage.textContent =
            "Please complete all required fields.";

        return;

    }

    if(!emailPattern.test(email)){

        formMessage.className = "error-message";

        formMessage.textContent =
            "Please enter a valid email address.";

        return;

    }

    // Save parent's name for Task 4

    localStorage.setItem(
        "parentName",
        parentName
    );

    formMessage.className = "success-message";

    formMessage.innerHTML =

        `✅ Thank you, <strong>${parentName}</strong>!

        <br><br>

        Your booking request has been received successfully.

        We will contact you shortly.`;

    bookingForm.reset();

});


// Theme Toggle

const themeToggle = document.getElementById("themeToggle");

// Check saved theme

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️ Light Mode";

}

themeToggle.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeToggle.textContent = "☀️ Light Mode";

    }

    else{

        localStorage.setItem("theme","light");

        themeToggle.textContent = "🌙 Dark Mode";

    }

});

// Welcome Returning Parent


const welcomeHeading = document.getElementById("welcomeMessage");

const storedParent = localStorage.getItem("parentName");

if(storedParent){

    welcomeHeading.innerHTML =

    `Welcome back, ${storedParent}!<br>

    Reliable & Safe School Transport for Your Peace of Mind`;

}