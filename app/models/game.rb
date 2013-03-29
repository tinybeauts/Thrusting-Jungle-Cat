class Game < ActiveRecord::Base
  has_many :users, limit: 2
  has_many :moves
end
