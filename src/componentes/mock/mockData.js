const productos = [
    {id:'1', item: 'chocolate negro ', description: ' ', category:'chocolate', price: 150, stock: 10, image: 'https://i.postimg.cc/dtgFhhsx/chocolate-Negro.jpg'},
    {id:'2', item: 'Chocolate blanco ', description: ' ', category:'chocolate', price: 180, stock: 10, image: 'https://i.postimg.cc/BnD0HJtQ/chocolate-Blanco.jpg'},
    {id:'3', item: 'Huevo de pascua ', description: ' ', category:'confiteria', price: 550, stock: 10, image: 'https://i.postimg.cc/TYKG2V6b/huevo-De-Pascua.jpg'},
    {id:'4', item: 'Torta de chocolate ', description: ' ', category:'panaderia', price: 1120, stock: 10, image: 'https://i.postimg.cc/NGJBwNWY/torta-De-Chocolate.jpg'},
    {id:'5', item: 'Caja de chocolates', description: ' ', category:'confiteria', price: 2000, stock: 10, image: 'https://i.postimg.cc/MHFSbTyX/caja-De-Chocolates.jpg'}
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