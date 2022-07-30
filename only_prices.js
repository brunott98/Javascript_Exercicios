const purchase = ['{"name":"Pen","price":3.45}',
'{"name":"Book","price":13.90}',
'{"name":"Kit","price":41.22}',
'{"name":"Papers","price":13.90}']

//Return a array with only the prices

const newpurchase = purchase.map( i => JSON.parse(i))
console.log(newpurchase)

const values_1 =  newpurchase.map( i => Object.entries(i).map(x => x[1]))
console.log(values_1)

const values_2 = values_1.map(z => z[1])
console.log(values_2) 

