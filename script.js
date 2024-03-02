function alertFunction()
{
    let alertMessage = `                       
Hey! Welcome to Netflicks : A Netflix Clone 

This feature is not available. Try out the other features :

1. Fully Responsive.
2. Checking for EMail Adrress validity.
3. Functional FAQ Section
4. Get Started button leads to Netflicks Home Page`
    alert(alertMessage)
}

let emailLogin = document.getElementById("email-login")
let emailError = document.getElementById("email-error")
let formdiv = document.getElementById("form-div")
let atag = document.getElementById("getStarted1")

function validateEmail()
{
    if (!emailLogin.value)
    {
        emailError.innerHTML = "⊗ Email is required.";
        formdiv.style.borderColor = "red"
        return false
    }
    else if (!emailLogin.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML = "⊗ Please enter a valid email address.";
        emailError.style.fontSize = ".8rem"
        emailError.style.fontWeight = "500"
        formdiv.style.borderColor = "red"
        return false
    }
    else
    {
        emailError.innerHTML = ""
        formdiv.style.borderColor = "#1CAC78"
        atag.href = "homepage/index.html"
        return true;
    }
}


let emailLogin2 = document.getElementById("email-login2")
let emailError2 = document.getElementById("email-error2")
let formdiv2 = document.getElementById("form-div2")
let atag2 = document.getElementById("getStarted2")

function validateEmail2()
{
    if (!emailLogin2.value)
    {
        emailError2.innerHTML = "⊗ Email is required.";
        formdiv2.style.borderColor = "red"
        return false
    }
    else if (!emailLogin2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError2.innerHTML = "⊗ Please enter a valid email address.";
        emailError2.style.fontSize = ".8rem"
        emailError2.style.fontWeight = "500"
        formdiv2.style.borderColor = "red"
        return false
    }
    else
    {
        emailError2.innerHTML = ""
        formdiv2.style.borderColor = "#1CAC78"
        atag2.href = "homepage/index.html"
        return true;
    }
}


const button1 = document.querySelector("#ques1")
const button2 = document.querySelector("#ques2")
const button3 = document.querySelector("#ques3")
const button4 = document.querySelector("#ques4")
const button5 = document.querySelector("#ques5")
const button6 = document.querySelector("#ques6")

let list = document.querySelectorAll(".ques")

button1.addEventListener("click", destroy)
button2.addEventListener("click", destroy)
button3.addEventListener("click", destroy)
button4.addEventListener("click", destroy)
button5.addEventListener("click", destroy)
button6.addEventListener("click", destroy)

function destroy(){
    list.forEach (answer => {
        if (answer.lastElementChild.style.display=="block" && answer.firstElementChild!=this)
        {
            answer.firstElementChild.lastElementChild.style.transform = "rotate(0deg)"
            answer.lastElementChild.style.display = "none"
        }
    });

    let element = this.nextElementSibling
    if (element.style.display == "none")
    {
        this.lastElementChild.style.transform = "rotate(45deg)"
        element.style.display = "block"
    }
    else
    {
        this.lastElementChild.style.transform = "rotate(0deg)"
        element.style.display = "none"
    }
}
