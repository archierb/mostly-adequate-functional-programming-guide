const hi = name => `Hi ${name}`;
const greeting = name => hi(name);

hi; // name => `Hi ${name}`
hi("jonas"); // "Hi jonas"

const greeting = hi
greeting("times"); // "Hi times"

// ignorant
const getServerStuf = callback => ajaxCall(json => callback(json));

// enlightened
const getServerStuf = ajaxCall;


// this line
ajaxCall(json => callback(json));

// is the same as this line
ajaxCall(callback);

// so refactor getServerStuf
const getServerStuf = callback => ajaxCall(callback);

// ..which is equivalent to this
const getServerStuf = ajaxCall;

const BlogController = {
    index(posts) { return Views.index(posts); },
    show(post) { return Views.show(post); },
    create(attrs) { return Db.create(attrs); },
    update(post, attrs) { return Db.update(post, attrs); },
    destroy(post) { return Db.destroy(post); },
};

const BlogController = {
    index: Views.index,
    show: Views.show,
    create: Db.create,
    update: Db.update,
    destroy: Db.destroy,
};

const validArticles = articles =>
    articles.filter(article => article !== null && article !== undefined);

const compact = xs => xs.filter(x => x !== null && x !== undefined);

const fs = require('fs');

// scarry
fs.readFile('freaky_friday.txt', Db.save);

// leess so
fs.readFile('freaky_friday.txt', Db.save.bind(Db));

