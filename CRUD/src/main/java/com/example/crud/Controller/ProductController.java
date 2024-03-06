package com.example.crud.Controller;


import com.example.crud.Model.Product;
import com.example.crud.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/product")
    public ResponseEntity<Product> newProduct(@RequestBody Product newProduct) {
        Product savedProduct = productService.saveProduct(newProduct);
        return ResponseEntity.ok(savedProduct);
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        Product updatedProduct = productService.updateProduct(newProduct, id);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        String message = productService.deleteProduct(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
