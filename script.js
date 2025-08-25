document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const consultBtn = document.getElementById("consultBtn");
  const popupTitle = document.getElementById("popupTitle");
  const popupDesc = document.getElementById("popupDesc");

  // ✅ Get all service cards
  const serviceCards = document.querySelectorAll(".card");

  // ✅ Map of detailed descriptions (ordered)
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

  // ✅ Add click event for each service card
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const desc = serviceDetails[title] || "No additional details available.";

      popupTitle.textContent = title;
      popupDesc.innerHTML = desc; // ✅ allow HTML lists
      popup.style.display = "flex"; 
    });
  });

  // ✅ Close popup when clicking the X
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // ✅ Close popup if user clicks outside the content box
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // ✅ "Consultation" button scrolls to contact section
  consultBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
});
