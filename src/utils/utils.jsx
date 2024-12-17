/**
 * Capitalises each word after a
 * - Space,
 * - Hyphen,
 * - Underscore,
 * - Slash, or
 * - Period
 * @param {string} sentence Non-capitalised string  
 * @returns {string} Capitalised string
 */
export const capitalize = (sentence) => {
    return sentence
    .toLowerCase()
    .split(/(\s+|[-_/.])/g) // Split by spaces, hyphens, underscores, slashes, or periods
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first character
    .join('') // Rejoin the string
}


/**
 * Calculates the highest discount offered
 * @param {array} dishes array of dishes (for each vendor)
 * @param {int} vendorID ID of each vendor - nullable field
 * @returns {float} highest discount (in decimal)
 */
export const calcMaxDiscount = (dishes, vendorID) => {
    let filteredDishes = 
        vendorID !== undefined ? 
        getVendorDishes(dishes, vendorID) :
        dishes;
    
    let max = 0;
    for (let eachDish of filteredDishes) {
        if (eachDish.discount > max) {
            max = eachDish.discount
        }
    }
    return max
}

/**
 * Retrieves all dishes of a particular vendor
 * @param {array} dishes array of dishes for all vendor
 * @param {int} vendorID ID of each vendor
 * @returns {array} All dishes of the particular vendor
 */
export const getVendorDishes = (dishes, vendorID) => {
    let eachVendorDishes = []
    for (let eachDish of dishes) {
        if (eachDish.vendorID == vendorID) {
            eachVendorDishes.push(eachDish)
        }
    }
    return eachVendorDishes
}
  
