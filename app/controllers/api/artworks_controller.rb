class Api::ArtworksController < ApplicationController
  def index
    if params[:artist_id]
      @artist = Artist.find_by(id: params[:artist_id])
      @artworks = @artist.artworks
    else
      parsedSelectors = selector_params
      @artworks = Artwork.joins(parsedSelectors.keys).where(parsedSelectors)
    end
  end

  def show
    @artist = Artist.find_by(id: params[:artist_id])
    @artwork = @artist.artworks.find_by(id: params[:id])
  end

  def create
    artwork_params.slice(
      :name,
      :date,
      :artist_id,
      :genre_id,
      :style_id,
    ).each_pai
    @artwork = Artwork.new()

    @image = @artwork.build_image(
      url: artwork_params[:image_url],
      caption: artwork_params[:image_caption],
    )

    if @artwork.save && @image.save
      render :show
    else
      render json: (@artwork.errors.full_messages + @image.errors.full_messages), status: 422
    end
  end

  def update
    @artwork = Artwork.find_by(id: params[:id])
    @artist = @artwork.artist
    @image = @artwork.image

    artwork_update = artwork_params.slice(
      :name,
      :date,
      :artist_id,
      :genre_id,
      :style_id,
    )
    artwork_update[:date] = Date.parse(artwork_update[:date])

   image_update = {
      url: artwork_params[:image_url],
      thumb_url: artwork_params[:image_thumb_url],
      caption: artwork_params[:image_caption],
    }

    if @artwork.update(artwork_update) && @image.update(image_update)
      render :show
    else
      render json: (@artwork.errors.full_messages + @image.errors.full_messages), status: 422
    end
  end

  private

  def artwork_params
    params = params.require(:artwork).transform_keys(&:underscore).permit(
      :id,
      :name,
      :date,
      :genre_id,
      :style_id,
      :artist_id,
      :image_url,
      :image_thumb_url,
      :image_caption,
    ).to_hash.map do |attribute, val|
      #TODO: Fill out this map to get the id for the desired attribute
      parsed_attribute = attribute.match(/\S+_id/i)
      parsed_val = parsed_attribute[0] ?  : val)
      [attribute, parsed_val]}
    end
    params.to_h
  end

  def selector_params
    params.require(:selectors)
      .permit(
        :style,
        :genre,
      )
      .to_hash.transform_keys { |k| k.underscore.to_sym }
      .transform_values(&:to_i)
  end
end
