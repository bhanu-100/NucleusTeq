def tower_of_hanoi(n, source, destination, auxiliary):
    
    if n == 1:
        print(f"Move disk 1 from {source} to {destination}")
        return
    tower_of_hanoi(n - 1, source, auxiliary, destination)
    print(f"Move disk {n} from {source} to {destination}")
    tower_of_hanoi(n - 1, auxiliary, destination, source)

if __name__ == "__main__":
    num_disks = 3
    tower_of_hanoi(num_disks, 'A', 'C', 'B')
