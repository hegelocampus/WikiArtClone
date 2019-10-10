module Selector
  extend ActiveSupport::Concern
  include ActiveModel::Validations

  included do
    validates :name, presence: true
    has_many :artists
  end
end
