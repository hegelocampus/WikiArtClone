class Artist < ApplicationRecord
  belongs_to :nationality, optional: true
  belongs_to :school, optional: true
  belongs_to :field, optional: true
  belongs_to :art_movement
  has_one :image, as: :imageable
  has_many :artworks

  validates :name, presence: true
end
