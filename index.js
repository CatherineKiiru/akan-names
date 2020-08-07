let femaleNickNames = ['Akosua','Adowa','Abenaa','Akua','Yaa','Afua','Ama']
let maleNickNames = ['Kwasi','Kwadwo', 'Kwabena','Kwaku','Yaw','Kofi','Kwame']
let output = document.getElementById('output')
let form = document.getElementById('form')
function result(day,gender){
    if(gender==='male'){
       output.innerHTML = `Your Akan nickname is: ${maleNickNames[day]}`
    }
    else 
        alert(femaleNickNames[day])
}

    form.reset()

function checkName(){
    event.preventDefault()
    let formDate = document.getElementById('date').value;
    let date = new Date(formDate);
    let day = date.getDay();
    let gender = document.getElementById('gender').value;
    let today = new Date()
    if(formDate.length>0){
        result(day,gender)

    }else if(date>today){
        alert('Please select a your gender and date of birth')
    }       
}
    