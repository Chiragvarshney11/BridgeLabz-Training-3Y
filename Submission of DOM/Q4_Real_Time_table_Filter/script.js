const searchInput = document.querySelector("#searchInput");
const studentRows = document.querySelector("#studentRows");
const resultMessage = document.querySelector("#resultMessage");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const rows = [...studentRows.querySelectorAll("tr")];
  let visibleCount = 0;

  rows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchTerm);
    row.hidden = !matches;
    if (matches) visibleCount++;
  });

  resultMessage.textContent =
    visibleCount === 0 ? "No results found" : `${visibleCount} student(s) found`;
});
