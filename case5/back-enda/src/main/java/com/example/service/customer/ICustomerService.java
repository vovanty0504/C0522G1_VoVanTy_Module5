package com.example.service.customer;


import com.example.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


public interface ICustomerService {

    Page<Customer> searchCustomer(String nameSearch, Pageable pageable);

   void save(Customer customer);

   Optional<Customer> findById(Integer id);

   void deleteLogical(Integer id);

   void update(Customer customer);

    List<Customer> findAll();




}
