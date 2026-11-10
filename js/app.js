const list = document.getElementById('list');
console.log(list);

//////// Додати стиль ////////

const add = () => {
    list.classList.add('add');
}

//////// Прибрати стиль ////////

const remove = () => {
    list.classList.remove('add');
}

//////// Перемкнути стиль ////////

function toggle() {
    list.classList.toggle('add');
}

//////// Розкласти картки ////////

const items = document.querySelectorAll('.add1');
console.log(items);

const add1 = () => {
    const cards = document.getElementById('cards');
    cards.classList.add('flex');

    items.forEach((item) => {
        item.classList.add('flex-item');
    });
}

//////// Показати фото ////////
const img = () => {
    const oldImg = document.getElementById('myImg');

    if (oldImg) {
        oldImg.remove();
    } else {
        const img = document.createElement('img');
        img.src = 'https://img.magnific.com/free-photo/mountains-lake_1398-1150.jpg?semt=ais_hybrid&w=740&q=80';
        img.alt = 'Моє фото';
        img.id = 'myImg';
        img.classList.add('img');
        list.appendChild(img);
    }
}

//////// Більше про мене ////////

const more = () => {
    const oldInfo = document.getElementById('info');

    if (oldInfo) {
        oldInfo.remove();
    } else {
        const div = document.createElement('div');
        div.id = 'info';
        div.classList.add('p');

        const h2 = document.createElement('h2');
        h2.textContent = 'Більше про мене';

        const p = document.createElement('p');
        p.textContent = 'Я люблю комп’ютерні ігри, спорт та програмування.';

        const a = document.createElement('a');
        a.href = 'https://github.com/Maoli16';
        a.textContent = 'Ось мій GitHub, де можна подивитися мої проекти.';
        a.target = '_blank';

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(a);

        list.appendChild(div);
    }
}
