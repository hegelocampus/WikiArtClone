class AddThumbUrlToArtworks < ActiveRecord::Migration[6.0]
  def change
    add_column :images, :thumb_url, :string
  end
end
