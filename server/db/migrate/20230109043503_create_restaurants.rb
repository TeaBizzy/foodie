class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.boolean :accepted, default: false
      t.float :avg_rating
      t.string :hero_img_url
      t.timestamps
    end
  end
end
