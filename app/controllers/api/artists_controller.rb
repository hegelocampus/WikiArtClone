class Api::ArtistsController < ApplicationController
  ##def index
  ##  @artists = Artist
  ##end

  def show
    @artist = Artist.find_by(id: params(:artist[:id]))
  end

  def create
  end

  def edit
  end

  private

  def artist_params
    params.require(:artist).permit(
      :id,
      :name,
      :nationality_id,
      :school_id,
      :field_id,
      :art_movement_id,
      :wiki_url,
      :image_id
    )
  end
end
