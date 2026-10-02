function showMessage(message) {

  const toast = document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


function quickSearch(term) {

  document.getElementById("searchInput").value = term;

  search();
}


function search() {

  const input = document.getElementById("searchInput");

  const query = input.value.trim();

  if (!query) {

    showMessage("Skriv vad du vill jämföra.");

    return;
  }

  document
    .getElementById("jamfor")
    .scrollIntoView({
      behavior: "smooth"
    });

  showMessage(
    'Sökning för "' +
    query +
    '" – här kopplar vi senare in riktiga produkter.'
  );
}


function calculate() {

  const slider =
    document.getElementById("priceSlider");

  const monthly =
    Number(slider.value);

  const yearly =
    monthly * 12;

  document.getElementById("monthlyValue")
    .textContent =
    monthly.toLocaleString("sv-SE");

  document.getElementById("yearlyValue")
    .textContent =
    yearly.toLocaleString("sv-SE");
}


function subscribe(event) {

  event.preventDefault();

  const email =
    event.target.querySelector("input").value;

  showMessage(
    "Tack! " + email + " är registrerad."
  );

  event.target.reset();
}


calculate();
