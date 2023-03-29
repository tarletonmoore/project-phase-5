# app/serializers/question_serializer.rb

class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :option_1, :option_2, :option_3, :option_4, :correct_answer
  
  belongs_to :movie
  has_many :quiz_questions
  # has_many :quizzes, through: :quiz_questions
end

