package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/cinar/indicator/v2/asset"
	"github.com/cinar/indicator/v2/helper"
	"github.com/cinar/indicator/v2/strategy"
	"github.com/cinar/indicator/v2/strategy/compound"
)

func handlerMacdAndRsiStrategy(w http.ResponseWriter, r *http.Request) {
	type Parameters struct {
		Date    []int64   `json:"date"`
		Opening []float64 `json:"opening"`
		Closing []float64 `json:"closing"`
		High    []float64 `json:"high"`
		Low     []float64 `json:"low"`
		Volume  []float64 `json:"volume"`
	}

	type Response struct {
		Actions []strategy.Action `json:"action"`
	}

	decoder := json.NewDecoder(r.Body)
	params := Parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		log.Fatal(err)
	}
	log.Println(params)
	// dateArray := toTimeArray(params.Date)
	repository := asset.NewInMemoryRepository()
	snapshots := []*asset.Snapshot{
		{Date: time.Date(2000, 1, 1, 0, 0, 0, 0, time.UTC)},
		{Date: time.Date(2000, 1, 2, 0, 0, 0, 0, time.UTC)},
	}
	err = repository.Append("A", helper.SliceToChan(snapshots))
	if err != nil {
		log.Fatal(err)
	}
	macdRsi := compound.NewMacdRsiStrategy()
	actions := macdRsi.Compute(helper.SliceToChan(snapshots))

	respondWithJSON(w, 200, Response{
		Actions: helper.ChanToSlice(actions),
	})
}
