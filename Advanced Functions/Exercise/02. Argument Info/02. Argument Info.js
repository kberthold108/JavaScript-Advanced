function argumentInfo(...args) {
  
    const typesCount = {};

    const thing = [];

    args.forEach(x => {
        if (!typesCount[typeof x]) {
            typesCount[typeof x] = 0;
        }
        typesCount[typeof x] += 1;
        thing.push(`${typeof x}: ${x}`);
    });

    thing.forEach(x => console.log(x));

    Object.entries(typesCount).sort((a, b) => b[1] - a[1]).forEach(x => console.log(`${x[0]} = ${x[1]}`));
}

argumentInfo("cat", 42, function () { console.log("Hello world!"); });