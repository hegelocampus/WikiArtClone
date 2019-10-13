class Api::SelectorsController < ApplicationController
  def index
    #Return all selectors in the table
    @selectors = params[:selector].classify.constantize.all
  end

  def show
    #Returns an instance of a selector by its id
    @selector = params[:selector].classify.constantize.find_by(id: params[:id])
  end

  private

  def selector_params
    params.require(:selector).permit(:id, :type)
  end
end

