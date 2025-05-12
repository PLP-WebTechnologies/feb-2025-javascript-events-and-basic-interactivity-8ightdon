// 1. Event Handling

// Click Event
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  // Hover Effects
  const hoverBox = document.getElementById('hoverBox');
  hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightblue';
  });
  hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'lightgray';
  });
  
  // Keypress Detection
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Double Click
  document.getElementById('dblClickBtn').addEventListener('dblclick', () => {
    alert('Button double-clicked!');
  });
  
  // Long Press
  const longPressBtn = document.getElementById('longPressBtn');
  let pressTimer;
  longPressBtn.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      alert('Long press detected!');
    }, 1000);
  });
  longPressBtn.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
  });
  
  // 2. Interactive Elements
  
  // Button that Changes Text and Color
  const changeBtn = document.getElementById('changeBtn');
  changeBtn.addEventListener('click', () => {
    changeBtn.textContent = 'Changed!';
    changeBtn.style.backgroundColor = 'green';
    changeBtn.style.color = 'white';
  });
  
  // Accordion Functionality
  const accordions = document.getElementsByClassName('accordion');
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }
  
  // 3. Form Validation
  
  const form = document.getElementById('myForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  
  // Real-time Validation
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required.';
    } else {
      nameError.textContent = '';
    }
  });
  
  emailInput.addEventListener('input', () => {
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email.';
    } else {
      emailError.textContent = '';
    }
  });
  
  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters.';
    } else {
      passwordError.textContent = '';
    }
  });
  
  // Form Submission Validation
  form.addEventListener('submit', (e) => {
    let valid = true;
  
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      valid = false;
    }
  
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email.';
      valid = false;
    }
  
    if (passwordInput.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters.';
      valid = false;
    }
  
    if (!valid) {
      e.preventDefault();
    }
  });
  