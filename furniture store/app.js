const productsContainer = document.querySelector(".products")


class Products{
    getproducts = async()=>{
        const product_list = []
        const data = await fetch('./products.json');
        const result =  await data.json()
        result.items.forEach(product => {
        const {title,price} = product.fields;
        const img = product.fields.image.fields.file.url
        const id = product.sys.id
        product_list.push({title,price,img,id})
    })
    return product_list
    }
}

prod_obj = new Products;
prod_obj.getproducts().then(products=>{
    // setTimeout(() => {
        console.log(products);
           products.forEach((product) => {
            //    var s = document.createElement("div")
            //    s.classList.add("product")
               productsContainer.innerHTML += `
               <div class="product">
                           <div class="box">
                               <img src=${product.img} alt="">
                               <h3>${product.title}</h3><h3>$${product.price}</h3>
                               <div class="add-cart">
                               <span><i class="fa fa-cart-plus " aria-hidden="true"></i></span>
                               <span>ADD TO BAG</span>
                               </div>
                       </div>
                       </div>`
                    //    productsContainer.appendChild(s)
                   })
        // },0);
 
})
