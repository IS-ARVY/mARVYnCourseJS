class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML= `
            <div class="card text-white bg-dark mb-1 me auto">
                <div class="card-body mb-2 me auto">
                    <strong class="me-auto">Product:</strong>  ${product.name}<br><br>
                    <strong>Price: </strong>${product.price} <br> <br>
                    <strong>Product Year</strong>: ${product.year} <br>
                    
                    <div class="div">
                    <br>
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                    </div>
                    
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }
    
    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            const ui = new UI();
            ui.showMessage('Product deleted', 'danger');

        }
        
    }

    showMessage(message, cssClass){
       const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        const container =  document.querySelector('.container');     
        const app =  document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
         
    }
}

//Evetnos de la pagina

document.getElementById('product-form').addEventListener('submit', function (e){
   const name =  document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year =  document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();


    if (name === ''|| price === '' || year === '') {
        return ui.showMessage('Please Complete the fields', 'warning');    
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Product added Successfully', 'info');

   e.preventDefault();
})

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
});