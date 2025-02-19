(function() {
  "use strict";

  /**
   * Dark Mode Toggle
   */
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });

    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }

  /**
   * Dynamic Greeting Based on Time of Day
   */
  function updateGreeting() {
    const greetingElement = document.querySelector("#dynamic-greeting");
    if (greetingElement) {
      let currentHour = new Date().getHours();
      let greetingText = (currentHour < 12) ? "Good Morning!" : 
                         (currentHour < 18) ? "Good Afternoon!" : 
                         "Good Evening!";
      greetingElement.textContent = greetingText;
    }
  }
  updateGreeting();

  /**
   * Smooth Scrolling for Section Links
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  /**
   * Interactive Portfolio Filter
   */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      let filterValue = this.getAttribute('data-filter');
      document.querySelectorAll('.portfolio-item').forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Update active button
      document.querySelector('.filter-btn.active')?.classList.remove('active');
      this.classList.add('active');
    });
  });

  /**
   * Live Typing Effect in Contact Form
   */
  const contactMessage = document.querySelector("#contact-message");
  const messagePreview = document.querySelector("#message-preview");

  if (contactMessage && messagePreview) {
    contactMessage.addEventListener("input", function() {
      messagePreview.textContent = this.value || "Start typing...";
    });
  }

  /**
   * Resume Download Animation
   */
  const resumeButton = document.querySelector("#download-resume");
  if (resumeButton) {
    resumeButton.addEventListener("click", function() {
      this.classList.add("loading");
      setTimeout(() => {
        this.classList.remove("loading");
        alert("Your resume is being downloaded!");
      }, 2000);
    });
  }

})();
