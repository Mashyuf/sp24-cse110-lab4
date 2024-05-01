1. Prints out 3, this is because i is declared as a var, and is continuously defined across the entire function. When the for loop finished executing, i is 3, therefore line 12 returned 3.
2. Prints out 150, this is because the same reasons as question 1. DiscountedPrice is 150, as that is 300 * (1 - 0.5), and that is the final definition of DiscountedPrice when the for loop finished executing.
3. Prints out 150, this is because the same reasons as question 1 and 2. finalPrice is 150 when the for loop finished executing, so it will stay as 150 when it reached line 14.
4. Function should return [50, 50, 150]. This is discounted is an array, so it should now contain the discounted price of all 3 items inside the array when the fucntion finished executing.
5. ReferenceError: i is not defined. Because let is scoped to the block, which in this code is the for loop, but line 12 is outside of the scope of i, so it will cause a reference error.
6. It will return the same error as question 5, because of the same reason. Line 13 is outside of the scope of discountPrice, so it will cause a reference error.
7. Prints out 150, this is because finalPrice is 150 when the for loop finished executing. At the same time because finalPrice is scoped to the entire function, so it will not return an error, as line 14 is still within finalPrice's scope.
8. Function should return [50, 50, 150] because of the same reason as question 4. Furthermore, discounted is scoped to the entire function, and will not be out of scope by the return statement.
9. ReferenceError: i is not defined. This is because const variable is also scoped to the block, and line 12 is outside of the scope of i, so it will cause a reference error.
10. It will print out 3, because the length of the prices array is 3 at the time when length constant is declared.
11. Function should return [50, 50, 150] because of the same reason as question 4 and 8. Furthermore, discountedPrice is redeclared everytime a cycle of the loop is executed, therefore there is no issues caused by a constant being redefined.
12. A. student.name
    
    B. student.["Grad Year"]

    C. student.greeting()

    D. student.["Favorite Teacher"].name

    E. student.courseLoad[0]

13. A. 32

    B. 1
    
    C. 3

    D. 3null

    E. 4

    F. 3

    G. 3undefined

    H. NaN

14. A. true

    B. false

    C. true

    D. true

    E. false

    F. true

15. == is just a simple equality checker, it doesn't differentiate types. So 1 == '1' is true. === is a strict equality checker, and it does differentiate types, which means 1 === '1' is false.
16. 
17. It should return [2, 4, 6], because doSomething is called in modifyArray to perform action on everything i in the original array. The function doSomething is passed into modifyArray as a parameter.
18. 
19. 1
    4
    3
    2


