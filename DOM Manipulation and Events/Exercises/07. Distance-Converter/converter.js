function attachEventsListeners() {
    
    const button = document.getElementById("convert");
    button.addEventListener("click", convert);

    const convertionRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convert() {
        const convertFromList = document.getElementById("inputUnits");
        const convertFromValue = convertFromList.options[convertFromList.selectedIndex].value;
        
        const convertToList = document.getElementById("outputUnits");
        const convertToValue = convertToList.options[convertToList.selectedIndex].value;

        const input = Number(document.getElementById("inputDistance").value);

        if (isNaN(input)) {
            return;
        }
        
        const output = document.getElementById("outputDistance");
        const convertedMeters = convertionRates[convertFromValue] * input;
        const convertToTarget =  convertedMeters / convertionRates[convertToValue];
        output.value = convertToTarget;
    }
}