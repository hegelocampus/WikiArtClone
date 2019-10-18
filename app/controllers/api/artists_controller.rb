class Api::ArtistsController < ApplicationController
  #TODO require current user before adding artwork
  #TODO add user_id as foreign key onto artists
  def index
    parsedSelectors = selector_params

    @artists = Artist.joins(parsedSelectors.keys)
      .where(parsedSelectors)
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    @artworks = @artist.artworks.where(famous: true)
  end

  def create
    @artist = Artist.new(artist_params.slice(
      :name,
      :birth_date,
      :death_date,
      :nationality_id,
      :school_id,
      :field_id,
      :art_movement_id,
      :wiki_url,
    ))
    @image = @artist.build_image(
      url: artist_params[:image_url],
      caption: artist_params[:image_caption],
    )
    if @artist.save && @image.save
      render :show
    else
      render json: (@artist.errors.full_messages + @image.errors.full_messages), status: 422
    end
  end

  def edit
    @artist = Artist.find_by(id: params[:id])

    parsedArtistParams = artist_params.slice(
      :id,
      :name,
      :birth_date,
      :death_date,
      :nationality_id,
      :school_id,
      :field_id,
      :art_movement_id,
      :wiki_url,
    )
    parsedImageParams = {
      url: artist_params[:image_url],
      caption: artist_params[:image_caption],
    }

    @image = @artist.image

    if @artist.update(parsedArtistParams) && @image.update(parsedImageParams)
      render :show
    else
      render @artist.errors + @image.errors
    end
  end

  private

  def artist_params
    params.require(:artist).transform_keys(&:underscore).permit(
      :id,
      :name,
      :birth_date,
      :death_date,
      :nationality_id,
      :school_id,
      :field_id,
      :art_movement_id,
      :wiki_url,
      :image_url,
      :image_caption,
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
