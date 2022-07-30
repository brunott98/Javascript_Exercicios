
Array.prototype.map2 = function(callback){
   const newArray = []
   for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i],i,this))
   }
   return newArray
}


const purchase = ['{"name":"Pen","price":3.45}',
'{"name":"Book","price":13.90}',
'{"name":"Kit","price":41.22}',
'{"name":"Papers","price":13.90}']

//Return a array with only the prices

/*
const newpurchase = purchase.map( i => JSON.parse(i))
console.log(newpurchase)

const values_1 =  newpurchase.map( j => Object.entries(j)).map(x => x[1])
console.log(values_1)

const getValues = values_1.map(z => z[1])
console.log(getValues) 


 */


const purchaseObject = purchase.map( i => JSON.parse(i))
console.log(purchaseObject)

const prices = purchaseObject.map2(product => {return product.price}) 
console.log(prices)


