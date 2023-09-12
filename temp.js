
        const units = document.querySelectorAll('.unit');
        
        function convertTemperature() {
            const temperatureInput = parseFloat(document.getElementById("temperature").value);
            let unit;
            units.forEach((u) => {
                if (u.classList.contains('active')) {
                    unit = u.id;
                }    
            });
            
            let result;
            
            switch (unit) {
                case "celsius":
                    result = {
                        celsius: temperatureInput,
                        kelvin: temperatureInput + 273.15,
                        fahrenheit: (temperatureInput * 9/5) + 32
                    };
                    break;
                case "kelvin":
                    result = {
                        celsius: temperatureInput - 273.15,
                        kelvin: temperatureInput,
                        fahrenheit: (temperatureInput - 273.15) * 9/5 + 32
                    };
                    break;
                case "fahrenheit":
                    result = {
                        celsius: (temperatureInput - 32) * 5/9,
                        kelvin: (temperatureInput - 32) * 5/9 + 273.15,
                        fahrenheit: temperatureInput
                    };
                    break;
                default:
                    result = "Invalid unit";
                    break;
            }
            
            document.getElementById("result").innerHTML = `
                <p>Celsius (°C): ${result.celsius.toFixed(2)}</p>
                <p>Kelvin (K): ${result.kelvin.toFixed(2)}</p>
                <p>Fahrenheit (°F): ${result.fahrenheit.toFixed(2)}</p>
            `;
        }

        // Handle unit selection
        units.forEach((unit) => {
            unit.addEventListener('click', () => {
                units.forEach((u) => {
                    u.classList.remove('active');
                });
                unit.classList.add('active');
            });
        });
    