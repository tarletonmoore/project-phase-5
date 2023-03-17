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
  
    private
  
    def quiz_question_params
      params.require(:quiz_question).permit(:quiz_id, :question_id, :chosen_answer)
    end
  end
  