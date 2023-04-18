class MoviesController < ApplicationController
    skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # def index
    #   movies = Movie.all
    #   render json: movies, include: :questions      
    # end

    def index
        @movies = Movie.all.includes(:questions)
        @movies = @movies.map do |movie|
          movie.as_json.merge({ random_questions: movie.questions.sample(5) })
        end
        render json: @movies
      end
      
      
      
      
      def show
        movie = Movie.find(params[:id])
        render json: movie.as_json(include: :questions, methods: :random_questions)
      end
      
    #   def random_questions
    #     @movie = Movie.find(params[:id])
    #     questions = @movie.random_questions(5) 
    #     render json: questions
    #   end
      

  def create
        
    current_user = User.find_by(id: session[:user_id])
    if current_user
        movie = Movie.create(movie_params)
    
        if movie.valid?
            render json: movie, status: :created
        else
            render json: { errors: [movie.errors.full_messages] }, status: :unprocessable_entity
        end
    else
        render json: {errors: ["Not Authorized"]}, status: :unauthorized
    end
  
end
  
private
    

def render_unprocessable_entity_response(invalid)
    render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
  end

def movie_params
  params.permit(:title, :plot)
end

end