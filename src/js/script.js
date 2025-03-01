let robots = [
    { name: 'Adelyn Houston', id: 1 },
    { name: 'Sylas Walker', id: 2 },
    { name: 'Hazel Shelton', id: 3 },
    { name: 'Leonel Freeman', id: 4 },
    { name: 'Norah Bishop', id: 5 },
    { name: 'Paxton Howard', id: 6 },
    { name: 'Sophie Zimmerman', id: 7 },
    { name: 'Sergio Howe', id: 8 },
];

let isChecked = [];

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

for (let i = 1; i <= robots.length; ++i) {
    isChecked.push(false);
}

robots = shuffle(robots);

export { robots, shuffle, isChecked };
