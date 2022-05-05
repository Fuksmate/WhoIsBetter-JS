const getUsers = () => {
    axios.get('https://randomuser.me/api/')
        .then(response => {
            console.log(response.data.results);
        })
        .catch(error => console.error(error));
};


getUsers();