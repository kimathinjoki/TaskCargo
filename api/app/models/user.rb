class User < ApplicationRecord

    has_secure_password

    has_many :todos

    validates :username, {
        length:{minimum: 3, maximum: 10}, 
        uniqueness: true,
        presence: true
    }
    validates :email, {
        uniqueness: true,
        presence: true
    }


end
