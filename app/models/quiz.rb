class Quiz < ApplicationRecord
    belongs_to :user
    has_many :quiz_questions
    has_many :questions, through: :quiz_questions
    validates :result, presence: true
end
