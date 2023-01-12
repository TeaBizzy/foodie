class AddStatusColumnToUserSessions < ActiveRecord::Migration[7.0]
  def change
    add_column :user_sessions, :status, :integer
  end
end
