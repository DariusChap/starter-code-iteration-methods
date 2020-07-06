// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

console.groupCollapsed('Kata 1')
const Kata1 = document.createElement('h1')
Kata1.append('Kata 1')
main.append(Kata1)


const newActive = users.filter(user => user.isActive === true)
main.append(JSON.stringify(newActive))

console.log(newActive)
console.groupEnd()


console.groupCollapsed('Kata 2')
const Kata2 = document.createElement('h1')
Kata2.append('Kata 2')
main.append(Kata2)

const perEmail = users.map(user => user.email)
main.append(JSON.stringify(perEmail))

console.groupEnd()

console.groupCollapsed('Kata 3')
const Kata3 = document.createElement('h1')
Kata3.append('Kata 3')
main.append(Kata3)

const newComp = users.some(user => user.company === "OVATION")
main.append(newComp)

console.groupEnd()

console.groupCollapsed('Kata 4')
const Kata4 = document.createElement('h1')
Kata4.append('Kata 4')
main.append(Kata4)

const newAge = users.find(user => user.age > 38)
main.append(JSON.stringify(newAge))

console.groupEnd()

console.groupCollapsed('Kata 5')
const Kata5 = document.createElement('h1')
Kata5.append('Kata 5')
main.append(Kata5)

const newActive1 = users
    .filter(user => user.isActive === true)
    .find(user => user.age > 38)
main.append(newActive1)

console.groupEnd()

console.groupCollapsed('Kata 6')
const Kata6 = document.createElement('h1')
Kata6.append('Kata 6')
main.append(Kata6)

const newBalance = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)
main.append(newBalance)

console.groupEnd()

console.groupCollapsed('Kata 7')
const Kata7 = document.createElement('h1')
Kata7.append('Kata 7')
main.append(Kata7)

const newAge1 = users
.filter(user => user.tags.includes("fugiat"))

main.append(JSON.stringify(newAge1.map(user => user.age)))

console.groupEnd()



