class Api::SelectorsController < ApplicationController
  def index
    #Return all selectors in the table
    @selectors = params[:selector].constantize.all
  end

  def show
    #Returns an instance of a selector, this will render all its subselectors
    @selector = params[:selector].constantize.find_by(id: params[:id])
  end

  private

  def selector_params
    params.require(:selector).permit(:id, :type)
  end
end
