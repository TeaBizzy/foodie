class ExamplesController < ApplicationController
  def index
    @examples = Example.all
    render json: @examples
  end
end
