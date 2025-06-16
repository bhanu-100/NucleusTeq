import csv

def calculate_column_averages(csv_file):
    try:
        with open(csv_file, 'r') as file:
            reader = csv.reader(file)
            headers = next(reader)  # Read header row

            # Initialize sums and counts for each column
            num_columns = len(headers)
            sums = [0.0] * num_columns
            counts = [0] * num_columns

            for row in reader:
                for i in range(num_columns):
                    try:
                        value = float(row[i])
                        sums[i] += value
                        counts[i] += 1
                    except ValueError:
                        # Skip non-numeric entries
                        continue

            # Calculate averages
            averages = []
            for i in range(num_columns):
                avg = sums[i] / counts[i] if counts[i] > 0 else None
                averages.append(avg)

            # Print results
            print("Column Averages:")
            for header, avg in zip(headers, averages):
                if avg is not None:
                    print(f"{header}: {avg:.2f}")
                else:
                    print(f"{header}: N/A (non-numeric or empty column)")

    except FileNotFoundError:
        print(f"Error: File '{csv_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

file_name = input("Enter the CSV filename: ")
calculate_column_averages(file_name)
