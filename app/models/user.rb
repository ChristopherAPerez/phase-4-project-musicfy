class User < ApplicationRecord
    has_secure_password

    has_many :songs
    has_many :albums, through: :songs

    validates :username, presence: true, uniqueness: true
end
