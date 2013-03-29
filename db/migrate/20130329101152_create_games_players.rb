class CreateGamesPlayers < ActiveRecord::Migration
  def change
    create_table :games_players do |g|
      g.references :game, :player
    end
  end
end
