document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

const form = document.forms['submit-to-google-sheet'];
const scriptURL = 'https://script.google.com/macros/s/AKfycbxseIOPAgP5MzMYCCB6L-kFimS1IvfnYGpQwbwrGNwxt1jSYzCIocxvU3E0E6Qo-SRL/exec';

form.addEventListener('submit', e => {
  e.preventDefault(); 

fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      alert('Your message has been sent successfully!');
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Error! Please try again.');
    });
});

const form1 = document.forms['sub-to-google-sheet'];
const scriptURL1 = 'https://script.google.com/macros/s/AKfycbxxSSdYlL1ztO8-wP5JjA9HTzSiL_eKBJaRst-U59RNey5mCw_txFajqitH8Cp9jnhIyw/exec'
form1.addEventListener('submit', e => {
  e.preventDefault(); 

fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
    .then(response => {
      console.log('Success!', response);
      alert('Your message has been sent successfully!');
      form1.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Error! Please try again.');
    });
});

