
const createUser = (data, item) => {
   // item.innerHTML = data.name.first + " " + data.name.last
};




async function getRandomPeople(item) {
    try {
        const response = await axios.get('https://randomuser.me/api/')
        createUser(response.data.results[0], item)
    } catch (error) {
        console.error(error);
    }
}

const leftBox = document.getElementById("1");
const rightBox = document.getElementById("2");
leftBox.addEventListener("onload", getRandomPeople(leftBox));
rightBox.addEventListener("onload", getRandomPeople(rightBox));




