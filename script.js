let firstName = prompt('Enter your name', '').trim();
let secondName = prompt('Enter your surname', '').trim();
let personEmail = prompt('Enter your email', '').replace(/ /g, "").toLowerCase();
let personAge = +prompt('Enter your year of birth').replace(/ /g, "");
let actualYear = new Date().getFullYear();
let age = actualYear - personAge;

if (!personEmail.includes('@')) {
    personEmail = (`not valid email <b>${personEmail}</b> (symbol @ not exist)`);
} else if (personEmail.startsWith('@')) {
    personEmail = (`not valid email <b>${personEmail}</b> (symbol @ find in first place)`);
} else if (personEmail.endsWith('@')) {
    personEmail = (`not valid email <b>${personEmail}</b> (symbol @ find in last place)`);
};

document.write(`
    <ul>
        <li>Full name: ${firstName} ${secondName}</li>
        <li>Email: ${personEmail}</li>
        <li>Age: ${age}</li>
    </ul>
`);