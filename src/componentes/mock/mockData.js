const productos = [
    {id:'1', item: 'chocolate negro ', description: ' ', category:'chocolate', price: 150, stock: 10, image: ''},
    {id:'2', item: 'Chocolate blanco ', description: ' ', category:'chocolate', price: 180, stock: 10, image: ''},
    {id:'3', item: 'Huevo de pascua ', description: ' ', category:'confiteria', price: 550, stock: 10, image: ''},
    {id:'4', item: 'Torta de chocolate ', description: ' ', category:'panaderia', price: 1120, stock: 10, image: ''},
    {id:'5', item: 'Caja de chocolates', description: ' ', category:'confiteria', price: 2000, stock: 10, image: ''}
  ]

  export const data = new Promise ((resolve, reject)=>{
    let condition = true;


    setTimeout(()=>{
        if (condition){
            resolve(productos)
        }else{
            reject('Algo malio sal')
        }

    }, 3000)

  })