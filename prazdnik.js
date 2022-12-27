
const form = document.querySelector('.form');
const where = form.querySelector('.where');
const selectArr2 = form.querySelector('.selectArr2');
const price__text = document.querySelector('.price__text');
const price__sum = document.querySelector('.price__sum');
const time = document.querySelector('.time');
const show = document.querySelector('.show');
const present = document.querySelector('.present');
const button = document.querySelector('.button');
const showSpot = [['шоу мыльных пузырей', 500], ['шоу с житким азотом', 500], ['бумажная дискотека', 300], ['фотосессия с животными', 300]];
const presentVar = [['кружки', 500, 5000], ['дипломы', 50, 500], ['значки', 100, 1000], ['галстуки', 150, 1500]];
const showDeparture = [['шоу мыльных пузырей', 3000], ['бумажная дискотека', 4000]];
const timeVar = [['11.00', 0], ['14.00', 500], ['18.00', 500]];
let price = 0;
let priceTime = 0;
let priceShow = 0;
let pricePresent = 0;
console.log(button);
where.addEventListener('click', () => {
    let showText = ``;
    let timeText = "";
    let presentText = "";
    if (where.value == 'spot') {
        timeText = `<h3> выберите время мероприятия </h3>`;
        presentText = `<h3>Еще подарочки</h3>`
        timeVar.forEach((element) => {
            timeText += `<label>`;
            timeText += `<input type="radio" name="time" value="${element[1]}">${element[0]}`;
            timeText += `</label>`;
        })

        showSpot.forEach((element) => {
            showText += `<input type="checkbox" name="show" value="${element[1]}" > ${element[0]} <br>`
        })
        presentVar.forEach((element) => {
            presentText += `<input type="checkbox" name="present" value="${element[1]}" > ${element[0]} <br>`
        })
        show.innerHTML = showText;
        time.innerHTML = timeText;
        present.innerHTML = presentText;
        price = 4000;
        return price;

    }
    if (where.value == 'departure') {
        presentText = `<h3>Еще подарочки</h3>`
        showDeparture.forEach((element) => {
            showText += `<input type="checkbox" name="show" value="${element[1]}" > ${element[0]} <br>`
        })
        presentVar.forEach((element) => {
            presentText += `<input type="checkbox" name="present" value="${element[2]}" > ${element[0]} <br>`
        })
        show.innerHTML = showText;
        time.innerHTML = timeText;
        present.innerHTML = presentText;
        price = 26000;
        return price;
    }

    console.log(showText);
})

time.addEventListener('click', () => {
    let n = timeVar.length;
    for (let i = 0; i < n; i++)
        if (document.getElementsByName('time')[i].checked == true) {
            priceTime = document.getElementsByName('time')[i].value;
            console.log(priceTime);
            return priceTime;
        }
}
)
function showPrice() {
    let n = 0;
    if (where.value == 'spot') { n = showSpot.length; }
    if (where.value == 'departure') { n = showDeparture.length; }
    priceShow = 0;
    for (let i = 0; i < n; i++) {
        if (document.getElementsByName('show')[i].checked == true) {
            priceShow += + +document.getElementsByName('show')[i].value;
            console.log(priceShow);
        }
    }
    console.log(pricePresent);
    return priceShow;
}
function presentPrice() {
    let n = 0;
    pricePresent = 0;
    n = presentVar.length;
    for (let i = 0; i < n; i++) {
        if (document.getElementsByName('present')[i].checked == true) {
            pricePresent += + +document.getElementsByName('present')[i].value;

        }
    }
    return pricePresent;
}
button.addEventListener('click', () => {
    let priceTotal = 0;
    if (where.value == 'spot') {
        showPrice();
        presentPrice();
        console.log(pricePresent);
        priceTotal = +price + +priceTime + +priceShow + +pricePresent;
        price__sum.innerText = priceTotal + " за человека";
    }
    if (where.value == 'departure') {
        showPrice();
        presentPrice();
        priceTotal = +price + +priceShow + +pricePresent;
        price__sum.innerText = priceTotal + " за выезд";
    }

})