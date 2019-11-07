class CreateArtistSelectors < ActiveRecord::Migration[6.0]
  def change
    create_table :artist_selectors do |t|
      t.references :selector, polymorphic: true, null: false

      t.timestamps
    end
  end
end
