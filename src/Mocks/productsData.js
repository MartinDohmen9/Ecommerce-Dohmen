const products = [
    { 
        "producto": "Bañada Chocolate", 
        "precio": 150,
        "stock" : 15, 
        "iva": 21,
        "img": `${process.env.PUBLIC_URL}/assets/images/productos/BañadaChoco.jpeg`,
        "id": 0,
        "category": "Bañadas"
    },
    { 
        "producto": "Bañada Celeste", 
        "precio": 150,
        "stock" : 13,  
        "iva": 21,
        "url": "https://drive.google.com/file/d/1tpkod6xdxj_wA2JfzgbSJfT1-WG_gC7s/view?usp=sharing",
        "id": 1,
        "category": "Bañadas"
    },
    { 
        "producto": "Bañada Morada", 
        "precio": 150,
        "stock" : 8,  
        "iva": 21,
        "url": "https://drive.google.com/file/d/1tpkod6xdxj_wA2JfzgbSJfT1-WG_gC7s/view?usp=sharing",
        "id": 2,
        "category": "Bañadas"
    },
    { 
        "producto": "Bañada Rosada", 
        "precio": 150,
        "stock" : 12,  
        "iva": 21,
        "img":"Donas/BañadaRosa.jpeg",
        "id": 3,
        "category": "Bañadas"
    },
    { 
        "producto": "Chocolate", 
        "precio": 150,
        "stock" : 15,  
        "iva": 21,
        "url":`${process.env.PUBLIC_URL}/assets/images/productos/Chocolate.jpeg`,
        "id": 4,
        "category": "Comunes"
    },
    {
        "producto": "Glaseada Limón", 
        "precio": 130,
        "stock" : 20,  
        "iva": 21,
        "img":`${process.env.PUBLIC_URL}/assets/images/KitKat.jpeg` ,
        "id": 5,
        "category": "Comunes"
    },
    {
        "producto": "KitKat", 
        "precio": 160,
        "stock" : 5,  
        "iva": 21,
        "img":"Donas/KitKat.jpeg" ,
        "id": 6,
        "category": "Especiales"
    },
    {
        "producto": "KitKat", 
        "precio": 160,
        "stock" : 7,  
        "iva": 21,
        "img":"Donas/KitKat2.jpeg" ,
        "id": 7,
        "category": "Especiales"
    },
    {
        "producto": "Oreo", 
        "precio": 160,
        "stock" : 10,  
        "iva": 21,
        "img":"Donas/Oreo.jpeg" ,
        "id": 8,
        "category": "Especiales"
    },
    {
        "producto": "Rayas", 
        "precio": 130,
        "stock" : 14,  
        "iva": 21,
        "img":"Donas/Rayas.jpeg" ,
        "id": 9,
        "category": "Comunes"
    }
]

export const getData = new Promise ((resolve, reject) =>{

    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },2000)
  })

export const getProd = new Promise ((resolve, reject) =>{

let condition = true
setTimeout(()=>{
    if(condition){
    resolve(products)
    }else{
    reject('salio mal :(')
    }
},2000)
})