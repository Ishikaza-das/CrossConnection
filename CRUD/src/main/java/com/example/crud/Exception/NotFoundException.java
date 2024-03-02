package com.example.crud.Exception;

public class NotFoundException extends RuntimeException{
    public NotFoundException(String id){
        super("Could not found the user with id " + id);
    }
}
