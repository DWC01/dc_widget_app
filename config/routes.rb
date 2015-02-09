Rails.application.routes.draw do
  root 'main#index'
  namespace :api do
    resources :posts, defaults: { format: :json }
  end
end
