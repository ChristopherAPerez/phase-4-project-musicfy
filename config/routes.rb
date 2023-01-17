Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  ################# Routes #####################

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"

  get "/users", to: "users#index"

  get "/albums", to: "albums#index"
  post "upload_album", to: "albums#create"
  get "/my_albums", to: "albums#show"
  patch "/update_album", to: "albums#update"
  delete "/delete_album", to: "albums#destroy"

  get "/songs", to: "songs#index"

  ################# Routes #####################

end
