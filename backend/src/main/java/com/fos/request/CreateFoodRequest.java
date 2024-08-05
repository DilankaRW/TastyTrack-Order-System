package com.fos.request;

import com.fos.model.Category;
import com.fos.model.IngredientCategory;
import com.fos.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;

    private Category category;
    private List<String> images;

    private Long restaurantId;
    private boolean vagetarian;
    private boolean seasional;
    private List<IngredientsItem> ingredients;
}
