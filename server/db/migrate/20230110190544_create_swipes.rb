class CreateSwipes < ActiveRecord::Migration[7.0]
  def change
    create_table :swipes do |t|
      t.belongs_to :restaurant, foreign_key: true
      t.boolean :is_approved, default: nil
      t.timestamps
    end
  end
end
