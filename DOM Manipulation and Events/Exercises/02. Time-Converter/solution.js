function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll("input[type='button']"));
    const inputAll = Array.from(document.querySelectorAll("[type='text']"));
    
    buttons.forEach(button => button.addEventListener("click", convertNumber));

    const convert = {
        days: time => ({days: time, hours: time * 24, minutes: time * 1440, seconds: time * 86400}),
        hours: time => ({days: time / 24, hours: time, minutes: time * 60, seconds: time * 3600}),
        minutes: time => ({days: time / 1440, hours: time / 60, minutes: time, seconds: time * 60}),
        seconds: time =>  ({days: time / 86400, hours: time / 3600, minutes: time / 60, seconds: time})
    };

    function convertNumber(event) {
        const div = event.target.parentNode;
        const input = div.querySelector("[type='text']");
        const converted = convert[input.id](input.value);
        
        inputAll.forEach(val => {
            val.value = converted[val.id];
        });
    }
}