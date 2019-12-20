class Api::RandomsController < ApplicationController
  def show
    @artistId = Artist.all.sample.id
    render :show
  end
end

