class SongsController < ApplicationController


    def index
        user = User.find_by(id: session[:user_id])
        if user
            songs = Song.all
            render json: songs
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end
    

    private 

    def song_params
        params.permit(:song_title, :feature, :song_length, :user_id, :album_id)
    end
    
end
