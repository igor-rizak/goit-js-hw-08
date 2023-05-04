import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  inputTextarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

getItems();

function onFormSubmit(e) {
  e.preventDefault();
  
  if (refs.inputEmail.value !== ''
    && refs.inputTextarea.value !== '') {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    e.currentTarget.reset();
    console.log(formData);
    return;
  }

    alert('Необхідно заповнити всі поля');  
}

function onFormInput() {
  formData.email = refs.inputEmail.value;
  formData.message = refs.inputTextarea.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function getItems() {
  try {
    const saveItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (saveItems) {
      refs.inputEmail.value = saveItems.email;
      refs.inputTextarea.value = saveItems.message;
    }
  } catch (e) {
    console.log(e.name); 
  }
}