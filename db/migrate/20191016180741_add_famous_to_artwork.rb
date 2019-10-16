class AddFamousToArtwork < ActiveRecord::Migration[6.0]
  def change
    add_column :artworks, :famous, :boolean, default: false
  end
end
