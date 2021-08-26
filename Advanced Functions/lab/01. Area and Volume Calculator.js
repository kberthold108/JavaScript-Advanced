function solveWithBind(area, vol, input) {
    const figures = JSON.parse(input);
    const result = [];

    for (const figure of figures) {
        const calculateAreaFunc = area.bind(figure);
        const figureArea = calculateAreaFunc();

        const calculateVolumeFunc = vol.bind(figure);
        const figureVolume = calculateVolumeFunc();

        const calculated = { area: figureArea, volume: figureVolume };
        result.push(calculated);
    }

    return result;
}

function solveWithCall(area, vol, input) {
    const figures = JSON.parse(input);
    const result = [];

    for (const figure of figures) {
        const figureArea = area.call(figure);
        const figureVolume = vol.call(figure);
        const calculated = { area: figureArea, volume: figureVolume };
        result.push(calculated);
    }

    console.log(result);
}

function solveWithApply(area, vol, input) {
    const figures = JSON.parse(input);
    const result = [];

    for (const figure of figures) {
        const figureArea = area.apply(figure);
        const figureVolume = vol.apply(figure);
        const calculated = { area: figureArea, volume: figureVolume };
        result.push(calculated);
    }

    return result;
}

function solveFunctional(area, vol, input) {
     return (JSON.parse(input)
     .map(figure => ({ area: area.call(figure), volume: vol.call(figure) })));
}


function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

solveFunctional(area, vol, '[{ "x": "1", "y": "2", "z": "10" }, { "x": "7", "y": "7", "z": "10" }, { "x": "5", "y": "2", "z": "10" }]');