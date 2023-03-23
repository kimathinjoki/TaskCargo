class ApplicationController < ActionController::API

    include ActionController::Cookies


    def app_response(message:'success', status: 200, data: nil)
        render json: { 
            message: message, 
            data: data}, status: status 
    end

    # store id in session

    def save_user(id)
        session[:uid] = id
        session[:expiry] = 6.hours.from_now
    end


    #  delete user id in session
    def remove_user

        session.delete(:uid)
        session[:expiry]= Time.now
    end


    # check for expiry of ourr session

    def session_expired? 

      
        session[:expiry] ||= Time.now
        time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
        
        unless time_diff > 0
            app_response(message: "failed", status: 401, data: {info: "Session expired. Please login again"})
        end
   
    end


    # def uid 
    #     session[:uid].to_i
    # end

    # 

    def user 
        User.find(session[:uid].to_i)
    end

end
