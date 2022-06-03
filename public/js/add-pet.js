// const req = require("express/lib/request");

const addPetHandler = async (event) => {
    event.preventDefault
    const petName = document.querySelector('#petName').value.trim()
    const ownerName = document.querySelector('#ownerName').value.trim()
    const chipped = document.form[0][1].value
    console.log(chipped)
    // let i;
    // for(i=0;i<chipped.length;i++){
    // if(chipped[i].checked){
    //     chipped = chipped[i].value;
    //     return chipped
    //     }
    // }
    // console.log(petName)
    // console.log(ownerName)
    // var chipper = ''
    // const chipped = document.querySelector('#chipped').checked
    // if (chipped) {
    //     chipped = document.querySelector('#chipped').value
    // }
    //  else{
    //      chipped = document.querySelector('#notChipped').value
    //  }
    if (petName && ownerName && chipped){
        const response = await fetch('/api/vets/add-pet',{
            method: 'POST',
            body: JSON.stringify({petName,ownerName,chipped}),
            headers: {'Content-Type':'application/json'},
    })
        if (response.ok){
        document.location.replace('../vet');
        }else {
        alert('Failed to log in.')
}};
   
};

document.querySelector('.addPet').addEventListener('submit', (e) => addPetHandler(e))