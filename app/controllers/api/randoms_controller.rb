class Api::RandomController < ApplicationController
  def index
    @artistId = Artist.all.sample
    render :random
  end
end

