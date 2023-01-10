class CreateOperatingTimes < ActiveRecord::Migration[7.0]
  def change
    create_table :operating_times do |t|
      t.belongs_to :restaurant, foreign_key: true
      t.integer :day
      t.time :open
      t.time :close
      t.timestamps
    end
  end
end
