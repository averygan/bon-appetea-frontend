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
 * Calculates the highest discount offered by each vendor
 * @param {array} dishes array of dishes (for each vendor)
 * @returns {float} highest discount (in decimal)
 */
export const calcMaxDiscount = (dishes) => {
    const max = 0;
    for (let eachDish of dishes) {
        if (eachDish.discount > max) {
            max = eachDish.discount
        }
    }
    return max
}