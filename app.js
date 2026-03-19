const revealItems = document.querySelectorAll(".reveal");
const copyEmailButton = document.getElementById("copy-email");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = "bhiolinamld@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = "Email copied";
    } catch {
      copyEmailButton.textContent = email;
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = "Copy email address";
    }, 1800);
  });
}
