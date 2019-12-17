class Artwork < ApplicationRecord
  belongs_to :style
  belongs_to :genre, optional: true
  belongs_to :artist
  has_one :image, as: :imageable

  validates :name, presence: true
  #validates :date, allow_nil: true, allow_blank: true
end
