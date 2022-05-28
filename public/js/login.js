const loginFormHandler = async (event) => {
    event.preventDefault
    const username = document.querySelector('#inputVetUser')
    const password = document.querySelector('#inputVetPassword')
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

const 