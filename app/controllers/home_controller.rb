class HomeController < ApplicationController
    def index
        @cards = Card.all
        @title = 'Home'
        @count = Card.count
    end
end
