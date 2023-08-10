$(document).ready(function(){
    let productItems = [{
        id: 1,
        productName: '5 star',
        productDescription: 'This smooth milk chocolate bar is packed with crunchy biscuit bits and a chewy caramel centre',
        imageLink: '5star'
    },
    {
        id: 2,
        productName: 'Candyman',
        productDescription: 'The Candyman Eclairs includes an outer shell of butterscotch and is filled with a mixture of vanilla',
        imageLink: 'candyman'
    },
    {
        id: 3,
        productName: 'Kaccha',
        productDescription: 'Candy with the perfect taste of raw-mango, giving you a nostalgic feel about the olden days.',
        imageLink: 'kacha'
    },
    {
        id: 4,
        productName: 'Little Hearts',
        productDescription: 'Little Hearts. Crunchy, sugar-glazed and oh-so-tempting, this heart-shaped biscuit is the perfect snack.',
        imageLink: 'little-hearts'
    },
    {
        id: 5,
        productName: 'Mango Bite',
        productDescription: 'Made with the goodness of real, juicy mangoes, Mango Bite has been brightening days since 1989',
        imageLink: 'mango-bite'
    },
    {
        id: 6,
        productName: 'Melody',
        productDescription: 'Melody comes with an irresistible layer of caramel on the outside and a delightful chocolate filling within',
        imageLink: 'melody'
    },
    {
        id: 7,
        productName: 'Parles',
        productDescription: 'Crafted with handpicked potatoes, Parles wafers are delightfully crunchy and light.',
        imageLink: 'parles'
    },
    {
        id: 8,
        productName: 'PuffCorn',
        productDescription: 'Kurkure puffcorn is a tasty, light & fluffy snack with an irresistibly yummy cheese flavour, sparking fun',
        imageLink: 'puffcorn'
    }
]

for(let i=0;i<=productItems.length;i++){
    let productId = productItems[i].id;
    let productName = productItems[i].productName;
    let productDescripton = productItems[i].productDescription;
    let imageLink = productItems[i].imageLink;
    $('#product-items-container').append(`<div class="item-container">
    <div class="thumbnail-wrapper">
        <img class="thumbnail" src="img/${imageLink}.jpg" alt="Image of ${productName}">
    </div>
    <h2 class="item-name">${productName}</h2>
    <p class="item-description">${productDescripton}</p>
    <button class="add-cart-button">Add to cart</button>
</div>`)
}
});