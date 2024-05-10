package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/cinar/indicator"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
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

func main() {
	values := []float64{1, 2, 1, 5, 8, 10, 4, 6, 5, 2}
	macd, signal := indicator.Macd(values)
	fmt.Println(macd)
	fmt.Println(signal)
	router := chi.NewRouter()
	router.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}))
	indicatorRouter := chi.NewRouter()
	indicatorRouter.Post("/macd", handlerMacd)
	router.Mount("/indicator", indicatorRouter)

	srv := &http.Server{
		Handler: router,
		Addr:    ":8080",
	}
	srv.ListenAndServe()
}
