const calculateArea = (length, width) => {
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
        throw new Error('Length and width must be positive numbers');
    }

    return length * width;
};

// Example usage
try {
    const length = 10;
    const width = 5;
    const area = calculateArea(length, width);
    console.log('Area of the rectangle:', area);
} catch (error) {
    console.error('Error:', error.message);
}
