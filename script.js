// script.js
document.addEventListener("DOMContentLoaded", () => {
  const categoryTabs = document.getElementById("category-tabs");
  const toolGrid = document.getElementById("tool-grid");

  const defaultCategory = "Home";
  let currentCategory = defaultCategory;

  function renderCategories() {
    categoryTabs.innerHTML = "";
    Object.keys(toolsData).forEach(category => {
      const tab = document.createElement("button");
      tab.textContent = category;
      tab.className = "tab" + (category === currentCategory ? " active" : "");
      tab.onclick = () => {
        currentCategory = category;
        renderCategories();
        renderTools();
      };
      categoryTabs.appendChild(tab);
    });
  }

  function renderTools() {
    toolGrid.innerHTML = "";
    const tools = toolsData[currentCategory];
    tools.sort((a, b) => a.order - b.order);
    tools.forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.title = tool.description || "";

      const icon = document.createElement("img");
      icon.src = "public/default-icon.png";
      icon.onerror = () => {
        icon.src = "https://cdn.jsdelivr.net/gh/liuswtiger/Steven/default-icon.png";
      };
      icon.alt = tool.name;
      icon.className = "tool-icon";

      const name = document.createElement("div");
      name.textContent = tool.name;
      name.className = "tool-name";

      card.appendChild(icon);
      card.appendChild(name);
      card.onclick = () => window.open(tool.link, "_blank");

      toolGrid.appendChild(card);
    });
  }

  renderCategories();
  renderTools();
});
