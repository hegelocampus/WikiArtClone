class Api::AllSelectorsController < ApplicationController
  #TODO implement the ArtistSelector and ArtworkSelector model
  def index
    type = params[:type]
    if type == "artist"
      @selectors = {
        art_movements: ArtMovement.all,
        fields: Field.all,
        nationalities: Nationality.all,
        schools: School.all,
      }
    elsif type == "artwork"
      @selectors = {
        styles: Style.all,
        genres: Genre.all
      }
    end
  end

  private

  def selector_params
    params.require(:type)
  end
end
