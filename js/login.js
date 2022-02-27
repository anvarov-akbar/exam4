const elForm = document.querySelector(".login__form");
const elEmailInput = document.querySelector(".email");
const elPasswordInput = document.querySelector(".password")

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const emailInput = elEmailInput.value.trim();
    const passwordInput = elPasswordInput.value.trim();



    fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "appLication/json",
            },

            body: JSON.stringify({
                email: emailInput,
                password: passwordInput,
            }),
        }).then((response) => response.json())
        .then((data) => {
            if (data?.token) {
                window.localStorage.setItem('token', data.token);

                window.location.replace('index.html');
            }
        });
});