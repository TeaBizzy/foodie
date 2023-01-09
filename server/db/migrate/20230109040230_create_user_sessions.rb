class CreateUserSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :user_sessions do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :session, foreign_key: true
      t.timestamps
    end
  end
end
