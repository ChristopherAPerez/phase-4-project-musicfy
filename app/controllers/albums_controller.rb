class AlbumsController < ApplicationController
    wrap_parameters format: []

    def index
        user = User.find_by(id: session[:user_id])
        if user
            albums = Album.all
            render json: albums
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user
            album = user.albums.create(album_params)
            
            if album
                render json: album, status: :created
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
            user_albums = Album.where(user_id: user.id)
            render json: user_albums, include: :user
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            album = Album.find_by(id: user.id)
            if album
                album.update(album_params)
                if album.valid?
                    render json: album, status: :accepted
                else
                    render json: { errors: scientist.errors.full_messages }, status: :unprocessable_entity
                end
            else
                render json: { error: "Album not found" }, status: :not_found
            end
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            album = Album.find_by(id: user.id)
            if album.valid?
                album.destroy
                head :no_content
            else
                render json: { error: "Album not found" }, status: :not_found
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private 

    def album_params
        params.permit(:album_title, :artist, :genre, :album_image, :artist_image, :album_length, :likes)
    end
    
end
