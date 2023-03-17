class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :option_1
      t.string :option_2
      t.string :option_3
      t.string :option_4
      t.string :correct_answer
      t.integer :movie_id

      t.timestamps
    end
  end
end
