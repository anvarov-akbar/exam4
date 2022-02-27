const elBackBtn = document.querySelector('.back');
const elExitBtn = document.querySelector('.btn-exit');
const elInfoTemplate = document.querySelector('.info__template')
const elUserInfo = document.querySelector('.user__info')
const userID = window.localStorage.getItem('user_id')

fetch('https://jsonplaceholder.typicode.com/users?id='+userID)
.then(response => response.json())
.then((data)=>{
    if(data?.length > 0){
        console.log(data);
    }
});




elBackBtn.addEventListener('click', () =>{


    window.location.replace('index.html');
  })

// Log out logic
elExitBtn.addEventListener('click', () =>{

    window.localStorage.removeItem('token');
  
    window.location.replace('login.html');
  })