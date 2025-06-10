import time

def measure_time(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Execution time of '{func.__name__}': {end - start:.6f} seconds")
        return result
    return wrapper

@measure_time
def print_numbers():
    for i in range(1, 6):
        print(i)
        time.sleep(0.5)  # Simulate a delay of 0.5 seconds per number

print_numbers()
