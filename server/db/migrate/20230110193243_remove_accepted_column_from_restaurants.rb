class RemoveAcceptedColumnFromRestaurants < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :accepted
  end
end
