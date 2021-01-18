'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const submitBtn = document.getElementById('contact-form-submit');
  const invisionButton = document.querySelector('.invision-btn');
  const invisionButtonEnd = document.querySelector('.invision-btn-end button');

  if (invisionButton) {
    invisionButton.addEventListener('click', () =>
      window.open(
        'https://invis.io/Z5HOJMHTHSG#/276496524_Landing-View-Desktop'
      )
    );

    invisionButtonEnd.addEventListener('click', () =>
      window.open(
        'https://invis.io/Z5HOJMHTHSG#/276496524_Landing-View-Desktop'
      )
    );
  }

  if (form) {
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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value
        })
      })
        .then((res) => {
          if (res.status !== 200) {
            name.removeAttribute('disabled');
            email.removeAttribute('disabled');
            message.removeAttribute('disabled');
            submitBtn.removeAttribute('disabled');
            return alert(
              'Something went wrong. Please send your message again.'
            );
          }

          name.value = '';
          email.value = '';
          message.value = '';
          name.removeAttribute('disabled');
          email.removeAttribute('disabled');
          message.removeAttribute('disabled');
          submitBtn.removeAttribute('disabled');
          return alert('Messsage sent!');
        })
        .catch((err) => {
          console.log(err);
          name.removeAttribute('disabled');
          email.removeAttribute('disabled');
          message.removeAttribute('disabled');
          submitBtn.removeAttribute('disabled');
          return alert('Something went wrong. Please send your message again.');
        });
    });
  }
});
