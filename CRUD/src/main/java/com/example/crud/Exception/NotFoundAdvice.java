package com.example.crud.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class NotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> exceptionHandler(NotFoundException exception){
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("errorMessage",exception.getMessage());
        return errorMap;
    }

}
