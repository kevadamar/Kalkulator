const action = document.querySelectorAll("button")
const hasil = document.getElementById("hasil")

function tambah() {
    const checkboxs = document.querySelectorAll("input:checked")
    if (checkboxs.length === 1 || checkboxs.length === 0) {
        hasil.style.color = "red"
        // hasil.style.marginLeft = "0"
        hasil.innerHTML = "mohon ceklis minimal 2"

    } else {
        let countValue = 0;
        hasil.innerHTML = ""
        checkboxs.forEach((checkbox) => {
            let value = checkbox.parentElement.querySelector("input[type=number]").value
            if (value == "") {
                hasil.innerHTML = "mohon isi terlebih dahulu"
                // hasil.style.marginLeft = "0"
                hasil.style.color = "red"
            } else {
                countValue += parseInt(value)
                hasil.style.color = "black"
                // hasil.style.marginLeft = "85px"
                hasil.innerHTML = countValue
            }
        })
    }
}

function kurang() {
    const checkboxs = document.querySelectorAll("input:checked")
    if (checkboxs.length === 1 || checkboxs.length === 0) {
        hasil.style.color = "red"
        // hasil.style.marginLeft = "0"
        hasil.innerHTML = "mohon ceklis minimal 2"

    } else {
        let countValue = 0,
            valid = 0;
        hasil.innerHTML = ""
        checkboxs.forEach((checkbox) => {
            let value = checkbox.parentElement.querySelector("input[type=number]").value
            if (value == "") {
                hasil.innerHTML = "mohon isi terlebih dahulu"
                // hasil.style.marginLeft = "0"
                hasil.style.color = "red"
                valid++
            } else {
                countValue = (countValue === 0 ? countValue + parseInt(value) : countValue - parseInt(value))
                if (valid === 0) {
                    hasil.style.color = "black"
                    // hasil.style.marginLeft = "85px"
                    hasil.innerHTML = countValue
                }
            }
        })
    }
}

function kali() {
    const checkboxs = document.querySelectorAll("input:checked")
    if (checkboxs.length === 1 || checkboxs.length === 0) {
        hasil.style.color = "red"
        // hasil.style.marginLeft = "0"
        hasil.innerHTML = "mohon ceklis minimal 2"

    } else {
        let countValue = 0,
            valid = 0;
        hasil.innerHTML = ""
        checkboxs.forEach((checkbox) => {
            let value = checkbox.parentElement.querySelector("input[type=number]").value
            if (value === "") {
                hasil.innerHTML = "mohon isi terlebih dahulu"
                // hasil.style.marginLeft = "0"
                hasil.style.color = "red"
                valid++
            } else {
                countValue = (countValue === 0 ? parseInt(value) : countValue * parseInt(value))
                if (valid === 0) {
                    hasil.style.color = "black"
                    // hasil.style.marginLeft = "85px"
                    hasil.innerHTML = countValue
                    // console.log(value)
                }
            }
        })
    }
}

function bagi() {
    const checkboxs = document.querySelectorAll("input:checked")
    if (checkboxs.length === 1 || checkboxs.length === 0) {
        hasil.style.color = "red"
        // hasil.style.marginLeft = "0"
        hasil.innerHTML = "mohon ceklis minimal 2"

        // console.log("mohon ceklis minimal 2")
    } else {
        let countValue = 0,
            valid = 0;
        hasil.innerHTML = ""
        checkboxs.forEach((checkbox) => {
            let value = checkbox.parentElement.querySelector("input[type=number]").value
            if (value === "") {
                hasil.innerHTML = "mohon isi terlebih dahulu"
                // hasil.style.marginLeft = "0"
                hasil.style.color = "red"
                valid++
            } else {
                countValue = (countValue === 0 ? parseInt(value) : countValue / parseInt(value))
                if (valid === 0) {
                    hasil.style.color = "black"
                    // hasil.style.marginLeft = "85px"
                    hasil.innerHTML = countValue
                    // console.log(value)
                }
            }
        })
    }
}

action.forEach((item) => {
    item.addEventListener('click', (e) => {
        let operator = e.target.value

        if (operator == "+") {
            this.tambah()
        } else if (operator == "-") {
            this.kurang()
        } else if (operator == "x") {
            this.kali()
        } else {
            this.bagi()
        }
    })
})