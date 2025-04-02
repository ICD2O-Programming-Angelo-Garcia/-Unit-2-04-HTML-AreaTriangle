// Copyright (c) 2022 Angelo Garcia All rights reserved
//
// Created by: Angelo Garcia
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // Get values from input fields
  let base = parseFloat(document.getElementById('base-of-triangle').value);
  let height = parseFloat(document.getElementById('height-of-triangle').value);

  // Check if the input values are valid numbers
  if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
    alert("Please enter valid positive numbers for both base and height.");
    return;
  }

  // Process (Calculate area and perimeter)
  let area = base * height/2;
  //let perimeter = 2 * (length + width);

  // Output the results
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²';
  //document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter.toFixed(2) + ' cm';
}
