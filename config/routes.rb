Rails.application.routes.draw do
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  delete "/me", to: "users#destroy"
  delete "/questions", to: "questions#destroy"
  post "/user/avatar", to: "users#update_avatar"
  patch "/me", to: "users#update"

  get '/users/:id/quiz_scores', to: 'quizzes#quiz_scores'
  # get '/quizzes/quiz_scores', to: 'quizzes#quiz_scores'

  # get '/users/:id/quiz_scores', to: 'users#quiz_scores'
  # patch '/users/:id/quiz_scores', to: 'users#update_quiz_scores'
  # patch '/quizzes/:id', to: 'quizzes#update_quiz_scores'
  patch '/users/:id/quiz_scores', to: 'quizzes#update_quiz_scores'

  patch "/quiz_questions/:id", to: "quiz_questions#update"


  resources :movies
  # get "/movies", to: "movies#index"
  resources :users
  resources :questions
  resources :quiz_questions
resources :quizzes
get '/movies/:movie_id/quizzes', to: 'quizzes#show_movie_quizzes'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
