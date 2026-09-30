/**
 * ORACLE MEDICOS - WordPress Theme Client Script
 * Pharmaceutical & Medical Products Trading (Imphal west, Manipur)
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // --- Business Configuration ---
  const BUSINESS_PHONE = "917005118411"; // Business WhatsApp & phone: +91 70051 18411
  const BUSINESS_EMAIL = "info@oraclemedicos.com";

  // --- Elements ---
  const siteHeader = document.getElementById("siteHeader");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileDrawerOverlay = document.getElementById("mobileDrawerOverlay");
  const mobileDrawerClose = document.getElementById("mobileDrawerClose");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const toastContainer = document.getElementById("toastContainer");
  const currentYearSpan = document.getElementById("currentYear");

  // Set Current Year dynamically in Footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Category Modal Database ---
  const categoryData = {
    pharma: {
      title: "Pharmaceutical Products",
      icon: "fa-pills",
      desc: "Oracle Medicos facilitates wholesale trading of certified pharmaceutical formulations. We supply branded medicines, generic oral dosages, injectables, and pediatric suspensions sourced directly from licensed pharma manufacturers.",
      items: [
        "Oral Solid Tablets & Capsules",
        "Pediatric Syrups & Suspensions",
        "Injectables & IV Infusions (Normal Saline, Dextrose, Ringer Lactate)",
        "Broad-Spectrum Antibiotics & Antivirals",
        "Analgesics, NSAIDs & Anti-Inflammatories",
        "Gastrointestinal & Antacid Formulations",
        "Cardiovascular & Diabetic Maintenance Formulations",
        "Dermatological Ointments & Topicals",
      ],
    },
    equipment: {
      title: "Medical Equipment",
      icon: "fa-heart-pulse",
      desc: "Diagnostic and patient monitoring gear curated for clinics, primary healthcare centers, nursing homes, and diagnostic labs across Manipur.",
      items: [
        "Digital & Mercurial Blood Pressure Monitors",
        "Fingertip Pulse Oximeters",
        "Ultrasonic & Compressor Nebulizers",
        "Infrared Non-Contact & Digital Thermometers",
        "Clinical Acoustic Stethoscopes",
        "Blood Glucose Monitoring Meters & Test Strips",
        "Portable ECG Machines & Patient Monitors",
        "Medical Suction Machines & Oxygen Regulators",
      ],
    },
    surgical: {
      title: "Surgical Products",
      icon: "fa-scissors",
      desc: "Precision surgical tools, sterile blades, operating theater consumables, and surgical closure materials meeting clinical sterility standards.",
      items: [
        "Sterile Surgical Carbon & Stainless Steel Blades (All sizes)",
        "Absorbable & Non-Absorbable Surgical Sutures (Chromic, PGA, Silk, Nylon)",
        "Surgical Scalpel Handles & Forceps",
        "Sterile Surgical Drapes & Mayo Stand Covers",
        "Surgical Scissors (Metzenbaum, Mayo, Dressing)",
        "Needle Holders & Hemostatic Artery Forceps",
        "Electrosurgical Cautery Pencils & Grounding Pads",
        "Sterile Operation Theater Gowns",
      ],
    },
    supplies: {
      title: "Healthcare Supplies",
      icon: "fa-kit-medical",
      desc: "Standard infection prevention, sanitation, and first aid supplies for medical institutions, workplaces, and retail pharmacies.",
      items: [
        "3-Ply Certified Surgical Face Masks with Meltblown Filter",
        "N95 / FFP2 Particulate Respirator Masks",
        "Hospital-Grade IPA / Ethanol Hand Sanitizers (500ml & 5L cans)",
        "Surface Disinfectant Concentrates (Sodium Hypochlorite & Quat-based)",
        "Medical Safety Eyewear & Face Shields",
        "Comprehensive Institutional First Aid Kits",
        "Clinical Disposable Bed Sheets & Pillow Covers",
        "Biohazard Waste Disposal Bags & Sharp Containers",
      ],
    },
    consumables: {
      title: "Medical Consumables",
      icon: "fa-syringe",
      desc: "High-turnover disposable medical consumables essential for daily hospital and clinic operations, sterile-packaged for patient safety.",
      items: [
        "Single-Use Sterile Syringes with Needles (2ml, 3ml, 5ml, 10ml, 50ml)",
        "Intravenous (IV) Infusion Administration Sets",
        "Latex Examination Gloves (Powdered & Powder-Free)",
        "Nitrile Medical Grade Gloves (Blue/Purple)",
        "Sterile Surgical Gloves (Pre-powdered & Micro-textured)",
        "IV Cannulas with Injection Port (18G, 20G, 22G, 24G)",
        "Sterile Gauze Swabs, Cotton Rolls & Bandages",
        "Medical Adhesive Plaster & Microporous Paper Tapes",
      ],
    },
  };

  // --- Sticky Header & Scroll To Top Visibility ---
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (siteHeader) {
      if (scrollPos > 40) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }

    if (scrollTopBtn) {
      if (scrollPos > 350) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }

    updateActiveNavLink();
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- Mobile Drawer Controls ---
  function openMobileMenu() {
    mobileDrawer.classList.add("active");
    mobileDrawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    mobileMenuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove("active");
    mobileDrawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
    mobileMenuToggle.setAttribute("aria-expanded", "false");
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", openMobileMenu);
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener("click", closeMobileMenu);
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener("click", closeMobileMenu);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // --- Active Nav Link Detection ---
  const sections = document.querySelectorAll("section[id]");
  const desktopNavLinks = document.querySelectorAll(".wp-nav-menu .nav-link");

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // --- WordPress Category Filter Tabs ---
  const filterTabs = document.querySelectorAll(".wp-tab-btn");
  const productCards = document.querySelectorAll(".wp-product-card");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      productCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
          card.style.animation = "fadeInUp 0.4s ease";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Handle header sub-menu filter links
  document.querySelectorAll(".sub-menu a[data-filter]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const filter = link.getAttribute("data-filter");
      const targetTab = document.querySelector(
        `.wp-tab-btn[data-filter="${filter}"]`,
      );
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  // --- WordPress FAQ Accordion ---
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all others (WordPress Elementor single-expand style)
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem
          .querySelector(".faq-header")
          .setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });

  // --- Modal Utility Functions ---
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetModal = btn.getAttribute("data-close-modal");
      closeModal(targetModal);
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop.id);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.active").forEach((modal) => {
        closeModal(modal.id);
      });
      if (mobileDrawer && mobileDrawer.classList.contains("active")) {
        closeMobileMenu();
      }
    }
  });

  // Legal Modal Triggers
  document.querySelectorAll(".legal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetModal = btn.getAttribute("data-modal");
      openModal(targetModal);
    });
  });

  // --- Search Modal Trigger & Functionality ---
  const btnOpenSearch = document.getElementById("btnOpenSearch");
  const modalSearchInput = document.getElementById("modalSearchInput");
  const searchResultsBox = document.getElementById("searchResultsBox");
  const mobileQuickSearchInput = document.getElementById(
    "mobileQuickSearchInput",
  );

  if (btnOpenSearch) {
    btnOpenSearch.addEventListener("click", () => {
      openModal("searchModal");
      setTimeout(() => {
        if (modalSearchInput) modalSearchInput.focus();
      }, 100);
    });
  }

  if (mobileQuickSearchInput) {
    mobileQuickSearchInput.addEventListener("focus", () => {
      closeMobileMenu();
      openModal("searchModal");
      setTimeout(() => {
        if (modalSearchInput) {
          modalSearchInput.value = mobileQuickSearchInput.value;
          modalSearchInput.focus();
          handleSearch(mobileQuickSearchInput.value);
        }
      }, 100);
    });
  }

  function handleSearch(query) {
    if (!searchResultsBox) return;
    const q = query.trim().toLowerCase();

    if (!q) {
      searchResultsBox.innerHTML =
        '<p class="search-placeholder">Start typing to search products across our 5 trading categories...</p>';
      return;
    }

    const matches = [];

    Object.keys(categoryData).forEach((catKey) => {
      const cat = categoryData[catKey];
      if (cat.title.toLowerCase().includes(q)) {
        matches.push({
          title: cat.title,
          category: cat.title,
          isCat: true,
          catKey,
        });
      }
      cat.items.forEach((item) => {
        if (item.toLowerCase().includes(q)) {
          matches.push({
            title: item,
            category: cat.title,
            isCat: false,
            catKey,
          });
        }
      });
    });

    if (matches.length === 0) {
      searchResultsBox.innerHTML = `<p class="search-placeholder">No exact matches found for "<strong>${query}</strong>". Send us a custom quotation request!</p>`;
      return;
    }

    searchResultsBox.innerHTML = "";
    matches.forEach((m) => {
      const row = document.createElement("div");
      row.className = "search-result-item";
      row.innerHTML = `
        <div class="search-result-info">
          <strong>${m.title}</strong>
          <span>Category: ${m.category}</span>
        </div>
        <button type="button" class="btn btn-wp-primary btn-sm" style="padding: 6px 14px; font-size: 0.8rem;">
          Inquire
        </button>
      `;
      row.addEventListener("click", () => {
        closeModal("searchModal");
        const quoteCategorySelect = document.getElementById("quoteCategory");
        const quoteDetails = document.getElementById("quoteDetails");
        if (quoteCategorySelect) quoteCategorySelect.value = m.category;
        if (quoteDetails) quoteDetails.value = `Inquiry for: ${m.title}`;
        openModal("quoteModal");
      });
      searchResultsBox.appendChild(row);
    });
  }

  if (modalSearchInput) {
    modalSearchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });
  }

  // --- Quote Modal Triggers ---
  const openQuoteModalBtn = document.getElementById("openQuoteModalBtn");
  const mobileOpenQuoteBtn = document.getElementById("mobileOpenQuoteBtn");
  const openCustomQuoteBtn = document.getElementById("openCustomQuoteBtn");

  if (openQuoteModalBtn) {
    openQuoteModalBtn.addEventListener("click", () => openModal("quoteModal"));
  }

  if (mobileOpenQuoteBtn) {
    mobileOpenQuoteBtn.addEventListener("click", () => {
      closeMobileMenu();
      openModal("quoteModal");
    });
  }

  if (openCustomQuoteBtn) {
    openCustomQuoteBtn.addEventListener("click", () => openModal("quoteModal"));
  }

  // --- Product Category Details Modal Interaction ---
  const catModal = document.getElementById("categoryDetailModal");
  const catModalTitle = document.getElementById("catModalTitle");
  const catModalDesc = document.getElementById("catModalDesc");
  const catModalItems = document.getElementById("catModalItems");
  const catModalIcon = document.getElementById("catModalIcon");
  const catModalQuoteBtn = document.getElementById("catModalQuoteBtn");
  let currentModalCategory = "";

  function displayCategoryModal(catKey) {
    const data = categoryData[catKey];
    if (!data) return;

    currentModalCategory = data.title;
    catModalTitle.textContent = data.title;
    catModalDesc.textContent = data.desc;
    catModalIcon.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;

    catModalItems.innerHTML = "";
    data.items.forEach((item) => {
      const tag = document.createElement("span");
      tag.className = "tag-item";
      tag.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;
      catModalItems.appendChild(tag);
    });

    openModal("categoryDetailModal");
  }

  document.querySelectorAll(".view-category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const catKey = btn.getAttribute("data-category-id");
      displayCategoryModal(catKey);
    });
  });

  document.querySelectorAll(".view-category-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const catKey = link.getAttribute("data-cat");
      displayCategoryModal(catKey);
    });
  });

  if (catModalQuoteBtn) {
    catModalQuoteBtn.addEventListener("click", () => {
      closeModal("categoryDetailModal");
      const quoteCategorySelect = document.getElementById("quoteCategory");
      if (quoteCategorySelect && currentModalCategory) {
        quoteCategorySelect.value = currentModalCategory;
      }
      openModal("quoteModal");
    });
  }

  // --- Quote Modal Form Handling ---
  const quoteModalForm = document.getElementById("quoteModalForm");
  const btnSendQuoteWhatsapp = document.getElementById("btnSendQuoteWhatsapp");
  const btnSendQuoteEmail = document.getElementById("btnSendQuoteEmail");

  function getQuoteData() {
    const org = document.getElementById("quoteOrgName").value.trim();
    const phone = document.getElementById("quotePhone").value.trim();
    const category = document.getElementById("quoteCategory").value;
    const quantity = document.getElementById("quoteQuantity").value;
    const details = document.getElementById("quoteDetails").value.trim();

    return { org, phone, category, quantity, details };
  }

  if (quoteModalForm) {
    quoteModalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = getQuoteData();

      if (!data.org || !data.phone || !data.category) {
        showToast("Please fill in all required fields.", "warning");
        return;
      }

      const waMessage = `*NEW COMMERCIAL QUOTE INQUIRY - ORACLE MEDICOS*
---------------------------------------
*Client / Org:* ${data.org}
*Phone:* ${data.phone}
*Category:* ${data.category}
*Volume:* ${data.quantity}
*Requirement Details:*
${data.details}
---------------------------------------
_Sent via Oracle Medicos Website Inquiry_`;

      const encodedUrl = `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(waMessage)}`;
      window.open(encodedUrl, "_blank");

      closeModal("quoteModal");
      quoteModalForm.reset();
      showToast("Opening WhatsApp with your quotation request...", "success");
    });
  }

  if (btnSendQuoteEmail) {
    btnSendQuoteEmail.addEventListener("click", () => {
      const data = getQuoteData();
      if (!data.org || !data.phone || !data.category) {
        showToast("Please fill in required fields first.", "warning");
        return;
      }

      const emailSubject = `Quotation Request: ${data.category} - ${data.org}`;
      const emailBody = `Dear Oracle Medicos Team,

Please provide commercial quotation for the following requirement:

- Organization / Name: ${data.org}
- Phone Number: ${data.phone}
- Category: ${data.category}
- Order Volume: ${data.quantity}

Requirement Details:
${data.details}

Location: Imphal west / Manipur

Thank you.`;

      const mailtoUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;

      closeModal("quoteModal");
      quoteModalForm.reset();
      showToast("Opening your email client...", "success");
    });
  }

  // --- Contact Form Handling & Validation ---
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    const contactName = document.getElementById("contactName");
    const contactPhone = document.getElementById("contactPhone");
    const contactEmail = document.getElementById("contactEmail");
    const contactProduct = document.getElementById("contactProduct");
    const contactCity = document.getElementById("contactCity");
    const contactMessage = document.getElementById("contactMessage");
    const sendViaWhatsAppCheckbox = document.getElementById("sendViaWhatsApp");

    function validateField(input, errorElement, validationFn) {
      const isValid = validationFn(input.value.trim());
      if (!isValid) {
        input.classList.add("is-invalid");
        if (errorElement) errorElement.classList.add("visible");
        return false;
      } else {
        input.classList.remove("is-invalid");
        if (errorElement) errorElement.classList.remove("visible");
        return true;
      }
    }

    [
      contactName,
      contactPhone,
      contactEmail,
      contactProduct,
      contactMessage,
    ].forEach((el) => {
      if (el) {
        el.addEventListener("input", () => {
          el.classList.remove("is-invalid");
          const parentGroup = el.closest(".wp-form-group");
          if (parentGroup) {
            const errorMsg = parentGroup.querySelector(".error-msg");
            if (errorMsg) errorMsg.classList.remove("visible");
          }
        });
      }
    });

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const isNameValid = validateField(
        contactName,
        document.getElementById("nameError"),
        (val) => val.length >= 2,
      );

      const isPhoneValid = validateField(
        contactPhone,
        document.getElementById("phoneError"),
        (val) =>
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
            val,
          ) || val.replace(/\D/g, "").length >= 10,
      );

      const isEmailValid = validateField(
        contactEmail,
        document.getElementById("emailError"),
        (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      );

      const isProductValid = validateField(
        contactProduct,
        document.getElementById("productError"),
        (val) => val !== "",
      );

      const isMessageValid = validateField(
        contactMessage,
        document.getElementById("messageError"),
        (val) => val.length >= 5,
      );

      if (
        !isNameValid ||
        !isPhoneValid ||
        !isEmailValid ||
        !isProductValid ||
        !isMessageValid
      ) {
        showToast("Please correct highlighted errors in the form.", "warning");
        return;
      }

      const formData = {
        name: contactName.value.trim(),
        phone: contactPhone.value.trim(),
        email: contactEmail.value.trim(),
        product: contactProduct.value,
        city: contactCity ? contactCity.value.trim() : "Imphal west, Manipur",
        message: contactMessage.value.trim(),
        sendViaWhatsApp: sendViaWhatsAppCheckbox
          ? sendViaWhatsAppCheckbox.checked
          : true,
      };

      if (formStatus) {
        formStatus.style.display = "flex";
        formStatus.className = "form-status success";
        formStatus.innerHTML = `
          <i class="fa-solid fa-circle-check"></i>
          <div>
            <strong>Thank You, ${formData.name}!</strong><br>
            Your requirement for <em>${formData.product}</em> has been submitted. Our trading team will review and contact you at ${formData.phone}.
          </div>
        `;
      }

      if (formData.sendViaWhatsApp) {
        const waText = `*PRODUCT REQUIREMENT ENQUIRY - ORACLE MEDICOS*
---------------------------------------
*Client/Facility:* ${formData.name}
*Contact Phone:* ${formData.phone}
*Email:* ${formData.email}
*Location/District:* ${formData.city || "Imphal west, Manipur"}
*Category Required:* ${formData.product}

*Specification / Message:*
${formData.message}
---------------------------------------
_Inquiry via oraclemedicos.com_`;

        const waUrl = `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(waText)}`;
        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 600);
      }

      showToast("Enquiry successfully submitted!", "success");
      contactForm.reset();
      formStatus.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  // --- Toast Notification Helper ---
  function showToast(message, type = "success") {
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = "fa-circle-check";
    if (type === "warning") icon = "fa-triangle-exclamation";
    if (type === "error") icon = "fa-circle-xmark";

    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }

  window.showToast = showToast;
});
