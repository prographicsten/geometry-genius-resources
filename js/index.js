// can you try onclick functionality
// Triangle function
function calculateTriangleArea() {
    // console.log('calculateTriangleArea called');
    // get triangle base value
    const baseField = document.getElementById('triangle_base');
    const baseValueTextString = baseField.value;
    const base = parseFloat(baseValueTextString);
    // console.log(typeof base);

    // get triangle height value
    const heightField = document.getElementById('triangle_height');
    const heightValueTextString = heightField.value;
    const height = parseFloat(heightValueTextString);
    // console.log(typeof height);

    // area calculation
    const area = 0.5 * base * height;
    // console.log(area);

    // show triangle area calculation results
    const areaSpan = document.getElementById('triangle_area');
    areaSpan.innerText = area;
}

// Rectangle function
function calculateRectangleArea() {
    // get rectangle width value
    const widthField = document.getElementById('rectangle_width');
    const widthValueTextString = widthField.value;
    const width = parseFloat(widthValueTextString);
    // console.log(width);

    // get rectangle lenght value
    const lenghtField = document.getElementById('rectangle_lenght');
    const lenghtValueTextString = lenghtField.value;
    const lenght = parseFloat(lenghtValueTextString);
    // console.log(lenght);

    // area
    const area = width * lenght;

    // show rectangle area calculation results
    const rectangleArea = document.getElementById('rectangle_area');
    rectangleArea.innerText = area;
}

// Parallelogram function
function calculateParallelogramArea() {
    // get parallelogram width value
    const baseField = document.getElementById('parallelogram_width');
    const baseValueTextString = baseField.value;
    const base = parseFloat(baseValueTextString);
    
    // get parallelogram height value
    const heightField = document.getElementById('parallelogram_height');
    const heightValueTextString = heightField.value;
    const height = parseFloat(heightValueTextString);

    // area
    const area = base * height;

    // show parallelogram area calculation results
    const parallelogramArea = document.getElementById('parallelogram_area');
    parallelogramArea.innerText = area;
}

// =================================================================

// step 1
document.getElementById('triangle_btn').addEventListener('click', function () {
    // console.log('button clicked');
    // step 2
    const firstInputField = inputTextValueById('triangle_base');
    // console.log(firstInputField);
    // step 3
    const secondInputField = inputTextValueById('triangle_height');
    // console.log(secondInputField);
    // step 4
    const area = 0.5 * firstInputField * secondInputField;
    // console.log(area);
    // step 5
    setValueById('triangle_area', area);
    // console.log(area);
});

document.getElementById('rectangle_btn').addEventListener('click', function () {
    const firstInputField = inputTextValueById('rectangle_width');
    const secondInputField = inputTextValueById('rectangle_lenght');
    const area = firstInputField * secondInputField;
    setValueById('rectangle_area', area);
});

document.getElementById('parallelogram_btn').addEventListener('click', function () {
    const firstInputField = inputTextValueById('parallelogram_width');
    const secondInputField = inputTextValueById('parallelogram_height');
    const area = firstInputField * secondInputField;
    setValueById('parallelogram_area', area);
});