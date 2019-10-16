Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :all_selectors, only: [:index]
    resources :selectors, only: [:index, :show]
    resources :artists, only: [:index, :show, :create]
    resources :artworks, only: [:index, :show, :create]
    resources :users, only: [:create, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

