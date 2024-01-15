# user/utils.py
def custom_jwt_payload_handler(user):
    return {
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            # Include other user attributes as needed
        }
    }
