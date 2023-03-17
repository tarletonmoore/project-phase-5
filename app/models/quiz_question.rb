class QuizQuestion < ApplicationRecord
    belongs_to :quiz
    belongs_to :question
    validates :status, presence: true

    def answer_correct?(chosen_answer)
        chosen_answer == question.correct_answer
    end

    def status_for(chosen_answer)
        if chosen_answer.nil?
            "unanswered"
        elsif answer_correct?(chosen_answer)
            "correct"
        else
            "incorrect"
        end
    end
end