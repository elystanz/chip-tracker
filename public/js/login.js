const loginFormHandler = async (event) => {
    event.preventDefault
    const username = document.querySelector('#inputVetUser').value.trim()
    const password = document.querySelector('#inputVetPassword').value.trim()
    if (username && password){
        const response = await fetch('/api/vets/login',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        });
        if (response.ok){
            document.location.replace('../vet');
        }else {
            alert('Failed to log in.')
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#sign-inputVetUser').value.trim()
    const password = document.querySelector('#sign-inputVetPassword').value.trim()
    console.log({username, password});
    if (username && password){
        const response = await fetch('/api/vets/signup',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        console.log(response);
        if (response.ok){
             document.location.replace('../vet');
        }else {
            alert('Failed to sign up.')
        }
    }
};

document.querySelector('.login').addEventListener('submit', (e) => loginFormHandler(e))

document.querySelector('.signup').addEventListener('submit',(e) => signupFormHandler(e))