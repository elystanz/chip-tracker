const logout = async () => {
    const response = await fetch('/api/vets/logout',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    if (response.ok){
        document.location.replace('/');
    } else{alert('Failed to logout.');
}
};

document.querySelector('#')