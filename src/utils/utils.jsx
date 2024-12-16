export const capitalize = (sentence) => {
    return sentence
    .toLowerCase()
    .split(/(\s+|[-_/.])/g) // Split by spaces, hyphens, underscores, slashes, or periods
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first character
    .join('') // Rejoin the string
}
