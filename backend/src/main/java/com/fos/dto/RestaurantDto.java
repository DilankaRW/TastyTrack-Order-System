package com.fos.dto;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.List;

@Data
public class RestaurantDto {
    private String title;
    @Column(length = 100)
    private List<String> images;

    private String description;
    private Long id;
}
