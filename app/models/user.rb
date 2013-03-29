class User < ActiveRecord::Base
  has_many :games
  has_many :moves, through: :games
end
