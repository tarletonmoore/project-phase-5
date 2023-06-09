class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    # before_action :authorized, only: [:destroy]
  
    def index
      users = User.all
      render json: users, include: :avatar
    #   , methods: [:avatar]
    end
  
    def create
      user = User.create(user_params)
  
      if user.valid?
        session[:user_id] = user.id
        render json: user, methods: [:avatar], status: :created
        # redirect_to '/movies'

      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, include: :avatar
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
      end

        # def show
        #     current_user = User.find_by(id: session[:user_id])
        #     @quiz_results = current_user.quiz_results.includes(:quiz)
        #   render json: { user: current_user, quiz_results: @quiz_results }
        # end
      

      def update_avatar
        # byebug
        current_user = User.find_by(id: session[:user_id])
        if current_user
          current_user.avatar.attach(params[:avatar])
          render json: { avatar: url_for(current_user.avatar) }
        else
          render json: { errors: ["Unable to update avatar"] }, status: :unprocessable_entity      
        end
      end
      
      def update
        current_user = User.find_by(id: session[:user_id])
        if current_user
          current_user.update(bio: params[:bio])
          render json: current_user
        else
          render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
      end
      

    def destroy
        current_user = User.find_by(id: session[:user_id])
        if current_user
          current_user.destroy
        session.delete(:user_id)
        
        else
        render json: {errors: ["Not Authorized"]}, status: :unauthorized    
        
        end
      end
      
      def quiz_scores
        current_user = User.find_by(id: session[:user_id])
       quiz_scores = current_user.quizzes.pluck(:result)
       render json: { quiz_scores: quiz_scores }
   end
      
#    def update_quiz_scores
#     current_user = User.find_by(id: session[:user_id])
#     if current_user
#     quiz_scores = current_user.quizzes.result || {}
#         quiz_scores[:result] = params[:result]
#         current_user.update(quiz_scores: quiz_scores)
#         render json: current_user
#     else
#         render json: { errors: ["Not Authorized"] }, status: :unauthorized
#       end
#       end
        
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :bio, :avatar)
    end
  end
  