class Api::AllSelectorsController < ApplicationController
  def index
    # This is set up right if I want to start using it sometime
    # ArtistSelector.all
    @art_movements = ArtMovement.all
    @fields = Field.all
    @nationalities = Nationality.all
    @schools = School.all
  end

  private

  def selectors_params
    params.require(:selector)
  end
end
