// const req = require("express/lib/request");

const addPetHandler = async (event) => {
    event.preventDefault;
    const petName = document.querySelector('#petName').value.trim();
    const ownerName = document.querySelector('#ownerName').value.trim();
    const chipped = document.querySelector('.form-check-input:checked');
    const chippedValue = chipped.value;

    
    if (petName && ownerName && chipped) {
        const response = await fetch('/api/vets/add-pet', {
            method: 'POST',
            body: JSON.stringify({ petName, ownerName, chippedValue }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('../vet');
        } else {
            alert('Failed to log in.')
        }
    };

};

document.querySelector('.addPet').addEventListener('submit', (e) => addPetHandler(e))