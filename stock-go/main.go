package main

import (
	"fmt"

	"github.com/cinar/indicator"
)

func main() {
	values := []float64{1, 2, 1, 5, 8, 10, 4, 6, 5, 2}
	actual := indicator.AbsolutePriceOscillator(2, 5, values)
	fmt.Println("", actual)
}
