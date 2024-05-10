package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

func respondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
	dat, err := json.Marshal(payload)
	if err != nil {
		log.Println("Failed to marshal payload", payload)
		w.WriteHeader(500)
		return
	}
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(dat)
}

func toTimeArray(timestamps []int64) []time.Time {
	timeArray := make([]time.Time, len(timestamps))
	for i, ts := range timestamps {
		timeArray[i] = time.Unix(ts, 0)
	}
	return timeArray
}
