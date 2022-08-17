class HomeController < ApplicationController
    def index
        @title = 'Home'
    end
    def home
        @cards = Card.all
        @title = 'Home'
        @count = Card.count
    end
end
