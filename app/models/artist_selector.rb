class ArtistSelector < ApplicationRecord
  belongs_to :selector, polymorphic: true
end
