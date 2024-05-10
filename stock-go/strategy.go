package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/cinar/indicator"
)

func handlerAwesomeOscillatorStrategy(w http.ResponseWriter, r *http.Request) {
	type Parameters struct {
		Date    []int64   `json:"date"`
		Opening []float64 `json:"opening"`
		Closing []float64 `json:"closing"`
		High    []float64 `json:"high"`
		Low     []float64 `json:"low"`
		Volume  []float64 `json:"volume"`
	}

	type Response struct {
		Actions []indicator.Action `json:"action"`
	}

	decoder := json.NewDecoder(r.Body)
	params := Parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		log.Fatal(err)
	}
	log.Println(params)
	dateArray := toTimeArray(params.Date)
	actions := indicator.AwesomeOscillatorStrategy(&indicator.Asset{
		Date:    dateArray,
		Opening: params.Opening,
		Closing: params.Closing,
		High:    params.High,
		Low:     params.Low,
		Volume:  params.Volume,
	})

	respondWithJSON(w, 200, Response{
		Actions: actions,
	})
}
