package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/cinar/indicator"
)

func handlerMacd(w http.ResponseWriter, r *http.Request) {
	type Parameters struct {
		Closing []float64 `json:"closing"`
	}

	type Response struct {
		Macd   []float64 `json:"macd"`
		Signal []float64 `json:"signal"`
	}

	decoder := json.NewDecoder(r.Body)
	params := Parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(params)
	macd, signal := indicator.Macd(params.Closing)

	respondWithJSON(w, 200, Response{
		Macd:   macd,
		Signal: signal,
	})
}
