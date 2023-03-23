class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
  
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

      def update_avatar
        byebug
        current_user = User.find_by(id: session[:user_id])
        if current_user
          current_user.avatar.attach(params[:avatar])
          render json: { avatar: url_for(current_user.avatar) }
        else
          render json: { errors: ["Unable to update avatar"] }, status: :unprocessable_entity      
        end
      end
      
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :bio, :avatar)
    end
  end
  