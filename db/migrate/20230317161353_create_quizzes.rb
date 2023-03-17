class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.string :result
      t.integer :user_id

      t.timestamps
    end
  end
end
