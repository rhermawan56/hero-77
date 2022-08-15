class AddColumnToCard < ActiveRecord::Migration[7.0]
  def change
    add_column :cards, :name, :string
    add_column :cards, :image, :integer
    add_column :cards, :born, :date
    add_column :cards, :content, :string
  end
end
