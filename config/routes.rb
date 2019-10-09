Rails.application.routes.draw do
  namespace :api do
    get 'selectors/index'
    get 'selectors/show'
  end
  namespace :api do
    get 'artists/index'
    get 'artists/show'
    get 'artists/create'
    get 'artists/edit'
  end
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

