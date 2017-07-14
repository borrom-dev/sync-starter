Rails.application.routes.draw do
  root 'application#index'

  namespace :api do
    namespace :v1 do
          resources :articles
    end
  end

  get '*any', to: 'application#index'
end
