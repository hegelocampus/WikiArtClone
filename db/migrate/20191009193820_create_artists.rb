class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :birth_date, default: "unknown"
      t.string :death_date
      t.string :wiki_url
      t.references :nationality, foreign_key: true
      t.references :school, foreign_key: true
      t.references :field, foreign_key: true
      t.references :art_movement, null: false, foreign_key: true

      t.timestamps
    end
    add_index :artists, :name
  end
end
