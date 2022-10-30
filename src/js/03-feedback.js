import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';
const EMAIL_KEY = 'feedback-email';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// populateMessageOutput();

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   localStorage.removeItem(EMAIL_KEY);
// }

// function onEmailInput(evt) {
//   const email = evt.target.value;
//   localStorage.setItem(EMAIL_KEY, email);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateMessageOutput() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   const savedEmail = localStorage.getItem(EMAIL_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }

//   if (savedEmail) {
//     refs.email.value = savedEmail;
//   }
// }

const formData = {};

refs.form.addEventListener('input', e => {
  refs.form.addEventListener('submit', onFormSubmit);
  refs.email.addEventListener('input', throttle(onTextareaInput, 500));
  refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

  populateMessageOutput();

  function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(JSON.stringify(e.target.name));
  }

  function onTextareaInput(evt) {
    const message = e.target.value;
    localStorage.setItem(
      JSON.stringify(e.target.name),
      JSON.stringify(message)
    );
  }

  function populateMessageOutput() {
    const savedMessage = JSON.parse(localStorage.getItem(e.target));
    // const savedEmail = localStorage.getItem(EMAIL_KEY);

    if (savedMessage) {
      e.target.value = savedMessage;
    }
  }

  console.log(e.target.value);

  console.log(JSON.parse(localStorage.getItem(e.target.name)));
  formData[e.target.name] = e.target.value;

  //   console.log(formData);
});
