// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault(); 
        // cancel the event if it is cancelable (stop user from submitting)
        // if the data entered is invalid
        
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false)
  })



})()
