class Artwork < ApplicationRecord
  belongs_to :style
  belongs_to :genre, optional: true
  belongs_to :artist
  has_one :image, as: :imageable

  validates :name, :style_id, presence: true
  validates :date, numericality: { only_integer: true, allow_nil: true }, allow_blank: true
end
