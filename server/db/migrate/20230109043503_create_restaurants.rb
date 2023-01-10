class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.float :lat
      t.float :lng
      t.string :website
      t.boolean :accepted, default: false
      t.float :rating
      t.string :img_url
      t.timestamps
    end
  end
end
