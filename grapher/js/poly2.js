function readExpression(expression){
    // let pattern = new RegExp('[+-]?[^-+]+');
    let arr = [];
    // expression = expression.match(/[+-]?\d*(x|y)(\^\d)*((y|x)(\^\d)*)*|[+-\s]\d+/g);
    expression = expression.match(/[+-]?(\d\/)?\d*x(\^\d)*(x(\^\d)*)*|[+-\s]\d+/g);

    expression.forEach(function (match) {
        let variable = match.match(/(x\^\d|x)/gi) ? match.match(/(x\^\d|x)/gi).join("") : " ";
        // let coeff = parseFloat(match.split(variable)[0]);
        let coeff = match.split(variable)[0];

        console.log("coeff " + coeff);
        let power = 1;
        let variables = [];
        if (variable != " ") {
            // let tempVars = variable.match(/([a-z]\^\d|[a-z])/gi);
            let tempVars = variable.match(/(x\^\d|x)/gi);

            for (let i = 0; i < tempVars.length; i++) {
                let oneVariable = { variable: "", power: 0 };
                //next line
                power = 0;
                oneVariable.variable = tempVars[i].match(/x/gi)[0];
                let tempV = tempVars[i].split("^");
                if (tempV.length > 1) {
                    // oneVariable.power = parseFloat(tempV[1]);
                    power = parseFloat(tempV[1]);
                }
                else {
                    // oneVariable.power = 1;
                    power = 1;
                }
                // variables.push(oneVariable);
                // variables.push(power);

            }
        }
        else {
            // variables.push({ variable: "", power: 0 });
            power = 0;
        }
        // arr.push({
        //     coeff: coeff,
        //     // variables: variables
        //     variables: power
        // });
        arr.push(coeff);
        arr.push(power);
           
    });
    console.log(arr);
    return arr;


}