# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts " Seeding spices..."

User.delete_all
Movie.delete_all
Quiz.delete_all
Question.delete_all
QuizQuestion.delete_all

tarleton = User.create!(username: "tarleton", password: "tarleton8000", bio: "Horror Fanatic!!!")
jacob = User.create!(username: "jacob", password: "tarleton8000", bio: "80's horror fan")
john = User.create!(username: "john", password: "tarleton8000", bio: "casual horror fan")
james = User.create!(username: "james", password: "tarleton8000", bio: "huge hooror fan")

friday13 = Movie.create!(title: "Friday The 13th", plot: "A group of teenagers go to Camp Crystal Lake to reopen the camp for the summer after years of failed attempts. What they don’t know is that once upon a time, a little boy drowned there because the counselors didn’t pay attention. That boy was Jason Voorhees, and now someone seeks revenge for his death on his birthday—Friday the 13th—and the unsuspecting new teens are his target.")
nightmare = Movie.create!(title: "Nightmare On Elm Street.", plot: "When Nancy and her friends all begin suffering violent nightmares, they all have one common theme; they all have the same disfigured killer who has a glove made of razors on his right hand. After someone kills one of the group while they slept, Nancy realizes she must stay awake to uncover the truth behind a murderer named Fred Krueger.")
tcm = Movie.create!(title: "Texas Chainsaw Massacre", plot: "When Sally hears that her grandfather's grave may have been vandalized, she and her paraplegic brother, Franklin, set out with their friends to investigate. After a detour to their family's old farmhouse, they discover a group of crazed, murderous outcasts living next door. As the group is attacked one by one by the chainsaw-wielding Leatherface, who wears a mask of human skin, the survivors must do everything they can to escape.")
creepshow = Movie.create!(title: "Creepshow", plot: "A compendium of five short but terrifying tales contained within a single full-length feature, this film conjures scares from traditional bogeymen and portents of doom.")

friday13quiz = Quiz.create!(result: "pass", user_id: tarleton.id)
nightmarequiz = Quiz.create!(result: "fail", user_id: jacob.id)
tcmquiz = Quiz.create!(result: "pass", user_id: tarleton.id)
creepshowquiz = Quiz.create!(result: "pass", user_id: tarleton.id)


question1 = Question.create!(question: "Who was the killer in the original Friday The 13th?", option_1: "Jason's father", option_2: "Jason Vorhees", option_3: "Jason's mother", option_4: "A Camper", correct_answer: "Jason's mother", movie_id: friday13.id)
question2 = Question.create!(question: "What year did the original movie come out?", option_1: "1980", option_2: "1982", option_3: "1984", option_4: "1987", correct_answer: "1980", movie_id: friday13.id)
question3 = Question.create!(question: "Jason is known for wearing a hockey mask, which movie did he obtain it?", option_1: "Friday The 13th", option_2: "Friday The 13th pt. 4", option_3: "Friday The 13th pt. 2", option_4: "Friday The 13th pt.3", correct_answer: "Friday The 13th pt.3", movie_id: friday13.id)
question4 = Question.create!(question: "Which Friday The 13th is called The Final Chapter?", option_1: "Friday the 13th pt. 6", option_2: "Friday The 13th pt. 4", option_3: "Friday The 13th pt. 9", option_4: "Jason X", correct_answer: "Friday The 13th pt. 4", movie_id: friday13.id)
question5 = Question.create!(question: "How did Jason die as a kid?", option_1: "bear attack", option_2: "shot", option_3: "drowned", option_4: "stung by a bee", correct_answer: "drowned", movie_id: friday13.id)
question6 = Question.create!(question: "What year did the original Nightmare on Elm Street come out?", option_1: "1982", option_2: "1983", option_3: "1984", option_4: "1985", correct_answer: "1984", movie_id: nightmare.id)
question7 = Question.create!(question: "What famous actor made their debut in the original?", option_1: "The Rock", option_2: "Johnny Depp", option_3: "Jamie Lee Curtis", option_4: "John Cena", correct_answer: "Johnny Depp", movie_id: nightmare.id)
question8 = Question.create!(question: "Who directed the original?", option_1: "John Carpenter", option_2: "Alfred Hitchcock", option_3: "Wes Craven", option_4: "Stephen King", correct_answer: "Wes Craven", movie_id: nightmare.id)
question9 = Question.create!(question: "Who played Freddy Kruger in the original?", option_1: "Gunner Hanson", option_2: "Robert Englund", option_3: "Jackie Haley", option_4: "Tom Hardy", correct_answer: "Robert Englund", movie_id: nightmare.id)
question10 = Question.create!(question: "What year did the reboot come out?", option_1: "2010", option_2: "2009", option_3: "2012", option_4: "2005", correct_answer: "2010", movie_id: nightmare.id)
question11 = Question.create!(question: "What year did the original Texas Chainsaw Massacre come out?", option_1: "1976", option_2: "1974", option_3: "1980", option_4: "1977", correct_answer: "1974", movie_id: tcm.id)
question12 = Question.create!(question: "Who directed the original?", option_1: "John Carpenter", option_2: "Wes Craven", option_3: "Tobe Hooper", option_4: "Alfred Hitchcock", correct_answer: "Tobe Hooper", movie_id: tcm.id)
question13 = Question.create!(question: "Who played the chainsaw wielding maniac?", option_1: "Gunner Hanson", option_2: "Robert Englund", option_3: "Kane Hodder", option_4: "Richard Brooker", correct_answer: "Gunner Hanson", movie_id: tcm.id)
question14 = Question.create!(question: "What is the chainsaw wielding maniac known as?", option_1: "Meat Head", option_2: "The Skinner", option_3: "Leatherface", option_4: "The Cutter", correct_answer: "Leatherface", movie_id: tcm.id)
question15 = Question.create!(question: "What real person is the killer based on?", option_1: "Ted Bundy", option_2: "Jeffrey Dahmer", option_3: "Richard Ramirez", option_4: "Ed Gein", correct_answer: "Ed Gein", movie_id: tcm.id)
question16 = Question.create!(question: "What year did Creepshow come out?", option_1: "1984", option_2: "1981", option_3: "1980", option_4: "1982", correct_answer: "1982", movie_id: creepshow.id)
question17 = Question.create!(question: "What horror masterminds made this movie?", option_1: "John Carpenter and Stephen King", option_2: "Alfred Hitchcock and Stephen King", option_3: "George A. Romero and Stephen King", option_4: "John Carpenter and Alfred Hitchcock", correct_answer: "George A. Romero and Stephen King", movie_id: creepshow.id)
question18 = Question.create!(question: "What style of movie is Creepshow?", option_1: "Slasher", option_2: "Anthology", option_3: "Supernatual", option_4: "Thriller", correct_answer: "Anthology", movie_id: creepshow.id)
question19 = Question.create!(question: "Which horror mastermind made an appearance in the original film?", option_1: "Stephen King", option_2: "John Carpenter", option_3: "Wes Craven", option_4: "James Wan", correct_answer: "Stephen King", movie_id: creepshow.id)
question20 = Question.create!(question: "What year did Creepshow 2 come out?", option_1: "1984", option_2: "1986", option_3: "1987", option_4: "1989", correct_answer: "1987", movie_id: creepshow.id)

friday13qq = QuizQuestion.create!(quiz_id: friday13quiz.id, question_id: question1.id, status: "unanswered")
friday13qq2 = QuizQuestion.create!(quiz_id: friday13quiz.id, question_id: question2.id, status: "unanswered")
friday13qq3 = QuizQuestion.create!(quiz_id: friday13quiz.id, question_id: question3.id, status: "unanswered")
friday13qq4 = QuizQuestion.create!(quiz_id: friday13quiz.id, question_id: question4.id, status: "unanswered")
friday13qq5 = QuizQuestion.create!(quiz_id: friday13quiz.id, question_id: question5.id, status: "unanswered")
nightmareqq = QuizQuestion.create!(quiz_id: nightmarequiz.id, question_id: question6.id, status: "unanswered")
nightmareqq2 = QuizQuestion.create!(quiz_id: nightmarequiz.id, question_id: question7.id, status: "unanswered")
nightmareqq3 = QuizQuestion.create!(quiz_id: nightmarequiz.id, question_id: question8.id, status: "unanswered")
nightmareqq4 = QuizQuestion.create!(quiz_id: nightmarequiz.id, question_id: question9.id, status: "unanswered")
nightmareqq5 = QuizQuestion.create!(quiz_id: nightmarequiz.id, question_id: question10.id, status: "unanswered")
tcmqq = QuizQuestion.create!(quiz_id: tcmquiz.id, question_id: question11.id, status: "unanswered")
tcmqq2 = QuizQuestion.create!(quiz_id: tcmquiz.id, question_id: question12.id, status: "unanswered")
tcmqq3 = QuizQuestion.create!(quiz_id: tcmquiz.id, question_id: question13.id, status: "unanswered")
tcmqq4 = QuizQuestion.create!(quiz_id: tcmquiz.id, question_id: question14.id, status: "unanswered")
tcmqq5 = QuizQuestion.create!(quiz_id: tcmquiz.id, question_id: question15.id, status: "unanswered")
creepshowqq = QuizQuestion.create!(quiz_id: creepshowquiz.id, question_id: question16.id, status: "unanswered")
creepshowqq2 = QuizQuestion.create!(quiz_id: creepshowquiz.id, question_id: question17.id, status: "unanswered")
creepshowqq3 = QuizQuestion.create!(quiz_id: creepshowquiz.id, question_id: question18.id, status: "unanswered")
creepshowqq4 = QuizQuestion.create!(quiz_id: creepshowquiz.id, question_id: question19.id, status: "unanswered")
creepshowqq5 = QuizQuestion.create!(quiz_id: creepshowquiz.id, question_id: question20.id, status: "unanswered")

puts " Done seeding!"