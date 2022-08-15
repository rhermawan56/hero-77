class CardController < ApplicationController
    def create 
        @last = Card.order('created_at').last
        
        if @last == nil
            @id = 1
            @image = 1
        else
            @id = @last.id + 1
            @image = @last.image + 1
        end

        @save = Card.new(id: @id, name: params[:name], image: @image, born: params[:born], content: params[:content])

        if params[:image_file]
            image = params[:image_file]
            File.binwrite("public/user_images/#{@image}.png", image.read)
        end
        
        if @save.save
            flash[:notice] = "Terimakasih sudah menambah pengetahuan anda tentang #{@save.name}"
            redirect_to('/')
        else 
            flash[:notice] = "Kartu Gagal di Tambahkan"
            redirect_to('/')
        end
    end
end
