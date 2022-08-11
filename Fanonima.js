const areaRet = (f,l1,l2) => f(l1,l2)

const res1 = areaRet((l1,l2) => l1 * l2, 4, 2)

console.log(`A área do retângulo mede ${res1} m²`)

/* Mesmo Exemplo, porém utilizando:

* Notação arrow (=>)
* Função como retorno (reuso da função areaRet)
* Função como argumento (f(l1,l2))
* Função anônima, pois, é definida apenas no momento de sua aplicação/uso, sem precisar atribuir qualquer nomenclatura aos seus parâmetros.
*/
