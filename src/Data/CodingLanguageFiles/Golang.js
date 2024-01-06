export const Golang = `
package main

import (
	"fmt"
)

func factorial(n int) int {
	if n == 0 || n == 1 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	var number int
	fmt.Print("Enter a number: ")
	fmt.Scan(&number)

	result := factorial(number)

	fmt.Printf("Factorial of %d is: %d\n", number, result)
}
`;
