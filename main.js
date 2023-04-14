const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    tabContents.forEach(content => {
      content.style.display = "none";
    });

    const content = document.querySelector(`#content${tab.id.slice(-1)}`);
    content.style.display = "block";
  });
});

// Activate the first tab by default
tabs[0].click();

const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("open");
  });
});
