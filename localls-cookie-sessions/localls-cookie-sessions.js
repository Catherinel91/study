const blockDrop = document.querySelector(".block-locals-drop");
const blockDropBtn = blockDrop.querySelector("button");
const localsBtnRemove = document.querySelector(".block-locals button");
const sessionAddBtn = document.querySelector(".block-sessions .add");
const sessionRemoveBtn = document.querySelector(".block-sessions .remove");
const sessionGetBtn = document.querySelector(".block-sessions .get");
const sessionGetObjBtn = document.querySelector(".block-sessions .obj");
const sessionClearBtn = document.querySelector(".block-sessions .clear");
const cookieAddBtn = document.querySelector(".block-cookie .add");
const cookieRemoveBtn = document.querySelector(".block-cookie .remove");


//localStorage
function hideBlock() {
    if(localStorage.getItem("test-key")) {
        blockDrop.classList.add("hide");
    }
}

!!blockDropBtn && blockDropBtn.addEventListener("click", function() {
    blockDrop.classList.add("hide");
    localStorage.setItem("test-key", "ok");
})

window.addEventListener("load" , hideBlock);
localsBtnRemove.addEventListener("click", (e) => localStorage.removeItem("test-key"));

window.addEventListener('storage', function(e){
    console.log(localStorage.length,e.newValue,e.url, e.oldValue);
});

//sessionS
let sessionObj = {
    key1 : "val1",
    key2 : "val2",
    key3 : "val3"
}
let jsonObj = JSON.stringify(sessionObj);

function getSessionSKeys() {
    let keysSessionS = Object.keys(sessionStorage);
    for(let key of keysSessionS) {
        alert(`${key}: ${sessionStorage.getItem(key)}`)
    }
}

function getSessionSKeys2() {
    for(let key of Object.keys(sessionObj)) {
        sessionStorage.setItem(`${key}`, `${sessionObj[key]}`);
    }
}

sessionRemoveBtn.addEventListener("click", (e) => sessionStorage.removeItem("key-obj"));
sessionAddBtn.addEventListener("click", (e) =>  getSessionSKeys2());
sessionGetBtn.addEventListener("click", (e) => sessionStorage.getItem(getSessionSKeys()));
sessionGetObjBtn.addEventListener("click", (e) => sessionStorage.setItem("key-obj", jsonObj));
sessionClearBtn.addEventListener("click", (e) => sessionStorage.clear());

//cookie
cookieAddBtn.addEventListener("click", (e) => document.cookie =`test=Key1; expires=${new Date(2022,0,1).toUTCString()}`);



