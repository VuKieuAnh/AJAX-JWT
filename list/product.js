function getAllProduct(){
    let ob = getKeyLocalStorage();
    if (ob != null){
        let token = ob.token;
        $.ajax({
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            crossDomain: true,
            type:"GET",
            url: "http://localhost:8080/api/customers",
            success: function (data){
                content = "";
                for (let i = 0; i < data.length; i++) {
                    content+=`<tr>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].address}</td>
    </tr>`
                }
                console.log(data)
                document.getElementById("content").innerHTML= content;
            }
        })
    }
    else {
        window.location.href = "../login/login.html"
    }

}

function getKeyLocalStorage(){
    let a = JSON.parse(localStorage.getItem("object"));
    return a;
}
// getKeyLocalStorage();
getAllProduct();
