Rails.application.routes.draw do
  get 'examples/index'

  get 'test', to: 'login#test'

  get 'signed_on', to: 'login#is_logged_in'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  resources :login, only: [:create]
  resources :users, only: [:create, :index]
  resources :examples, only: [:index]
end
