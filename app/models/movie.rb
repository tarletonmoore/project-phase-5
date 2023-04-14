class Movie < ApplicationRecord
    has_many :questions
    has_many :quizzes
    validates :title, presence: true
    validates :plot, presence: true


    def random_questions
        questions.order("RANDOM()").limit(5)
      end
   

      def as_json(options = {})
        super(options).merge(random_questions: self.random_questions)
      end

end
