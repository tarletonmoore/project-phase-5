# app/serializers/movie_serializer.rb

class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :plot
  
  has_many :questions
  has_many :quizzes
end

