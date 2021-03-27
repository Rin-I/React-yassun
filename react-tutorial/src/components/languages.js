export const LANGUAGES = [
"JavaScript",
"C++",
"Ruby",
"Java",
"GO",
]

export const getlanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000)
    })
}