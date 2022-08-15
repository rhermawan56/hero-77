class HomeController < ApplicationController
    def index
        @cards = Card.all
        @title = 'Home'
    end
end
