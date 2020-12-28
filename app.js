document.getElementById('submit-button').addEventListener('click', () => {
  let paperPlane = document.getElementById('paper-plane-icon');

  paperPlane.style = '-webkit-animation: fly 3s ease;';
  paperPlane.addEventListener('webkitAnimationEnd', () => {
    paperPlane.style.animation = "";
    document.getElementById('input-field').value = "";
 })
})
