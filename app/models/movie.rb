class Movie < ApplicationRecord
    has_many :questions
    validates :title, presence: true
    validates :plot, presence: true


    def random_questions
        questions.order("RANDOM()").limit(5)
      end
end
