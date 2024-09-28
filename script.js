
let ContactName=document.getElementById("name");
let Contactemail=document.getElementById("email");
let ContactPhone=document.getElementById("phone");
let TextArea=document.getElementById("comment");


let button=document.getElementById("sendBtn");

button.addEventListener('click',()=>{
    if(ContactName.value=="" || Contactemail.value =="" || ContactPhone.value=="" || TextArea.value==""){
        alert("Please Fill Whole Form First :(");
    }
    else{
      alert("Your response has been Submitted Successfully! Thank you!")
       button.style.backgroundColor="grey";
       

    }
    
})

let linkedin = document.getElementById("LinkedIn");
linkedin.addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/malaika-ali-1015b12b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
});


const Checkbtns = document.getElementsByClassName("Check");

for (let i = 0; i < Checkbtns.length; i++) {
    Checkbtns[i].addEventListener('click', () => {
        window.open("https://github.com/MalaikaAliGitHub?tab=repositories");
    });
}






