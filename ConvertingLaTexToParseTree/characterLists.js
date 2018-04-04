var openBrackets = ['(', '{', '['];

var closeBrackets = [')', '}', ']'];

var multSymbols = ['\\cdot', '\\times', '*', '\\star', '×'];

var divSymbols = ['\\div', '÷', '/'];

var allOperators = multSymbols.concat(divSymbols.concat(['+', '-', '^']));

var functionList = ['\\sin', 'sine', '\\cos', 'cosine', '\\tan', 'tangent', '\\sec', 'secant', '\\cosec', 'cosecant', '\\cotan', 'cotangent'];


var unitList = {
    metres: ['m, meter, meters, metre, metres'],
    kilometres: ['km, kilometers, kilometer, kilometres, kilometres'],
    centimetres: ['cm', 'centimetre', 'centimetres', 'centimeter', 'centimeters'],
    micrometres: ['\\mu m', '\\mu\{m\}', 'micrometre', 'micrometres', 'mirometer', 'micrometers']    
};

var lettersRegex = /^[A-Za-z]+$/;