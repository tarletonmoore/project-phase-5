# app/controllers/quizzes_controller.rb
class QuizzesController < ApplicationController
    # before_action :find_quiz, only: [:show, :update]
  
    def new
      @quiz = Quiz.new
    end
  
    def create
      @quiz = Quiz.new(quiz_params)
      if @quiz.save
        redirect_to quiz_path(@quiz)
      else
        # handle validation errors
      end
    end
  
    def show
      @quiz_question = QuizQuestion.find_by(quiz_id: @quiz.id, status: nil)
      if @quiz_question.nil?
        @quiz.update(result: calculate_quiz_result)
      end
    end
  
    def update
      @quiz_question = QuizQuestion.find(params[:quiz_question_id])
      chosen_answer = params[:quiz_question][:chosen_answer]
      @quiz_question.update(status: @quiz_question.status_for(chosen_answer), chosen_answer: chosen_answer)
      redirect_to quiz_path(@quiz)
    end
  
    private
  
    def find_quiz
      quiz = Quiz.find(params[:id])
    end
  
    def quiz_params
      params.require(:quiz).permit(:user_id)
    end
  
    def calculate_quiz_result
      num_correct_answers = QuizQuestion.where(quiz_id: quiz.id, status: "correct").count
      total_questions = QuizQuestion.where(quiz_id: quiz.id).count
      percent_correct = (num_correct_answers.to_f / total_questions.to_f) * 100
  