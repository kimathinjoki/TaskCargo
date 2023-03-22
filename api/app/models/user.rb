class User < ApplicationRecord

    has_secure_password

    validates :username, {
        length:{minimum: 5, maximum: 10}, 
        uniqueness: true,
        presence: true
    }
    validates :email, {
        uniqueness: true,
        presence: true
    }


end
