class CreateExamples < ActiveRecord::Migration[7.0]
  def change
    create_table :examples do |t|
      t.string :name
      t.integer :price_cents
      t.boolean :is_rare
      t.timestamps
    end
  end
end
