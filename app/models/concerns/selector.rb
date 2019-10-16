module Selector
  extend ActiveSupport::Concern
  include ActiveModel::Validations

  included do
    validates :name, presence: true, uniqueness: true
    has_many :artists
    has_one :sel_type, as: :selector, class_name: :ArtistSelector
  end
end
