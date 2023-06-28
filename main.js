document.addEventListener('DOMContentLoaded', () => {
  

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll('.like');
const errorModal = document.querySelector('#modal-message');


likeButtons.forEach((like) => {
like.addEventListener('click', (event) => {
  const heart = event.target.closest('.like-glyph');
  

  if (heart.classList.contains('activated-heart')) {
    heart.classList.remove('activated-heart');
    heart.classList.add('empty-heart');
    heart.textContent = EMPTY_HEART;
  } else {
    mimicServerCall()
      .then(() => {
        heart.classList.add('activated-heart');
        heart.classList.remove('empty-heart');
        heart.textContent = FULL_HEART;
      })
      .catch((error) => {
        errorModal.classList.remove('hidden');
        errorModal.textContent = error;
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  }
});
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


});