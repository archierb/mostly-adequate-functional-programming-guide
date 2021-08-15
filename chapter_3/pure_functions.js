const xs = [1, 2, 3, 4, 5];

// pure
xs.slice(0, 3); // [1, 2, 3]
xs.slice(0, 3); // [1, 2, 3]
xs.slice(0, 3); // [1, 2, 3]

// impure
xs.splice(0, 3); // [1, 2, 3]
xs.splice(0, 3); // [4, 5]
xs.splice(0, 3); // []

// impure
let minimun = 21;
const checkAge = age => age >= minimun;

// pure
const checkAge = (age) => {
    const minimun = 21;
    return age >= minimun;
};

// pure(immutable State0
const checkAge = (age) => {
    const minimun = Object.freeze({ minimun: 21});
    return age >= minimun;
};

const toLowerCase = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
};

toLowerCase['C']; // 'c'

const isPrime = {
    1: false,
    2: true,
    3: true,
    4: false,
    5: true,
    6: false,
};
isPrime[3]; // true

const memoize = (f) => {
  const cache = {};

  return (...args) => {
    const argStr = JSON.stringify(args);
    cache[argStr] = cache[argStr] || f(...args);
    return cache[argStr];
  };
};

const squareNumber = memoize(x => x * x);

squareNumber(4); // 16
squareNumber(4); // 16, returns cache for input 4
squareNumber(5); // 25
squareNumber(5); // 25, returns cache for input 5

const pureHttpCall = memoize((url, params) => () => $.getJSON(url, params));

// impure
const signUp = (attrs) => {
    const user = saveUser(attrs);
    welcomeUser(user);
};

// pure
const signUp = (Db, Email, attrs) => () => {
    const user = saveUser(Db, attrs);
    welcomeUser(Email, user)
}

const { Map } = require('immutable');

// Aliases: p = player, a = attacker, t = target
const jobe = Map({ name: 'Jobe', hp: 20, team: 'red' });
const michael = Map({ name: 'Michael', hp: 20, team: 'green' });
const decrementHP = p => p.set('hp', p.get('hp') - 1);
const isSameTeam = (p1, p2) => p1.get('team') === p2.get('team');
const punch = (a, t) => (isSameTeam(a, t) ? t : decrementHP(t));

punch(jobe, michael); // Map({name:'Michael', hp:19, team: 'green'})

const punch = (a, t) => (a.get('team') === t.get('team') ? t : decrementHP(t));

const punch = (a, t) => ('red' === 'green' ? t : decrementHP(t));

const punch = (a, t) => decrementHP(t);

const punch = (a, t) => t.set('hp', t.get('hp') - 1);

