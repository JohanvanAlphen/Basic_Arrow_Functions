const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]
// .filter (no mutation)
// Filtert alle items kleiner of gelijk aan 100
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

// .map (no mutation)
// Laat items zien die je selecteert, zoals 'name' of 'price'
const itemNames = items.map((item) => {
    return item.name
})

// .find (no mutation)
// zoekt naar vast gegeven binnen Array
const foundItems = items.find((item) => {
    return item.name === 'Album'
})

// .forEach (no mutation)
// zoekt elk element op dat binnen je zoekcriterium valt
// Hier heb je ook geen const voor nodig
items.forEach((item) => {
    console.log(item.price)
    // geeft elk item met prijs weer
})

// .some (no mutation)
// Geeft alleen true of false, checkt de hele array
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
    // dit geeft als resultaat 'true' want er zijn items minder dan 100 waard
})

// .every (no mutation)
//Geeft alleen true of false, check de hele array
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100
    // dit geeft als resultaat 'false' want er zijn items meer dan 100 waard
})

// .reduce (no mutation)
// Geeft totaal weer van de optelling binnen de array
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
// De '0' geeft het startpunt aan waar de optelling moet beginnen, in dit geval het 1e bedrag

// .includes (no mutation)
// Geeft 'true' of 'false'aan als het opgegeven item er tussen staat
const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2)
// Resultaat is 'true' want getal 2 staat binnen de array