# app/controllers/quizzes_controller.rb
class QuizzesController < ApplicationController
    # before_action :find_quiz, only: [:show, :update]
  
def index
quizzes = Quiz.all
render json: quizzes, include: [:questions]
end
# def index
#     current_user = User.find_by(id: session[:user_id])
#     quizzes = current_user.quizzes.includes(:questions)
#     quiz_results = current_user.quiz_results # get the quiz results for the current user
#     render json: quizzes.as_json(include: { questions: { only: [:id, :question, :option_1, :option_2, :option_3, :option_4] }, quiz_results: { only: [:result] } })
#   end
  

    # def new
    #     movie = Movie.find(params[:movie_id])
    #     questions = movie.questions.sample(5) 
    #     quiz = Quiz.create(questions: questions)
    #     render json: quiz
    #   end
  
 
      
    # def create
    #     byebug
    # #   quiz_params = params.require(:quiz).permit(:result, questions_attributes: [:id, :question, :option_1, :option_2, :option_3, :option_4, :correct_answer, :movie_id])
    #   current_user = User.find_by(id: session[:user_id])
    #   quiz = current_user.quizzes.create(quiz_params)
      
    #   if quiz.valid?
    #     render json: quiz, status: :created
    #   else
    #     render json: { errors: quiz.errors.full_messages }, status: :unprocessable_entity
    #   end
    # end
  
    def create
        # byebug
        current_user = User.find_by(id: session[:user_id])
        quiz = current_user.quizzes.create(quiz_params.except(:questions_attributes))
      
        if quiz.persisted?
          quiz_params[:questions_attributes].each do |question_params|
            question = Question.create(question_params.merge(movie_id: question_params[:movie_id]))
            QuizQuestion.create(quiz: quiz, question: question)
          end
      
          render json: quiz, status: :created
        else
          render json: { error: quiz.errors.full_messages }, status: :unprocessable_entity
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
  
    # def update
    #   quiz_question = QuizQuestion.find(params[:quiz_question_id])
    #   chosen_answer = params[:quiz_question][:chosen_answer]
    #   quiz_question.update(status: @quiz_question.status_for(chosen_answer), chosen_answer: chosen_answer)
    # #   redirect_to quiz_path(quiz)
    # end


    def destroy
        current_user = User.find_by(id: session[:user_id])
        if current_user 
        quiz = current_user.quizzes.find(params[:id])
        quiz.destroy
        head :no_content
        else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
        end
      end
  
      def quiz_scores
        current_user = User.find_by(id: session[:user_id])
       quiz_scores = current_user.quizzes.pluck(:result)
       render json: { quiz_scores: quiz_scores }
   end

    private
  
    def find_quiz
      quiz = Quiz.find(params[:id])
    end
  
      
      def quiz_params
        params.require(:quiz).permit(:result, questions_attributes: [:id, :question, :option_1, :option_2, :option_3, :option_4, :correct_answer, :movie_id])
      end
  
    def calculate_quiz_result
      num_correct_answers = QuizQuestion.where(quiz_id: quiz.id, status: "correct").count
      total_questions = QuizQuestion.where(quiz_id: quiz.id).count
      percent_correct = (num_correct_answers.to_f / total_questions.to_f) * 100
    end
end