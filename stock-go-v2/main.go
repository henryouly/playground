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

	strategyRouter := chi.NewRouter()
	strategyRouter.Post("/rsi", handlerMacdAndRsiStrategy)
	router.Mount("/strategy", strategyRouter)

	srv := &http.Server{
		Handler: router,
		Addr:    ":8080",
	}
	srv.ListenAndServe()
}
