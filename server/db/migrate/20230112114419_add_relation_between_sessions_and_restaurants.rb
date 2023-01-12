class AddRelationBetweenSessionsAndRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_reference :restaurants, :session, foreign_key: true
  end
end
