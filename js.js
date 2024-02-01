var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
function performSearch() {
    var city = document.getElementById("city").value;
    var date = document.getElementById("date").value;
    var people = document.getElementById("people").value;


    var resultContainer = document.getElementById("searchResult");
    resultContainer.innerHTML = "";

    if (city && date && people) {
        if (city === "Бакото" && date === "2024-02-10" && people <= 3) {
            resultContainer.innerHTML = "<p>Місця є в наявності!</p>";
        } else {
            resultContainer.innerHTML = "<p>Вибачаємось, але місць на вибрану вами дату не має</p>";
        }
    } else {
        resultContainer.innerHTML = "<p>Будь ласка, заповніть всі поля</p>";
    }

    resultContainer.style.display = "block";
}
function submitForm() {
    const gmail = document.getElementById('gmail').value;
    const fullName = document.getElementById('fullName').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (gmail && fullName && gender && dob && phoneNumber) {
        document.getElementById('profileGmail').textContent = `Gmail: ${gmail}`;
        document.getElementById('profileFullName').textContent = `ПІБ: ${fullName}`;
        document.getElementById('profileGender').textContent = `Стать: ${gender}`;
        document.getElementById('profileDob').textContent = `Дата народження: ${dob}`;
        document.getElementById('profilePhoneNumber').textContent = `Номер телефону: ${phoneNumber}`;

        document.getElementById('registrationForm').reset();
        document.body.classList.remove('show-registration');
        document.body.classList.add('show-profile');
    } else {
        alert('Заповніть дані до кінця.');
    }
}

function changeAvatar() {
    const imagePath = prompt('Введіть шлях до нового аватара:');
    if (imagePath) {
        document.getElementById('avatarImage').src = imagePath;
    }
}


