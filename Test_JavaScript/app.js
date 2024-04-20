const yen = 0.54;
const pound =103.87;
const km = 1000;
const killogram = 1000;
const degree = 12;
const dollar = 83.47;
let convert = parseInt(prompt("Press 1 for Yen to INR \n Press 2 for Pound to euro\n Press 3 for Killogram to Gram\n Press 4 for Killometer to meter \n Press 5 for degree to farenhit\n Press 6 for Dollar to dinar"));

switch(convert){
    case 1:
        console.log("----Yen to INR-----");
        const INR = parseInt(prompt("Enter INR"));
        let result = yen/INR;
        console.log("the value of INR in yen is: ", result);
        break;
    case 2:
        console.log("----KM to meter-----");
        const euro = parseInt(prompt("Enter Euro"));
        let result1 = pound/euro;
        console.log("the value of Euro in pound is: ", result1);
        break;
        
    case 3:
        console.log("----Killogram to Gram-----");
        const gram = parseInt(prompt("Enter meter"));
        let result2 = killogram/gram;
        console.log("the value of  gram in Killogram is: ", result3);
        break;

    case 4:
            console.log("----Killometer to meter-----");
            const meter = parseInt(prompt("Enter meter"));
            let result3 = km/meter;
            console.log("the value of  gram in Killogram is: ", result3);
            break;
    
    case 5:
                console.log("----degree to Farenhit-----");
                farenhit = (degree * 9/5) + 32;
                console.log("the value of farenhit in degree is: ", farenhit);
                break;

    case 6:
        console.log("----Dollar to Dinar-----");
            const dinar = parseInt(prompt("Enter dinar"));
            let result4 = dollar/dinar;
            console.log("the value of dinar in dollar is: ", result4);
            break;
    
    
    
}