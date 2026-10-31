const productForm = document.querySelector("#productForm");
const productInput = document.querySelector("#productInput");
const productList = document.querySelector("#productList");
const emptyMessage = document.querySelector("#emptyMessage");

function updateEmptyMessage() {
  emptyMessage.hidden = productList.children.length > 0;
}

function finishEditing(item, save = true) {
  const editor = item.querySelector(".edit-input");
  if (!editor) return;

  const nameSpan = item.querySelector(".product-name");
  const newName = editor.value.trim();

  if (save && newName) {
    nameSpan.textContent = newName;
  }

  editor.replaceWith(nameSpan);
  item.classList.remove("editing");
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = productInput.value.trim();
  if (!productName) return;

  const item = document.createElement("li");
  const name = document.createElement("span");
  name.className = "product-name";
  name.textContent = productName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit-btn";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  item.append(name, editButton, deleteButton);
  productList.append(item);
  productInput.value = "";
  updateEmptyMessage();
});

// One parent listener handles clicks for all current and future product buttons.
productList.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item || !productList.contains(item)) return;

  if (event.target.classList.contains("delete-btn")) {
    item.remove();
    updateEmptyMessage();
  }

  if (event.target.classList.contains("edit-btn")) {
    if (item.classList.contains("editing")) return;

    const nameSpan = item.querySelector(".product-name");
    const editor = document.createElement("input");
    editor.className = "edit-input";
    editor.value = nameSpan.textContent;
    nameSpan.replaceWith(editor);
    item.classList.add("editing");
    editor.focus();
    editor.select();
  }
});

// Clicking elsewhere saves the active edit.
document.addEventListener("click", (event) => {
  const editingItem = productList.querySelector(".editing");
  if (editingItem && !editingItem.contains(event.target)) {
    finishEditing(editingItem, true);
  }
});

// Enter saves; Escape cancels the current edit.
productList.addEventListener("keydown", (event) => {
  if (!event.target.classList.contains("edit-input")) return;
  const item = event.target.closest("li");
  if (event.key === "Enter") finishEditing(item, true);
  if (event.key === "Escape") finishEditing(item, false);
});

updateEmptyMessage();
