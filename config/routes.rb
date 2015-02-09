Rails.application.routes.draw do
  root 'posts#index'
  namespace :api do
    resources :posts, defaults: { format: :json }
  end
end
