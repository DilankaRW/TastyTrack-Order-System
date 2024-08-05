package com.fos.service;

import com.fos.model.Category;
import com.fos.model.Food;
import com.fos.model.Restaurant;

public interface FoodService {
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);
}
