Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'create', to: 'card#create'
  get '/', to: 'home#index'
  get '/home', to: 'home#home'
  get '/about', to: 'about#index'
end
