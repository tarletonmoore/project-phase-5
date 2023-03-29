class QuizQuestionSerializer < ActiveModel::Serializer
  attributes :id, :status
  belongs_to :quiz
  belongs_to :question
end

