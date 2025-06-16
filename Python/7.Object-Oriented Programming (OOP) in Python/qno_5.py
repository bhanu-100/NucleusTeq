class Counter:
    # Class variable shared by all instances
    count = 0

    def __init__(self):
        Counter.count += 1
        self.instance_id = Counter.count

    def show(self):
        print(f"Instance ID: {self.instance_id}")
        print(f"Total Instances: {Counter.count}")

a = Counter()
b = Counter()
c = Counter()

a.show()
b.show()
c.show()
