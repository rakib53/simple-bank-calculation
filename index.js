const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("submitBtn");
const deposite = document.getElementById("deposite");
const withdraw = document.getElementById("withdraw");
const balance = document.getElementById("balance");
const depositeBalance = document.getElementById("deposite-balance");
const depositeBtn = document.getElementById("depositeBtn");
const balanceWithdraw = document.getElementById("balance-withdraw");
const withdrawBtn = document.getElementById("withdrawBtn");

loginButton.addEventListener("click", function (event) {
     event.preventDefault();

     const emailInputValue = email.value;
     const passwordInputValue = password.value;

     if (emailInputValue === "rakib@gmail.com") {
          if (passwordInputValue === "1234") {
               return (window.location.href = "./bank.html");
          } else {
               alert("Please Provide a correct password!");
          }
     } else {
          alert("Please Provide a correct email!");
     }
});

depositeBtn.addEventListener("click", function () {
     const depositeBalanceValue = depositeBalance.value;
     console.log(depositeBalanceValue);
});
