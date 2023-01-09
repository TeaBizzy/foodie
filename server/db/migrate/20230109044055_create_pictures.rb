class CreatePictures < ActiveRecord::Migration[7.0]
  def change
    create_table :pictures do |t|
      t.belongs_to :restaurant, foreign_key: true
      t.string :img_url
      t.timestamps
    end
  end
end
