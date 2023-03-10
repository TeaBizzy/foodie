Rails.application.routes.draw do
  get 'examples/index'
  
  get 'signed_on', to: 'login#is_logged_in'
  get 'user_session_data', to: 'application#user_session_data'
  get 'session_restaurants/:session_id', to: 'application#session_restaurants'
  post 'logout', to: 'login#logout'
  post 'swipe', to: 'restaurants#create_swipe'
  get 'sessions/:id/resolve', to: 'sessions#resolve_session'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  resources :login, only: [:create]
  resources :user_sessions, only: [:index]
  resources :restaurants, only: [:index]
  resources :users, only: [:create, :index]
  resources :examples, only: [:index]
  resources :sessions, only: [:create, :destroy]
  # post 'destroy' => 'sessions#destroy'
 # delete 'delete', to: 'sessions#destroy', as: :delete
end
