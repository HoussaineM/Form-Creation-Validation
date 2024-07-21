async function fetchUserData()
 {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        const response = await fetch(apiUrl);                    
        const users = await response.json();                     
        dataContainer.innerHTML = "";                            
        const userList = document.createElement("ul");           
        users.forEach(user => {                               
            const myList = document.createElement("li");
            myList.textContent = user.name;
            userList.appendChild(myList);
        });
        dataContainer.appendChild(userList);                          
    }
   
    catch (err) {
        dataContainer.innerHTML = "";
        dataContainer.innerHTML = 'Failed to load user data.';
        console.log(err);
    }
}

document.addEventListener("DOMContentLoaded", fetchUserData);