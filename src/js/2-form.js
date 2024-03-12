const loginForm = document.querySelector('.feedback-form');

const labelEl = document.querySelectorAll('label');
labelEl.forEach(element => element.classList.add('form-label'));

const btn = document.querySelector('button');
btn.classList.add('submit-btn');

const inputEl = document.querySelectorAll('input');
inputEl.forEach(element => element.classList.add('form-input'));

const saveForm = () => {
  const formData = {
    email: loginForm.elements.email.value.trim(),
    message: loginForm.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadForm = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const parsedData = JSON.parse(saveData);
    loginForm.elements.email.value = parsedData.email || '';
    loginForm.elements.message.value = parsedData.message || '';
  }
};

loginForm.addEventListener('input', saveForm);
window.addEventListener('load', loadForm);

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailValue = loginForm.elements.email.value.trim();
  const messageValue = loginForm.elements.message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert(`Please fill in all the fields!`);
  } else {
    const formData = {
      email: emailValue,
      message: messageValue,
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
  }
}
