class Question < ApplicationRecord
    belongs_to :movie
    has_many :quiz_questions
    has_many :quizzes, through: :quiz_questions
    validates :question, :correct_answer, presence: true
    # validates :correct_answer, inclusion: {in:%w(Option 1 Option 2 Option 3 Option 4), message: "must be one of the options"}
end
