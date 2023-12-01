import {buttonsContainers, rootElement} from './variables.js';

const initViewControl = () => {
  buttonsContainers.forEach((element) => {
    element.addEventListener('click', (evt) => {
      const selectedButton = evt.target.closest('button');
      if (selectedButton === null) {
        return;
      }
      const isSelectedButtonActive = selectedButton.classList.contains('active');
      if (isSelectedButtonActive === true) {
        return;
      }
      const parent = selectedButton.closest('.js-buttons-container');
      const activeButton = parent.querySelector('.active');
      activeButton.classList.remove('active');
      selectedButton.classList.add('active');
      const parentAttribute = `data-theme-${parent.dataset.buttonsContainerType}`;
      const selectedButtonAttribute = selectedButton.dataset.buttonContainerValue;
      rootElement.setAttribute(parentAttribute, selectedButtonAttribute);
    });
  });
};

export {initViewControl};
