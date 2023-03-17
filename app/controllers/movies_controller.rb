class MoviesController < ApplicationController
    # skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
      movies = Movie.all
      render json: movies
    end
  
    def show
      movie = Movie.find(params[:id])
      if movie
         render json: movie, include: :questions
         else
            render json: { error: "movie not found" }, status: :not_found
        
    end
  end
  
end