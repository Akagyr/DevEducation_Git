document.cookie = "userName=Leon;max-age=2629743;domain=google.com;path=/";
document.cookie = "userEmail=useremail@gmail.com";

console.log(document.cookie);

let cookies = document.cookie.split(/; /);
let cookiesObj = {};

for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split(/=/);
    cookiesObj[cookie[0]] = cookie[1];
}
console.log(cookiesObj);

for (let i in cookies) {
    document.cookie =/^[^=]+/.exec(cookies[i])[0] + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

if (typeof(Storage) !== "undefined") {
    console.log("Ура, есть поддержка localStorage");
} else { console.log("Ваш браузер не поддерживает localStorage"); }

localStorage.clear();

localStorage.setItem("myCourse", "front-end");
localStorage.setItem("isStudent", true);

console.log(localStorage);

if (localStorage["myCourse"]) {
    localStorage.setItem("country", "Ukraine");
}
console.log(localStorage);

localStorage.removeItem("isStudent");
console.log(localStorage);

let obj = {
    needed: "html-css",
    mustHave: true
};

for (const [key, value] of Object.entries(obj)) {
    localStorage[key] = value;
}
console.log(localStorage);