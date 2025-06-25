// // Mobile Menu Toggle
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });

//     // Close mobile menu when clicking a nav link
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', () => {
//             navLinks.classList.remove('active');
//         });
//     });

//     // Sticky header on scroll
//     window.addEventListener('scroll', () => {
//         const header = document.querySelector('header');
//         header.classList.toggle('sticky', window.scrollY > 0);
//     });

//     // Active nav link on scroll
//     window.addEventListener('scroll', () => {
//         const sections = document.querySelectorAll('section');
//         const navLinks = document.querySelectorAll('.nav-links a');

//         let current = '';

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;

//             if (pageYOffset >= (sectionTop - 300)) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').includes(current)) {
//                 link.classList.add('active');
//             }
//         });
//     });

//     // Project filter
//     const filterBtns = document.querySelectorAll('.filter-btn');

//     filterBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             // Remove active class from all buttons
//             filterBtns.forEach(b => b.classList.remove('active'));
//             // Add active class to clicked button
//             btn.classList.add('active');

//             // Filtering logic would go here
//             // For demo purposes, we'll just log the filter
//             console.log(`Filtering by: ${btn.textContent}`);
//         });
//     });

//     // Form submission
//     const contactForm = document.getElementById('contactForm');

//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         // Get form values
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const subject = document.getElementById('subject').value;
//         const message = document.getElementById('message').value;

//         // In a real implementation, you would send this data to a server
//         console.log('Form submitted:', { name, email, subject, message });

//         // Show success message
//         alert('Thank you for your message! I will get back to you soon.');

//         // Reset form
//         contactForm.reset();
//     });