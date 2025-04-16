const navToggle = document.querySelector('#navToggle');
  const mobileMenu = document.querySelector('#mobileMenu');

  navToggle.addEventListener('click', (e) => {
    e.preventDefault(); 
    mobileMenu.classList.toggle('hidden');
  });

  const form = document.querySelector('form');
  const nameField = document.querySelector('input[name="fname"]');
  const contactField = document.querySelector('input[name="contact1"]');
  const messageField = document.querySelector('textarea[name="card"]');
  
  if (form && nameField && contactField && messageField) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
  
      const name = nameField.value;
      const contact = contactField.value;
      const message = messageField.value;
  
      console.log("Form Submitted!");
      console.log("Name:", name);
      console.log("Contact:", contact);
      console.log("Message:", message);
  
      alert(`Thanks for reaching out, ${name}!`);
  
      form.reset(); 
    });
  }
  
