// Select the carousel element
var myCarousel = document.querySelector('#carouselExampleCaptions');

// Initialize the Bootstrap carousel
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,  // 3 seconds per slide
  ride: 'carousel' // start automatically
});



const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchB");
const noResultsEl = document.getElementById("noResultsMsg");

// Select all card columns
const items = document.querySelectorAll("#order .col-xl-3, #order .col-lg-4, #order .col-md-6, #order .col-sm-12");

function doSearch() {
    const searchText = searchInput.value.toLowerCase().trim();
    let found = false;
    let firstMatch = null;

    items.forEach(col => {
        const card = col.querySelector(".card");
        const name = card.getAttribute("data-name")?.toLowerCase() || "";

        if (!searchText || name.includes(searchText)) {
            col.style.display = "";
            if (!firstMatch) firstMatch = col;
            found = true;
        } else {
            col.style.display = "none";
        }
    });

    // Show or hide "No results found"
    if (!found) {
        noResultsEl.style.display = "block";
    } else {
        noResultsEl.style.display = "none";
        // Scroll to first visible card
        if (firstMatch) {
            const yOffset = -80; // for fixed navbar
            const rect = firstMatch.getBoundingClientRect();
            const pos = window.pageYOffset + rect.top + yOffset;
            window.scrollTo({ top: pos, behavior: "smooth" });
        }
    }
}

// Button click
searchBtn.addEventListener("click", doSearch);

// Press Enter to search
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
});
