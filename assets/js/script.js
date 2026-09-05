'use strict';

const toggleActive = (element) => element?.classList.toggle('active');

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');

sidebarButton?.addEventListener('click', () => toggleActive(sidebar));

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterProjects = (selectedValue) => {
  filterItems.forEach((item) => {
    const matches = selectedValue === 'all' || selectedValue === item.dataset.category;
    item.classList.toggle('active', matches);
  });
};

select?.addEventListener('click', () => toggleActive(select));

selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    toggleActive(select);
    filterProjects(selectedValue);
  });
});

let activeFilterButton = filterButtons[0];

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedValue = button.innerText.toLowerCase();
    selectValue.innerText = button.innerText;
    filterProjects(selectedValue);
    activeFilterButton?.classList.remove('active');
    button.classList.add('active');
    activeFilterButton = button;
  });
});

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const destination = link.innerText.toLowerCase();

    pages.forEach((page) => {
      page.classList.toggle('active', page.dataset.page === destination);
    });

    navigationLinks.forEach((navLink) => {
      navLink.classList.toggle('active', navLink === link);
    });

    window.scrollTo(0, 0);
  });
});
