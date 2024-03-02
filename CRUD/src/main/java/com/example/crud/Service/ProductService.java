package com.example.crud.Service;


import com.example.crud.Model.Product;
import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);
    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product updateProduct(Product newProduct, Long id);

    String deleteProduct(Long id);
}
