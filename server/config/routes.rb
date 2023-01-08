Rails.application.routes.draw do
  get 'examples/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  
  resources :users, only: [:create]
  resources :examples, only: [:index]
end
