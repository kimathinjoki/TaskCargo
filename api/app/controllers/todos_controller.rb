class TodosController < ApplicationController
    before_action :session_expired?
    rescue_from ArgumentError, with: :invalid_priority


    def create 

       todo = user.todos.create(todo_params)
       if todo.valid?
        app_response(status: :created, data: todo)
       else
        app_response(status: :unprocessable_entity, data: todo.errors, message: "failed")
       end
    end

    def invalid_priority 
        app_response(message: "invalid priority", data: {info: err.message}, status: :unprocessable_entity)
    end

    private 

    def todo_params 
        params.permit(:title, :description, :status, :priority) 
    end


end
