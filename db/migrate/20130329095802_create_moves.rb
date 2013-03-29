class CreateMoves < ActiveRecord::Migration
  def change
    create_table :moves do |m|
      m.integer :x,:y
      m.references :user, :game
      m.timestamps
    end
  end
end
