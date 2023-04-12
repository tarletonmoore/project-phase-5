# app/serializers/question_serializer.rb

class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :option_1, :option_2, :option_3, :option_4, :correct_answer
  
  belongs_to :movie
  has_many :quiz_questions
  # belongs_to :quiz
  has_many :quizzes, through: :quiz_questions, foreign_key: 'quiz_id'
end

