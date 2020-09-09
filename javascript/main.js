'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

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
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  });
});
