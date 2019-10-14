class Api::ArtistsController < ApplicationController
  def index
    parsedSelectors = selector_params
    p parsedSelectors

    @artists = Artist.joins(parsedSelectors.keys)
      .where(parsedSelectors)
  end

  def show
    @artist = Artist.find_by(id: params[:id])
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

  def selector_params
    params.require(:selectors)
      .permit(
      :nationality,
      :school,
      :field,
      :artMovement
    )
      .to_hash.transform_keys { |k| k.underscore.to_sym }
      .transform_values(&:to_i)
  end
end
