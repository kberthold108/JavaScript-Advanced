function attachEventsListeners() {
    
    const button = document.getElementById("convert");
    button.addEventListener("click", convertTo);

    const converter = {
        km: num => ({ km: num, m: num * 1000, cm: num * 100000, mm: num * 1000000, mi: num / 1.609, yrd: num * 1094, ft: num * 3281, in: num * 39370 }),
        m: num => ({ km: num / 1000, m: num, cm: num * 100, mm: num * 1000, mi: num / 1609, yrd: num * 1.094, ft: num * 3.281, in: num * 39.37 }),
        cm: num => ({ km: num * 100000, m: num * 100, cm: num, mm: num * 10, mi: num / 160934, yrd: num / 91.44, ft: num / 30.48, in: num / 2.54 }),
        mm: num => ({ km: num / 1000000, m: num / 1000, cm: num / 10, mm: num, mi: num / 1609344, yrd: num / 914, ft: num / 305, in: num / 25.4 }),
        mi: num => ({ km: num * 1.609, m: num * 1609, cm: num * 160934, mm: num * 1609344, mi: num, yrd: num * 1760, ft: num * 5280, in: num * 63360 }),
        yrd: num => ({ km: num / 1094, m: num / 1.094, cm: num * 91.44, mm: num * 914, mi: num / 1760, yrd: num, ft: num * 3, in: num * 36 }),
        ft: num => ({ km: num / 3281, m: num / 3.281, cm: num * 30.48, mm: num * 305, mi: num / 5280, yrd: num / 3, ft: num, in: num * 12 }),
        in: num => ({ km: num / 39370, m: num / 39.37, cm: num * 2.54, mm: num * 25.4, mi: num / 63360, yrd: num / 36, ft: num / 12, in: num })
    };

    function convertTo() {
        const convertFromList = document.getElementById("inputUnits");
        const convertFromValue = convertFromList.options[convertFromList.selectedIndex].value;
        const convertToList = document.getElementById("outputUnits");
        const convertToValue = convertToList.options[convertToList.selectedIndex].value;

        const input = Number(document.getElementById("inputDistance").value);

        if (isNaN(input)) {
            return;
        }
        
        const output = document.getElementById("outputDistance");
        const converted = converter[convertFromValue](input);

        output.value = converted[convertToValue];
        
    }
}