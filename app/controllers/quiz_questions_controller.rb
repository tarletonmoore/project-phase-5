# app/controllers/quiz_questions_controller.rb
class QuizQuestionsController < ApplicationController
    def index
quizquestions = QuizQuestion.all
render json: quizquestions, include: [:question, :quiz]

    end

    def create
        current_user = User.find_by(id: session[:user_id])
       
    if current_user
      quiz_question = QuizQuestion.create(quiz_question_params)
      if quiz_question.valid?
        render json: quiz_question, status: :created
    else
        render json: { errors: [quiz_question.errors.full_messages] }, status: :unprocessable_entity
    end
else
    render json: {errors: ["Not Authorized"]}, status: :unauthorized
end

    end

    def update
        # byebug
        current_user = User.find_by(id: session[:user_id])
        if current_user
          quiz_question = QuizQuestion.find_by(id: params[:id])
          if quiz_question
            quiz_question.update(status: params[:status])
            render json: quiz_question
          else
            render json: { errors: ["Quiz question not found"] }, status: :not_found
          end
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
      end
    # def update
    #     current_user = User.find_by(id: session[:user_id])
        
    #     if current_user
    #       quiz_question = current_user.quizquestions.find(params[:id])
    #       puts params # check the contents of the params hash
    #       if quiz_question.valid?
    #         quiz_question.update(status: params[:status])
    #         puts quiz_question.status # check if the status attribute is being updated
    #         render json: quiz_question
    #       else
    #         render json: { errors: [quiz_question.errors.full_messages] }, status: :unprocessable_entity
    #       end
    #     else
    #       render json: {errors: ["Not Authorized"]}, status: :unauthorized
    #     end
    #   end
      
      
  
    private
  
    def quiz_question_params
      params.require(:quiz_question).permit(:quiz_id, :question_id, :status, :id)
        # :chosen_answer)
    end
  end
  