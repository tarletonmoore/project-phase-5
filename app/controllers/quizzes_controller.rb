# app/controllers/quizzes_controller.rb
class QuizzesController < ApplicationController
    # before_action :find_quiz, only: [:show, :update]
  
def index
quizzes = Quiz.all
render json: quizzes, include: [:questions]
end

    def new
        movie = Movie.find(params[:movie_id])
        questions = movie.questions.sample(5) 
        quiz = Quiz.create(questions: questions)
        render json: quiz
      end
  
    def create
      quiz = Quiz.create(quiz_params)
      if quiz.valid?
        render json: quiz
      else
        render json: { errors: [quiz.errors.full_messages] }, status: :unprocessable_entity
      end
    end
  
    # def show
    #   quiz_question = QuizQuestion.find_by(quiz_id: quiz.id, status: nil)
    #   if quiz_question.nil?
    #     quiz.update(result: calculate_quiz_result)
    #   end
    # end

    def show_movie_quizzes
        movie = Movie.find(params[:id])
        quizzes = movie.quizzes.includes(:questions)
    
        render json: quizzes.as_json(include: :questions)
      end

    def show
        movie = Movie.find(params[:id])
        questions = movie.random_questions
        render json: questions
      end
  
    def update
      quiz_question = QuizQuestion.find(params[:quiz_question_id])
      chosen_answer = params[:quiz_question][:chosen_answer]
      quiz_question.update(status: @quiz_question.status_for(chosen_answer), chosen_answer: chosen_answer)
    #   redirect_to quiz_path(quiz)
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
    end
end