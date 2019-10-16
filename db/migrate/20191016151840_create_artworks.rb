class CreateArtworks < ActiveRecord::Migration[6.0]
  def change
    create_table :artworks do |t|
      t.string :name
      t.string :date
      t.references :style, null: false, foreign_key: true
      t.references :genre, null: false, foreign_key: true
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
    add_index :artworks, :name
  end
end
