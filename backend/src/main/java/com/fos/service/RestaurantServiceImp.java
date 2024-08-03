package com.fos.service;

import com.fos.dto.RestaurantDto;
import com.fos.model.Restaurant;
import com.fos.model.User;
import com.fos.repository.RestaurantRepository;
import com.fos.request.CreateRestaurantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RestaurantServiceImp implements RestaurantService{
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Override
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {
        return null;
    }

    @Override
    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) throws Exception {
        return null;
    }

    @Override
    public void deleteRestaurant(Long restaurantId) throws Exception {

    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        return null;
    }

    @Override
    public List<Restaurant> searchRestaurant() {
        return null;
    }

    @Override
    public Restaurant findRestaurantById(Long id) throws Exception {
        return null;
    }

    @Override
    public Restaurant getRestaurantByUserId(Long userId) throws Exception {
        return null;
    }

    @Override
    public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception {
        return null;
    }

    @Override
    public Restaurant updateRestaurantStatus(Long id) throws Exception {
        return null;
    }
}
