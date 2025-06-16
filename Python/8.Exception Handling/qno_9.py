import logging
from functools import wraps

# Configure logging
logging.basicConfig(
    filename='function_errors.log',
    level=logging.ERROR,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def log_exceptions(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            logging.error(f"Exception in {func.__name__}", exc_info=True)
            print(f"An error occurred in {func.__name__}: {e}")
    return wrapper
