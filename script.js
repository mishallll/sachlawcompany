document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const consultBtn = document.getElementById("consultBtn");
  const popupTitle = document.getElementById("popupTitle");
  const popupDesc = document.getElementById("popupDesc");

  const serviceCards = document.querySelectorAll(".card");

  // ✅ Service details map
  const serviceDetails = {
    "Corporate Law": `
      <ul>
        <li>Company Matters & Financial Issues</li>
        <li>Mergers, Acquisitions & Winding Up</li>
        <li>Partnerships & Business Registration</li>
        <li>Trademark Registration</li>
        <li>Corporate Compliance & Governance</li>
      </ul>
    `,
    "Criminal Law": `
      <ul>
        <li>Bail & Trial Matters (Murder, Assault, Kidnapping, Dishonor of Cheque, Theft, Cheating, Public Order Offences)</li>
        <li>Anti-Terrorism Laws</li>
        <li>NAB Matters</li>
        <li>Cyber / Electronic Crimes</li>
        <li>Hudood Laws</li>
      </ul>
    `,
    "Civil Law": `
      <ul>
        <li>Property Matters</li>
        <li>Family & Guardian Matters</li>
        <li>Rent Matters</li>
        <li>Contractual Issues</li>
        <li>Business Disputes</li>
        <li>Defamation Laws</li>
        <li>Arbitration Matters</li>
        <li>Labor & Employment Matters</li>
      </ul>
    `,
    "Banking Law": `
      <ul>
        <li>Loan & Debt Recovery Matters</li>
        <li>Banking Litigation & Disputes</li>
        <li>Financial Institution Advisory</li>
        <li>Recovery Suits</li>
      </ul>
    `,
    "Taxation Law": `
      <ul>
        <li>Income Tax Matters</li>
        <li>Sales Tax Matters</li>
        <li>Property Tax Matters</li>
        <li>Customs Laws</li>
        <li>Federal Excise Duty Matters</li>
      </ul>
    `
  };

  // ✅ Open popup on service card click
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.dataset.title || card.textContent.trim();
      popupTitle.textContent = title;
      popupDesc.innerHTML = serviceDetails[title] || "<p>No additional details available.</p>";
      popup.style.display = "flex";
    });
  });

  // ✅ Close popup (X button)
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  // ✅ Close popup by clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });

  // ✅ Close popup with Esc key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.style.display === "flex") {
      popup.style.display = "none";
    }
  });

  // ✅ Consultation button scrolls to Contact
  if (consultBtn) {
    consultBtn.addEventListener("click", () => {
      popup.style.display = "none";
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ✅ Hamburger toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // ✅ Close menu when clicking a link (on mobile)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  }
});
