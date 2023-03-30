class QuestionsController < ApplicationController
    skip_before_action :authorized, only: :create
  
    def index
    #   questions = Question.all
    #   render json: questions, include: [:movie, :quiz]
    
        questions = Question.includes(:quiz).all
        render json: questions, include: [:quiz, :movie]
      
    end
  
    def show
        question = Question.find_by(id: params[:id])
        if question
        render json: question, include: [:movie, :quiz]
        else
            render json: { error: "Review not found" }, status: :not_found
        end
      end
    
  
    def create
        current_user = User.find_by(id: session[:user_id])
   
    if current_user
 
    movie = Movie.find_by(id: params[:movie_id])

        question = current_user.questions.create(question_params)

        if question.valid?

            render json: question, include: [:user, :movie], status: :created
        else
            render json: { errors: [question.errors.full_messages] }, status: :unprocessable_entity
        end
    else
        render json: {errors: ["Not Authorized"]}, status: :unauthorized
    end
    end
  
  
    def update
        current_user = User.find_by(id: session[:user_id])
        if current_user 
            question = current_user.questions.find(params[:id])
        question.update(question_params)
        render json: review, include: :user
         else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
      end
    end
  
    def destroy
        current_user = User.find_by(id: session[:user_id])
        if current_user 
        question = current_user.questions.find(params[:id])
        question.destroy
        head :no_content
        else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
        end
    end
  
    private
  
    def find_question
      question = Question.find(params[:id])
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
      end
  
    def question_params
      params.require(:question).permit(:question, :option_1, :option_2, :option_3, :option_4, :correct_answer, :movie_id)
    end
  end
  