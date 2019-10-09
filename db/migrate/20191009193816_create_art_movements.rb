class CreateArtMovements < ActiveRecord::Migration[6.0]
  def change
    create_table :art_movements do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
