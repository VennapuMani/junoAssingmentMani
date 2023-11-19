let webAassingmentNextELe = document.getElementById("webAassingmentNext");
let monitorigPageEle = document.getElementById("monitorigPage");
let webAassingmentPageEle = document.getElementById("webAassingmentPage");
let pendingEle = document.getElementById("pending");
let completedEle = document.getElementById("completed");
let sectionPendingEle = document.getElementById("sectionPending");
let sectionCompletedEle = document.getElementById("sectionCompleted");

webAassingmentNextELe.onclick = function(){
    webAassingmentPageEle.classList.add("d-none");
    monitorigPageEle.classList.remove("d-none");
    monitorigPageEle.classList.add("d-block");
}

sectionCompletedEle.classList.add("d-none");

completedEle.onclick = function(){
    sectionCompletedEle.classList.remove("d-none");
    sectionPendingEle.classList.add("d-none");
}

pendingEle.onclick = function(){
    sectionCompletedEle.classList.add("d-none");
    sectionPendingEle.classList.remove("d-none");
}





let emailEle = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let reasonEle = document.getElementById("reason");
let reasonErrMsgEl = document.getElementById("reasonErrMsg");

let noteEle = document.getElementById("note");
let noteErrMsgEl = document.getElementById("noteErrMsg");

let myFormEl = document.getElementById("myForm");
let accountCloseButtonEle = document.getElementById("accountCloseButton");


reasonEle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      reasonErrMsgEl.textContent = "Required*";
    } else {
      reasonErrMsgEl.textContent = "";
    }
});
  
emailEle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      emailErrMsgEl.textContent = "Required*";
    } else {
      emailErrMsgEl.textContent = "";
    }
});

noteEle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      noteErrMsgEl.textContent = "Required*";
    } else {
      noteErrMsgEl.textContent = "";
    }
});
  
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

accountCloseButtonEle.onclick = function(){
    if (emailErrMsgEl==="" && reasonErrMsgEl==="" && noteErrMsgEl===""){
        alert("Your account has been closed successfully!!!")
    }
    else{
        alert("Please enter required fields...")
    }
}
