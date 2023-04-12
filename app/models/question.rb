class Question < ApplicationRecord
    belongs_to :movie
    has_many :quiz_questions
    has_many :quizzes, through: :quiz_questions, foreign_key: 'quiz_id'
    # belongs_to :quiz
    validates :question, presence: true
    validates :option_1, presence: true
    validates :option_2, presence: true
    validates :option_3, presence: true
    validates :option_4, presence: true
    validates :correct_answer, presence: true
    validates :movie_id, presence: true
    # after_create do
    #     quizzes.each do |quiz|
    #       QuizQuestion.create(quiz: quiz, question: self)
    #     end
    #   end
end
