class CreateArtworkSelectors < ActiveRecord::Migration[6.0]
  def change
    create_table :artwork_selectors do |t|
      t.references :selector, polymorphic: true, null: false

      t.timestamps
    end
  end
end
