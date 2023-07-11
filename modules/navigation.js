export const initializeSection = () => {
  const list = document.querySelector('.list');
  const addNew = document.querySelector('.add-new');
  const contact = document.querySelector('.contact');
  const listSect = document.querySelector('#list');
  const addNewForm = document.querySelector('#add-new');
  const contactSect = document.querySelector('#contact');

  list.addEventListener('click', () => {
    listSect.style.display = 'block';
    contactSect.style.display = 'none';
    addNewForm.style.display = 'none';
  });

  addNew.addEventListener('click', () => {
    addNewForm.style.display = 'flex';
    listSect.style.display = 'none';
    contactSect.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    contactSect.style.display = 'block';
    listSect.style.display = 'none';
    addNewForm.style.display = 'none';
  });
};

export default initializeSection;