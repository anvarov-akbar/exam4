const elUserList = document.querySelector('.user__list');
const elUserTemplate = document.querySelector('#user__template').content;
const elExitBtn = document.querySelector('.btn-exit');


const token = window.localStorage.getItem('token');

if(!token){
    window.location.replace('login.html');
}

const renderUsers = (array, node)=>{
    node.innerHTML = null;

    const usersFragment = document.createDocumentFragment();

    array.forEach((row) => {
        const userTemplate = elUserTemplate.cloneNode(true);

        userTemplate.querySelector('.user__link').textContent = row.email;
        userTemplate.querySelector('.user__link').href = 'mailto:' + row.email;
        userTemplate.querySelector('.user__full-name').textContent = row.name;
        userTemplate.querySelector('.user-phone').textContent = row.phone;
        userTemplate.querySelector('.info-btn').dataset.userId = row.id;

       



        usersFragment.appendChild(userTemplate); 
        
    });

    node.appendChild(usersFragment);

    
};

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then((data)=>{
    if(data?.length > 0){
        renderUsers(data, elUserList)
    }
});



elUserList.addEventListener('click', (evt)=>{
  if(evt.target.matches('.info-btn')){
    window.localStorage.setItem('user_id', evt.target.dataset.userId)
  }
})



// Log out logic
elExitBtn.addEventListener('click', () =>{

  window.localStorage.removeItem('token');

  window.location.replace('index.html');
});

