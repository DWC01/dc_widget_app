module Api
  class PostsController < ApplicationController
    respond_to :json

    def create
      message = Message.new(dashboard_params)

      if message.save
        render json: message 
      end

    end
    
    private
      def dashboard_params
        params.require(:message).permit(:content, :name)
      end
  end
end