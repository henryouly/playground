package main

import (
	"encoding/json"
	"log"
	"net/http"

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
	dateArray := toTimeArray(params.Date)
	snapshots := make(chan *asset.Snapshot)
	go func() {
		defer close(snapshots)

		for i := 0; i < len(dateArray); i++ {
			snapshots <- &asset.Snapshot{
				Date:  dateArray[i],
				Open:  params.Opening[i],
				Close: params.Closing[i],
				// High:   params.High[i],
				// Low:    params.Low[i],
				// Volume: int64(params.Volume[i]),
			}
		}
	}()

	macdRsi := compound.NewMacdRsiStrategy()
	actions := macdRsi.Compute(snapshots)

	respondWithJSON(w, 200, Response{
		Actions: helper.ChanToSlice(actions),
	})
}
