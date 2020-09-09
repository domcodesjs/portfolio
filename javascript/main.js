'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let form = document.getElementById('contact-form');
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('https://formspree.io/moqkgpoz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
});

// helper function for sending an AJAX request

// function ajax(method, url, data, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader('Accept', 'application/json');
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// }
