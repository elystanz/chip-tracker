const loginFormHandler = async (event) => {
    event.preventDefault
    const username = document.querySelector('#inputVetUser').value.trim()
    const password = document.querySelector('#inputVetPassword').value.trim()
    if (username && password){
        const response = await fetch('/api/vets/vets-login',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        });
        if (response.ok){
            document.location.replace('/');
        }else {
            alert('Failed to log in.')
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#sign-inputVetUser').value.trim()
    const password = document.querySelector('#sign-inputVetPasword').value.trim()
    if (username && password){
        const response = await fetch('/api/vets',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok){
            document.location.replace('/');
        }else {
            alert('Failed to sign up.')
        }
    }
};

document.querySelector('.login').addEventListener('submit',loginFormHandler)
document.querySelector('.signup').addEventListener('submit',signupFormHandler)