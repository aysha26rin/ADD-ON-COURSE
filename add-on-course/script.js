document.addEventListener('DOMContentLoaded', () => {
    // --- Data for all courses from the PDF ---
    const courseData = {
        "Short Film Making": {
            department: "Department of Malayalam",
            duration: "36 Hours",
            seats: "50 Seats",
            fee: "Rs. 1000",
            contact: "Mr Ajeesh Thomas (8129534291)",
            highlights: "Direction, Script Writing, Cinematography, Editing"
        },
        "Tally ERP-9": {
            department: "Department of Commerce",
            duration: "72 Hours",
            seats: "40 Seats",
            fee: "Rs. 3500",
            contact: "Mr. Anishmon K A (9895752051) / Mr Binu Antony (964524065)",
            highlights: "Kerala Public Service Commission Approved Tally Certification"
        },
        "MS Excel": {
            department: "Department of Commerce",
            duration: "36 Hours",
            seats: "90 Seats",
            fee: "Rs. 3500",
            contact: "Mr Sebastian K S (9895222015)",
            highlights: "Create spreadsheets, data analyses, charts, budgets and more."
        },
        "Web Design": {
            department: "Department of Computer Science",
            duration: "36 Hours",
            seats: "30 Seats",
            fee: "Rs. 1000",
            contact: "Ms Dhanya C.Nair (8281271755)",
            highlights: "HTML, Adobe Dreamweaver, Photoshop"
        },
        "LaTeX": {
            department: "Department of Mathematics",
            duration: "36 Hours",
            seats: "20 Seats",
            fee: "Rs. 1000",
            contact: "Ms Treesa Maria Kuriakose (8281446459)",
            highlights: "Learn high-quality typesetting, prepare documents with mathematical formulas, and create presentations."
        },
        "Quantitative Techniques": {
            department: "Department of Mathematics",
            duration: "36 Hours",
            seats: "50 Seats",
            fee: "Rs. 500",
            contact: "Ms Treesa Maria Kuriakose (8281446459)",
            highlights: "Prepare for competitive exams with detailed explanations and shortcut methods."
        },
        "Plant Tissue Culture": {
            department: "Department of Botany",
            duration: "54 Hours",
            seats: "30 Seats",
            fee: "Rs. 1500",
            contact: "Mr Tom Joseph (8075244093)",
            highlights: "Fundamentals and Applications of Plant tissue culture."
        },
        "Ornamental Fishes & Aquarium Management": {
            department: "Department of Zoology",
            duration: "36 Hours",
            seats: "40 Seats",
            fee: "Rs. 1000",
            contact: "Dr Rubin Philip (8547829482)",
            highlights: "Fundamentals and Applications of Plant tissue culture."
        },
        "Financial Journalism": {
            department: "Department of Economics",
            duration: "36 Hours",
            seats: "50 Seats",
            fee: "Rs. 1000",
            contact: "Dr Jeril Tom (9400355815)",
            highlights: "Introduction to Economic & Business Concepts, Data processing & Analytical Writing, Researching & Financial Reporting."
        },
        "Instrumental Methods of Analysis": {
            department: "Department of Chemistry",
            duration: "36 Hours",
            seats: "40 Seats",
            fee: "Rs. 1000",
            contact: "Dr Renchu Scaria (8281628623)",
            highlights: "Introduces modern analytical techniques like Mass Spectrometry; UV-Visible, IR, and NMR spectroscopy."
        },
        "German": {
            department: "Career Orientation Centre",
            duration: "36 Hours",
            seats: "40 Seats",
            fee: "Rs. 1000",
            contact: "Fr Mohan Mathew (9447596997)",
            highlights: "Learn one of the world's major languages, spoken by an estimated 95 million native speakers."
        },
        "Cosmetics Management": {
            department: "Career Orientation Centre",
            duration: "36 Hours",
            seats: "40 Seats",
            fee: "Rs. 1000",
            contact: "Fr Mohan Mathew (9447596997)",
            highlights: "Training in cosmetic ingredients, retailing, merchandising, marketing, make-up, and skin care application."
        },
        "Learn English Through Films": {
            department: "Department of English",
            duration: "36 Hours",
            seats: "30 Seats",
            fee: "Rs. 1000",
            contact: "Mr Neville Thomas (9747683238)",
            highlights: "English Listening and Comprehension, Basic grammar, Speaking and Presentation, Writing and Translation."
        },
        "Video Production": {
            department: "BTV",
            duration: "36 Hours",
            seats: "50 Seats",
            fee: "Rs. 1000",
            contact: "Dr Sunny Sebastian (9447809967)",
            highlights: "Editing, Cinematography"
        },
        "MATLAB": {
            department: "Department of Physics",
            duration: "36 Hours",
            seats: "12 Seats",
            fee: "Rs. 1000",
            contact: "Dr. Sajith Mathews T (8281237308 / 6282527440)",
            highlights: "Introduction to computer programming using Matlab for processing and displaying numerical data."
        },
        "Digital Marketing & Branding Skills": {
            department: "Career Orientation Centre",
            duration: "36 Hours",
            seats: "40 Seats",
            fee: "Rs. 1000",
            contact: "Fr Mohan Mathew (9447596997)",
            highlights: "Develop a combination of technical digital marketing skills and soft skills."
        }
    };

    // --- Logic for the Main Form Page (index.html) ---
    const courseForm = document.getElementById('course-form');
    if (courseForm) {
        courseForm.addEventListener('submit', function(event) {
            // This line prevents the page from reloading, allowing our script to run
            event.preventDefault(); 

            const selectedCourse = document.getElementById('course-selection').value;
            if (selectedCourse) {
                // This line redirects to the new page with the selected course as a parameter
                window.location.href = `course-details.html?course=${encodeURIComponent(selectedCourse)}`;
            } else {
                alert('Please select a course.');
            }
        });
    }

    // --- Logic for the Course Details Page (course-details.html) ---
    const detailsContent = document.getElementById('course-details-content');
    if (detailsContent) {
        const params = new URLSearchParams(window.location.search);
        const courseName = params.get('course');
        const details = courseData[courseName];

        if (details) {
            detailsContent.innerHTML = `
                <h3>${courseName}</h3>
                <p><strong>Department:</strong> ${details.department}</p>
                <p><strong>Duration:</strong> ${details.duration}</p>
                <p><strong>Available Seats:</strong> ${details.seats}</p>
                <p><strong>Course Fee:</strong> ${details.fee}</p>
                <p><strong>Highlights:</strong> ${details.highlights}</p>
                <p><strong>Contact:</strong> ${details.contact}</p>
            `;
        } else {
            detailsContent.innerHTML = `<p class="text-danger">Could not find details for the selected course. Please go back and try again.</p>`;
        }
    }
});