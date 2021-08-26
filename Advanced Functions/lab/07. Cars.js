function solution(input) {
    const cars = {};

    function createCar(name, _, inherited) {
        cars[name] = _ ? Object.create(cars[inherited]) : {};
    }
    const commands =  {
        create: createCar,
        set: (name, key, value) => cars[name][key] = value,
        print: (name) => {
            const entry = [];
            Object.keys(cars[name]).forEach(key => entry.push(`${key}:${cars[name][key]}`));
            console.log(entry.join(","));
        }
    };

    input.forEach(line => {
        const tokens = line.split(" ");
        const args = tokens.slice(1);
        commands[tokens[0]](...args);
    });

    // function carCreator() {
    //     const cars = {};

    //     function createCar(name, _, inherited) {
    //         cars[name] = _ ? Object.create(cars[inherited]) : {};
    //     }
    //     return {
    //         create: createCar,
    //         set: (name, key, value) => cars[name][key] = value,
    //         print: (name) => {
    //             const entry = [];
    //             Object.keys(cars[name]).forEach(key => entry.push(`${key}:${cars[name][key]}`));
    //             console.log(entry.join(","));
    //         }
    //     };
    // }
}

solution(["create c1",
"create c2 inherit c1",
"set c1 color red",
"set c2 model new",
"print c1",
"print c2"]
);