module Api
  class PostsController < ApplicationController
    respond_to :json

    def create
      post = Post.new(post_params)

      if post.save
        render json: post 
      end

    end
    
    private
      def post_params
        params.require(:post).permit(:content, :name)
      end
  end
end