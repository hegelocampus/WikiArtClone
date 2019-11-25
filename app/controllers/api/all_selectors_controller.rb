class Api::AllSelectorsController < ApplicationController
  #TODO implement the ArtistSelector and ArtworkSelector model
  def index
    type = params[:type]
    if type == "artist"
      @selectors = {
        art_movement: ArtMovement.all,
        field: Field.all,
        nationality: Nationality.all,
        school: School.all,
      }
    elsif type == "artwork"
      @selectors = {
        style: Style.all,
        genre: Genre.all
      }
    end
  end

  private

  def selector_params
    params.require(:type)
  end
end
