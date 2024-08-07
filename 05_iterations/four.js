const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "java", "cpp", "ruby"]

for (const key in programming) {
    // console.log(programming[key])
}

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FRA", "France")

for (const key in map) {
    console.log(key)      // Since map is not iterable. Because of that no output is coming.
}