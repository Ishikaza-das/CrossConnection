package com.example.crud.Service.Impl;

import com.example.crud.Exception.NotFoundException;
import com.example.crud.Model.Product;
import com.example.crud.Repository.ProductRepository;
import com.example.crud.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Product not found with id: " + id));
    }

    @Override
    public Product updateProduct(Product newProduct, Long id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            existingProduct.setProductName(newProduct.getProductName());
            existingProduct.setProductDescription(newProduct.getProductDescription());
            existingProduct.setPricing(newProduct.getPricing());
            existingProduct.setSpecification(newProduct.getSpecification());
            existingProduct.setAvailability(newProduct.getAvailability());
            return productRepository.save(existingProduct);
        } else {
            throw new NotFoundException("Product not found with id: " + id);
        }
    }

    @Override
    public String deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new NotFoundException("Product with ID " + id + " not found.");
        }
        productRepository.deleteById(id);
        return "Product with ID " + id + " has been deleted successfully.";
    }


}
