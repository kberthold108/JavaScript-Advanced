class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        if (!username.trim() || !salary || !position.trim() || !department.trim()) {
            throw Error("Invalid input!");
        }
        
        if (typeof (salary) !== "number" || salary < 0) {
            throw Error("Invalid input!");
        }
        if (!this.departments[department]) {
            this.departments[department] = {};
        }
        this.departments[department][username] = {name: username, salary: salary, position: position};
        return `New employee is hired. Name: ${username}. Position: ${position}`;

    }

    bestDepartment() {
        const bestDepartment = {name: "", avgSalary: 0}

        Object.keys(this.departments).forEach(dep => {
            const arr = [];
            let tempAvgSalary = 0;
           Object.values(this.departments[dep]).forEach(val => {
                arr.push(val);
                tempAvgSalary += val.salary;
           });
           tempAvgSalary = tempAvgSalary / arr.length;
           tempAvgSalary.toFixed(2);
           if (tempAvgSalary > bestDepartment.avgSalary) {
               bestDepartment.name = dep;
               bestDepartment.avgSalary = tempAvgSalary;
           }
        });
        const testArr = [];
        Object.values(this.departments[bestDepartment.name]).sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        })
        .forEach(dude => {
            const str = `${dude.name} ${dude.salary} ${dude.position}`;
            testArr.push(str);
        });
        return(`Best Department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.avgSalary.toFixed(2)}\n${testArr.join("\n")}`);
    }

}


let c = new Company();
c.addEmployee("Stanimir", "0", "wadawd", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
