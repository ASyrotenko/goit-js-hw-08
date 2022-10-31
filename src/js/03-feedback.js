import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const FEEDBACK = 'feedback-form-state';

let formData = {};

const text = JSON.parse(localStorage.getItem(FEEDBACK));

if (text) {
  formData = { ...text };
}

populateText();

onInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(formData));
};

refs.form.addEventListener('input', throttle(onInput, 500));

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(FEEDBACK)));

  e.target.reset();
  localStorage.removeItem(FEEDBACK);
});

function populateText() {
  const savedText = JSON.parse(localStorage.getItem(FEEDBACK));

  // if (savedText) {
  //   if (savedText.email) {
  //     refs.form.email.value = savedText.email;
  //   }
  //   if (savedText.message) {
  //     refs.form.message.value = savedText.message;
  //   }
  // }

  // const keys = Object.keys(savedText);
  // console.log(keys);

  // if (savedText) {
  //   // for (let index = 0; index < keys.length; index += 1) {
  //   //   console.log(refs.form.keys[index].value);
  //   // }
  //   // for (const key of keys) {
  //   //   console.log(refs.form.key);
  //   //   // refs.form.key = savedText[key];
  //   // }
  //   keys.forEach(function callback(e, i, a) {
  //     console.log(refs.form.e);
  //   });
  // }

  try {
    if (savedText.email) {
      refs.form.email.value = savedText.email;
    }
  } catch (error) {
    return;
  }

  try {
    if (savedText.message) {
      refs.form.message.value = savedText.message;
    }
  } catch (error) {
    return;
  }
}
