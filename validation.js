const form = document.getElementById('form');
const username = document.getElementById('usernameInput');
const courriel = document.getElementById('courrielInput');
const adresse = document.getElementById('adresseInput');
const ville = document.getElementById('villeInput');
const province = document.getElementById('provinceInput');
const pays = document.getElementById('paysInput');
const password = document.getElementById('passwordInput');
const password2 = document.getElementById('password2Input');

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSucces = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidCourriel = courriel => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(courriel).toLowerCase());
};

const validateForm = () => {
    let noError = true;
    const usernameValue = username.value.trim();
    const courrielValue = courriel.value.trim();
    const adresseValue = adresse.value.trim();
    const villeValue = ville.value.trim();
    const provinceValue = province.value.trim();
    const paysValue = pays.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
        noError = false;
    } else {
        setSucces(username);
    }

    if (courrielValue === '') {
        setError(courriel, 'Email required');
        noError = false;
    } else if (courrielValue.length < 8) {
        setError(courriel, 'provide a valid email address');
        noError = false;
    } else {
        setSucces(courriel);
    }

    if (adresseValue === '') {
        setError(adresse, 'Adresse requise');
        noError= false;
    } else {
        setSucces(adresse);
    }

    if (villeValue === '') {
        setError(ville, 'Ville requise');
        noError = false;
    } else {
        setSucces(ville);
    }

    if (provinceValue === '') {
        setError(province, 'Province requise');
        noError = false;
    } else {
        setSucces(province);
    }

    if (paysValue === '') {
        setError(pays, 'Pays requis');
        noError = false;
    } else {
        setSucces(pays);
    }

    if (passwordValue === '') {
        setError(password, 'Password required');
        noError = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character');
        noError = false;
    } else {
        setSucces(password);
    }

    if (password2Value === '') {
        setError(password2, 'Password required');
        noError = false;
    } else if (password2Value != passwordValue) {
        setError(password2, 'Password must be the same');
        noError = false;
    } else {
        setSucces(password2);
    }

    return noError
};
