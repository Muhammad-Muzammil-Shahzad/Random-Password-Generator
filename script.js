let costomlenght = prompt("Length of the string");
function passwordGenerator(length = 12) {
  const characters =
    "~`!@#$%^&*()_-+=1234567890qwertyuiopasdfghjklzxcvbnm,.;[]'/.QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>?|";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomdigits = Math.floor(Math.random() * characters.length);
    password += characters[randomdigits];
  }
  document.getElementById("passwordfield").value = password;
}

function copypassword() {
  const fieldofpassword = document.getElementById("passwordfield");
  fieldofpassword.select();
  document.execCommand("copy");
  alert("Password Copy to clipboard");
}
