// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cin = document.getElementById('cin');
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const address = document.getElementById('address');
    const telephone = document.getElementById('telephone');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const fields = [cin, nom, prenom, address, telephone, email, password];

    // Clear previous error messages and styles
    fields.forEach(field => {
        field.classList.remove('error');
        document.getElementById(`${field.id}Error`).style.display = 'none';
    });

    let isValid = true;

    // Basic validation checks
    if (cin.value.trim() === '' || cin.value.length < 5 || cin.value.length > 20) {
        document.getElementById('cinError').textContent = 'CIN must be between 5 and 20 characters.';
        document.getElementById('cinError').style.display = 'block';
        cin.classList.add('error');
        isValid = false;
    }

    if (nom.value.trim() === '' || nom.value.length < 2 || nom.value.length > 30) {
        document.getElementById('nomError').textContent = 'Nom must be between 2 and 30 characters.';
        document.getElementById('nomError').style.display = 'block';
        nom.classList.add('error');
        isValid = false;
    }

    if (prenom.value.trim() === '' || prenom.value.length < 2 || prenom.value.length > 30) {
        document.getElementById('prenomError').textContent = 'Prenom must be between 2 and 30 characters.';
        document.getElementById('prenomError').style.display = 'block';
        prenom.classList.add('error');
        isValid = false;
    }

    if (address.value.trim() === '' || address.value.length < 5 || address.value.length > 100) {
        document.getElementById('addressError').textContent = 'Address must be between 5 and 100 characters.';
        document.getElementById('addressError').style.display = 'block';
        address.classList.add('error');
        isValid = false;
    }

    if (telephone.value.trim() === '' || telephone.value.length < 10 || telephone.value.length > 15) {
        document.getElementById('telephoneError').textContent = 'Telephone must be between 10 and 15 digits.';
        document.getElementById('telephoneError').style.display = 'block';
        telephone.classList.add('error');
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '' || !emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        document.getElementById('emailError').style.display = 'block';
        email.classList.add('error');
        isValid = false;
    }

    if (password.value.trim() === '' || password.value.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        password.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        // For demo purposes, let's assume we have a hardcoded user
        const hardcodedUser = {
            cin: '123456',
            nom: 'Doe',
            prenom: 'John',
            address: '123 Main St',
            telephone: '1234567890',
            email: 'john.doe@example.com',
            password: 'password123'
        };

        if (cin.value === hardcodedUser.cin && password.value === hardcodedUser.password) {
            document.getElementById('displayCin').textContent = hardcodedUser.cin;
            document.getElementById('displayNom').textContent = hardcodedUser.nom;
            document.getElementById('displayPrenom').textContent = hardcodedUser.prenom;
            document.getElementById('displayAddress').textContent = hardcodedUser.address;
            document.getElementById('displayTelephone').textContent = hardcodedUser.telephone;
            document.getElementById('displayEmail').textContent = hardcodedUser.email;

            document.querySelector('.login-container').style.display = 'none';
            document.getElementById('userInfo').style.display = 'block';
        } else {
            alert('Invalid CIN or password');
        }
    }
});
