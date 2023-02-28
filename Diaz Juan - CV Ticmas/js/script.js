async function fetchUsers() {
    let response = await fetch("https://randomuser.me/api/?format=json");
    return response.json();
    
};


fetchUsers().then((data) => {
    document.getElementById("imagen_perfil").src=data.results[0].picture.large;
    document.getElementById("nombre_apellido").innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
    document.getElementById("numero_telefono").innerHTML = data.results[0].phone;
    document.getElementById("email").innerHTML = data.results[0].email;
    document.getElementById("linkedin").innerHTML = data.results[0].name.first+data.results[0].dob.age;
    document.getElementById("direccion").innerHTML = data.results[0].location.state + ", " + data.results[0].location.country;
    
});

