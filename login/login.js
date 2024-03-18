function login() {
    let name = document.getElementById("name").value;
    let pw = document.getElementById("pw").value;
    let user ={
        "username":name,
        "password": pw
    }
    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        data: JSON.stringify(user),
        url: "http://localhost:8080/api/auth/login",
        success: function (data) {
            localStorage.setItem("object", JSON.stringify(data));
            window.location.href = "../list/index.html"
        }
    })
    localStorage.setItem("key", "Vu thi Kieu anh")
}
