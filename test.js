// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.58 yens", () => {
    const { fromDollarToYen } = require('./app.js')

    expect(fromDollarToYen(5)).toBeCloseTo(532.9166666); //1 Dólar estadounidense (USD) equivale a 106.5833 Yenes japoneses (JPY) aproximadamente.
});

test("One yen should be 0.00625 pounds", () => {
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(1000)).toBeCloseTo(6.25488663); //1 Yen japonés (JPY) equivale a 0.00625 Libras esterlinas (GBP)
});