
// DOM Elements
// Input - textarea inside div with "#inputs"
// Output - div "#outputs"
// Best restaurant - "#bestRestaurant"
// Workers - "#workers"

// onClick
// 1. Display the best restaurant of all the added restaurants with its average salary and best salary. 
// 2. If there is a restaurant in the input array which is added more than once you should update (add the new ones) the workers, average salary and best salary.
// 3. The best restaurant is the restaurant with the highest average salary. !!If two restaurants have the same average salary the best restaurant is the first one added.!!
// 4. Display all workers in the best restaurant with their salaries.
// 5. The best restaurant's workers should be ! sorted by their salaries by descending order !

// Process the input
// split by "-" to get the restaurant name and workers
// split workers by "," to get the workers as array
// split every worker by space to get name and salary

// Possible storage
// { <restourant-name>: { <worker-name>: {[name]: <worker-name>, [salary]: <worker-salary>} } }

function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);

    const inputTextArea = document.querySelector("#inputs textarea");
    const bestRestaurantParagraph = document.querySelector("#outputs #bestRestaurant p");
    const workersParagraph = document.querySelector("#outputs #workers p");

    const fixDecimal = (number, fractionDigit) => number.toFixed(fractionDigit);

    function onClick() {
        const restaurants = {};
        const currentAvgBest = { restaurant: "", average: 0 };

        const input = JSON.parse(inputTextArea.value);

        for (const line of input) {
            const tokens = line.split(" - ");
            const restaurantName = tokens[0];
            let workers = tokens[1];
            workers = workers.split(", ");

            if (!restaurants[restaurantName]) {
                restaurants[restaurantName] = {};
            }

            for (const worker of workers) {
                const [name, salary] = worker.split(" ");

                if (!restaurants[restaurantName].workers) {
                    restaurants[restaurantName].workers = {};
                }

                if (!restaurants[restaurantName]["workers"][name]) {
                    restaurants[restaurantName]["workers"][name] = {};
                }
                restaurants[restaurantName]["workers"][name] = { name, salary: Number(salary) };
            }

            const workersInRestaurant = Object.values(restaurants[restaurantName]["workers"]);
            const averageSalary = Number(workersInRestaurant.reduce((acc, cur) => acc + cur.salary, 0) / workersInRestaurant.length);

            if (averageSalary > currentAvgBest.average) {
                currentAvgBest.average = averageSalary;
                currentAvgBest.restaurant = restaurantName;
            }
        }

        const bestRestaurant = restaurants[currentAvgBest.restaurant];
        const bestSalaryWorker = Object.values(bestRestaurant.workers).sort((w1, w2) => w2.salary - w1.salary).shift();

        bestRestaurantParagraph.textContent = `Name: ${currentAvgBest.restaurant} Average Salary: ${fixDecimal(currentAvgBest.average, 2)} Best Salary: ${fixDecimal(bestSalaryWorker.salary, 2)}`;

        const workersOutput = Object.values(bestRestaurant.workers)
            .sort((w1, w2) => w2.salary - w1.salary)
            .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
            .join(" ");

        workersParagraph.textContent = workersOutput;
    }
}