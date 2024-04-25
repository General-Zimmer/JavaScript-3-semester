async function getUser() {
    const response = await fetch('localhost:3000/api/', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',

    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function postData(url="http://localhost:3000/api/user", data={}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    let responseJson = await response.json();
    if (responseJson.status === 200) {
        document.getElementById("status").innerHTML = "User created successfully!";
    }
}

let button = document.getElementById('clickme');
button.addEventListener('click', () => {
    getUser();
    postData(data={name: 'John Doe'});
});