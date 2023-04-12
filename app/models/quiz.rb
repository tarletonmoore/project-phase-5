class Quiz < ApplicationRecord
    belongs_to :user
    has_many :quiz_questions
    has_many :questions, through: :quiz_questions
    accepts_nested_attributes_for :questions

    attribute :result, :string, default: "fail"
    # after_create do
    #     questions.each do |question|
    #       QuizQuestion.create(quiz: self, question: question)
    #     end
    #   end
end
