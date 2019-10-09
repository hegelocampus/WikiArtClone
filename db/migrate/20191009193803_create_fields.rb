class CreateFields < ActiveRecord::Migration[6.0]
  def change
    create_table :fields do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
