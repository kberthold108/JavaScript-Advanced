function solution(input) {

    const engine = commandEngine();
    input.forEach(command => {
        const [cmd, value] = command.split(" ");
        engine[cmd](value);
    });

    function commandEngine() {
        const state = [];

        function removeValue(value) {
            let index = state.indexOf(value);
            if (index === -1) {
                return;
            } 

            while (index !== -1) {
                state.splice(index, 1);
                index = state.indexOf(value);
            }
        }

        function addValue(value) {
            if (!value) {
                return;
            }
            state.push(value);
        }

        return {
            add: addValue,
            remove: removeValue,
            print: () => console.log(state.join(","))
        };
    }
}


solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);