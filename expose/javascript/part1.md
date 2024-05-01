1. 20
2. 20
3. 20
4. ReferenceError: results is not defined. This is because let is block scoped, and results if only defined in the if loop, not the entire function. Line 13 is outside of the if loop, so results is undefined there.
5. TypeError: Assignment to constant variable. This is because const variables cannot be redeclared.
6. Because an error has already happened at line 4, the code is never executed to here