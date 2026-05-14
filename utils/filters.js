const products = [
  { id: 1, name: "אוזניות אלחוטיות", category: "שמע", price: 299, rating: 4.5, inStock: true },
  { id: 2, name: "עכבר גיימינג", category: "ציוד היקפי", price: 150, rating: 4.2, inStock: true },
  { id: 3, name: "מסך מחשב 27 אינץ'", category: "מסכים", price: 1200, rating: 4.8, inStock: false },
  { id: 4, name: "מקלדת מכנית", category: "ציוד היקפי", price: 450, rating: 4.6, inStock: true },
  { id: 5, name: "מטען מהיר לנייד", category: "אביזרים", price: 89, rating: 4.0, inStock: true },
  { id: 6, name: "רמקול בלונטות' נייד", category: "שמע", price: 350, rating: 4.3, inStock: false }
];


const validOperators = ['<', '>', '=', '>=', '<=']
export const filterArrByNumValue = (arr, field , operator, value) => {
    try {
        if (!validOperators.includes(operator))
            throw new Error("Invalid operator")
        const filteredArr = arr.filter(item => {
            const currentField = item[field]
            switch (operator) {
                case ">":
                    return currentField > value
                case "<":
                    return currentField < value
                case ">=":
                    return currentField >= value
                case "<=":
                    return currentField <= value
                case "=":
                    return currentField === value
                default:
                    return arr

            }


        })
        return filteredArr

    } catch (error) {
        return {
            message: error,
            unfilteredArr: arr
        }
    }

}


console.log(filterArrByNumValue(products,"price","?=",100));
