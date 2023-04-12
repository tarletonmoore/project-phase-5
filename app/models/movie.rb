class Movie < ApplicationRecord
    has_many :questions
    has_many :quizzes
    validates :title, presence: true
    validates :plot, presence: true


    def random_questions
        questions.order("RANDOM()").limit(3)
      end
end
