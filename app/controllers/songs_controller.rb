class SongsController < ApplicationController
    wrap_parameters format: []

    def index
        user = User.find_by(id: session[:user_id])
        if user
            songs = Song.all
            render json: songs, include: :album
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user
            song = user.songs.create(song_params)
            if song
                render json: song, include: [:album, :user], status: :created
            else
                render json: { errors: ["errors"] }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            user_songs = Song.where(user_id: user.id)
            render json: user_songs, include: [:album, :user]
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    # def testing
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #         song = Song.find_by(song_title: params[:song_title])
    #         render json: song
    #     else
    #         render json: { errors: ["Not authorized"] }, status: :unauthorized
    #     end
    # end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            song = Song.find_by(id: params[:id])
            if song
                song.update(song_params)
                if song.valid?
                    render json: song, include: [:album, :user], status: :accepted
                else
                    render json: { errors: scientist.errors.full_messages }, status: :unprocessable_entity
                end
            else
                render json: { error: "Song not found" }, status: :not_found
            end
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            song = Song.find_by(id: params[:id])
            if song.valid?
                song.destroy
                head :no_content
            else
                render json: { error: "Song not found" }, status: :not_found
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end
    

    private 

    def song_params
        params.permit(:song_title, :feature, :song_length, :streams, :user_id, :album_id)
    end
    
end
