const display = document.getElementById('display');

const populate = async () => {
    const resp = await fetch('http://localhost:3000/data');
    const data = await resp.json();

    for (let item of data) {
        let elem = document.createElement('p');
        elem.innerText = `${item.name}-${item.cuisine}: ${item.price}`
        display.appendChild(elem)
    }
}

populate();