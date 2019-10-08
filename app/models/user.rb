class User < ApplicationRecord
  has_secure_password
  has_secure_token :session_token
  validates :email, uniqueness: true
  validates :email, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
end
