const submenus = document.getElementsByClassName("sportpage__submenu");
const menuItemsContent = document.getElementsByClassName(
  "sportpage__menu-item-content"
);

function closeAllNotThis(thethis) {
  const convertHtmlCollecToArray = [];
  for (let i = 0; i < menuItemsContent.length; i++) {
    convertHtmlCollecToArray.push(menuItemsContent[i]);
  }
  const filterAllNotTheThis = convertHtmlCollecToArray.filter(
    (el) => el != thethis
  );

  filterAllNotTheThis.forEach((el) => {
    // remove "active-submenu" class names
    el.nextElementSibling.classList.remove("active-submenu");

    // toggle plus and minus icons
    const plusIcons = el.getElementsByClassName("fa-plus");
    const minusIcons = el.getElementsByClassName("fa-minus");
    for (let i = 0; i < plusIcons.length; i++) {
      plusIcons[i].style.display = "inline-block";
    }
    for (let i = 0; i < minusIcons.length; i++) {
      minusIcons[i].style.display = "none";
    }

    // hide border top
    el.parentNode.style.borderTop = "none";

    // change text color back to black
    el.getElementsByClassName(
      "sportpage__menu-item-content--left-text"
    )[0].style.color = "#242323";
  });
}

function toggleSubMenus(e) {
  closeAllNotThis(this);

  // get elements
  const submenu = this.nextElementSibling;
  const parentLiElem = this.parentNode;
  const textTopCategory = this.getElementsByClassName(
    "sportpage__menu-item-content--left-text"
  )[0];

  // toggle active class - submenu element

  submenu.classList.toggle("active-submenu");

  // handle toggle styles
  if (submenu.classList.contains("active-submenu")) {
    this.getElementsByClassName("fa-plus")[0].style.display = "none";
    this.getElementsByClassName("fa-minus")[0].style.display = "inline-block";
    parentLiElem.style.borderTop = "2px solid #0082C3";
    textTopCategory.style.color = "#0082C3";
  } else {
    this.getElementsByClassName("fa-plus")[0].style.display = "inline-block";
    this.getElementsByClassName("fa-minus")[0].style.display = "none";
    parentLiElem.style.borderTop = "2px solid #fff";
    textTopCategory.style.color = "#242323";
  }
}

for (let i = 0; i < menuItemsContent.length; i++) {
  menuItemsContent[i].addEventListener("click", toggleSubMenus);
}

// style subcategory "zu allen produkten":
let submenusText = document.getElementsByClassName(
  "sportpage__submenu-item-content--left"
);
for (let i = 0; i < submenusText.length; i++) {
  if (
    submenusText[i].textContent.trim().toLowerCase() === "zu allen produkten"
  ) {
    submenusText[i].style.fontWeight = "bold";
    submenusText[i].style.fontStyle = "italic";
  }
}
