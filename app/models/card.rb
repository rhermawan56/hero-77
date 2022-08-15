class Card < ApplicationRecord
    validates :name, :born, :content, {presence:true}
    validates :image, {presence:true, uniqueness:true}
end
