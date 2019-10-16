class ArtworkSelector < ApplicationRecord
  belongs_to :selector, polymorphic: true
end
