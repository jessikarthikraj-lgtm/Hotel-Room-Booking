// Menu toggle for small screens
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Booking form validation and submission
const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const roomType = bookingForm.roomType.value;
  const checkIn = bookingForm.checkIn.value;
  const checkOut = bookingForm.checkOut.value;
  const guests = bookingForm.guests.value;

  if (!roomType || !checkIn || !checkOut || !guests) {
    bookingMessage.style.color = 'red';
    bookingMessage.textContent = "Please fill out all the fields.";
    return;
  }

  // Check if check-out date is after check-in
  if (new Date(checkOut) <= new Date(checkIn)) {
    bookingMessage.style.color = 'red';
    bookingMessage.textContent = "Check-out date must be after check-in date.";
    return;
  }

  bookingMessage.style.color = 'green';
  bookingMessage.textContent = `Thank you for booking the ${roomType}. We will contact you soon!`;

  bookingForm.reset();
});

// Book Now buttons auto-select room and scroll to booking form
const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    bookingForm.roomType.value = button.getAttribute('data-room');
    bookingForm.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submission with simple validation
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const phone = contactForm.phone.value.trim();
  const subject = contactForm.subject.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !phone || !subject || !message) {
    contactMessage.style.color = 'red';
    contactMessage.textContent = "Please fill out all the fields.";
    return;
  }

  // Simple email pattern check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    contactMessage.style.color = 'red';
    contactMessage.textContent = "Please enter a valid email address.";
    return;
  }

  contactMessage.style.color = 'green';
  contactMessage.textContent = "Thank you for contacting us! We will get back to you soon.";

  contactForm.reset();
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

// Auto cycle testimonials every 8 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 8000);
