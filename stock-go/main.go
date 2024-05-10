package main

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
)

func main() {
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

	strategyRouter := chi.NewRouter()
	strategyRouter.Post("/ao", handlerAwesomeOscillatorStrategy)
	router.Mount("/strategy", strategyRouter)

	srv := &http.Server{
		Handler: router,
		Addr:    ":8080",
	}
	srv.ListenAndServe()
}
