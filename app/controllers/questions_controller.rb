class QuestionsController < ApplicationController
    skip_before_action :authorized, only: :create
  
    def index
    #   questions = Question.all
    #   render json: questions, include: [:movie, :quiz]
    
    
        questions = Question.includes(:quizzes, :movie, :quiz_questions).all
        render json: questions, include: [:quizzes, :movie, :quiz_questions]
      
      
    end
  
    def show
        question = Question.find_by(id: params[:id])
        if question
        render json: question, include: [:movie, :quizzes, :quiz_questions]
        else
            render json: { error: "Review not found" }, status: :not_found
        end
      end
    
  
      def create
        movie = Movie.find_by(id: params[:movie_id])
        question = Question.create(question_params)
        
        if question.valid?
          quiz_question = QuizQuestion.create(quiz_id: params[:quiz_id], question_id: question.id)
          render json: question, include: [:quiz, :movie], status: :created
        else
          render json: { errors: [question.errors.full_messages] }, status: :unprocessable_entity
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
        # current_user = User.find_by(id: session[:user_id])
        # if current_user 
        # question = current_user.questions.find(params[:id])
        question = Question.find(params[:id])

        question.destroy
        head :no_content
        # else
        #     render json: {errors: ["Not Authorized"]}, status: :unauthorized
        # end
    end
  
    private
  
    def find_question
      question = Question.find(params[:id])
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
      end
  
      def question_params
        params.permit(:question, :option_1, :option_2, :option_3, :option_4, :correct_answer, :movie_id, :quiz_id)
      end
    # def question_params
    #     params.permit(:question, :option_1, :option_2, :option_3, :option_4, :correct_answer).merge(movie_id: params[:movie_id])
    #   end
      
  end
  