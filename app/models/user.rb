class User < ApplicationRecord
    has_secure_password
    has_many :quizzes
    has_one_attached :avatar do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
        end
    validates :username, presence: true
    validates :password, presence: true
end