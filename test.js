// importar las funciones del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Prueba para la función sum
test('adds 5 + 7 to equal 12', () => {
    let total = sum(5, 7);
    expect(total).toBe(12);
});

// Prueba para la función fromEuroToDollar
test("One euro should be 1.2 dollars", function(){
    expect(fromEuroToDollar(1)).toBe(1.2);
    expect(fromEuroToDollar(2)).toBe(2.4);
    expect(fromEuroToDollar(0)).toBe(0);
});

// Prueba para la función fromDollarToYen
test("One dollar should be around 106.58 yens", () => {
    expect(fromDollarToYen(1)).toBeCloseTo(106.58); 
    expect(fromDollarToYen(10)).toBeCloseTo(1065.833);
    expect(fromDollarToYen(0)).toBe(0);
});

// Prueba para la función fromYenToPound
test("One yen should be around 0.00625 pounds", () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.625); 
    expect(fromYenToPound(500)).toBeCloseTo(3.1274);
    expect(fromYenToPound(0)).toBe(0);
});