'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const submitBtn = document.getElementById('contact-form-submit');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (
      name.value.trim() === '' ||
      email.value.trim() === '' ||
      message.value.trim() === ''
    ) {
      return;
    }

    submitBtn.disabled = true;
    name.disabled = true;
    email.disabled = true;
    message.disabled = true;

    fetch('https://formspree.io/moqkgpoz', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          name.value = '';
          email.value = '';
          message.value = '';
        }
        name.removeAttribute('disabled');
        email.removeAttribute('disabled');
        message.removeAttribute('disabled');
        return submitBtn.removeAttribute('disabled');
      })
      .catch((err) => console.log(err));
  });
});
