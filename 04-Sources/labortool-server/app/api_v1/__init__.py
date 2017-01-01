from flask import Blueprint
from ..auth import auth_token

api = Blueprint('api', __name__)


@api.before_request
@auth_token.login_required
def before_request():
    pass


@api.after_request
def after_request(rv):
    return rv


from . import categories, categories_param_types, components, components_params,\
            distributors, footprints, locations, manufacturers, prefixes,\
            units, errors