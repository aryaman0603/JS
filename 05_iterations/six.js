// const coding = ["js", "cpp", "ruby", "java", "python"]


// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter Method - This method takes each element of an array and applies a conditional statement against it. If the conditional returns
// true, then element gets pushed to the output array. If the conditional returns false, then element does not get pushed to the output array. 

// const newNums = myNums.filter((num) => num > 4)      // Implicity Way 

// const newNums = myNums.filter((nums) => {
//     return nums > 7                                  // Explicit Way 
// })

// const newNums = []

// myNums.forEach((nums) => {
//     if(nums>4) {
//         newNums.push(nums)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1999, edition: 2009},
    {title: 'Book Three', genre: 'Fiction', publish: 1980, edition: 1987},
    {title: 'Book Four', genre: 'Science', publish: 2001, edition: 2016},
    {title: 'Book Five', genre: 'Non-Fiction', publish: 2007, edition: 2010},
    {title: 'Book Six', genre: 'Fiction', publish: 1990, edition: 2008},
    {title: 'Book Seven', genre: 'History', publish: 2001, edition: 2005},
    {title: 'Book Eight', genre: 'Non-Fiction', publish: 2008, edition: 2015},
    {title: 'Book Nine', genre: 'Finance', publish: 1979, edition: 2002},

]

let userBooks = books.filter((bk) => bk.genre === 'History')

// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === 'History'
// })

// let userBooks = books.filter((bk) => bk.publish >= 1990)

// userBooks = books.filter((bk) => {
//     return bk.genre === 'Non-Fiction' && bk.publish >=2000
// })

// userBooks = books.filter((bk) => bk.edition > 2000 && bk.genre === 'Non-Fiction')


console.log(userBooks)