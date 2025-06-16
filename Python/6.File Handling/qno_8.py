from datetime import datetime

def write_log_entry(log_file):
    try:
        with open(log_file, 'a') as file:
            while True:
                entry = input("Enter log message (type 'exit' to stop): ")
                if entry.lower() == 'exit':
                    break
                timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                file.write(f"[{timestamp}] {entry}\n")
        print(f"Log entries written to '{log_file}'.")
    except Exception as e:
        print(f"An error occurred: {e}")

log_filename = input("Enter the log filename: ")
write_log_entry(log_filename)
