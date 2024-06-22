function generate() {
    let checkedValue = "";
    let inputElements = document.getElementsByClassName('form-check-input');
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            checkedValue += inputElements[i].value;
        }
    }

    if (checkedValue === "") {
        console.log("No input selected");
        alert('"No input selected"')
        return;
    }

    let len = document.getElementById('lenOfPass').value
    let passwordLength = len;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * checkedValue.length);
        password += checkedValue[randomIndex];
    }

    console.log("Generated Password: ", password);
    document.getElementById("PassShow").innerText = "Generated Password: " + password;
}