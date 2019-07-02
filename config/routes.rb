Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#home'
  get 'join', to:'pages#join'
  get 'donate', to:'pages#donate'
  get 'projects', to:'pages#project'
  get 'volunteers', to:'pages#volunteer'
end
