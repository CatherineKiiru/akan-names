function checkName(){
    event.preventDefault()
    let date = document.getElementById('date').value;
    let day = new Date(date).toDateString().split(' ')[0];
    let gender= document.getElementById('gender').value;
    alert(`${day} ${gender}`)
}

    