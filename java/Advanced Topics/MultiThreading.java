public class MultiThreading {

    public static void main(String[] args) {
        // Create instances of the tasks
        Task1 task1 = new Task1();
        Task2 task2 = new Task2();

        // Create threads for each task
        Thread thread1 = new Thread(task1);
        Thread thread2 = new Thread(task2);

        // Start the threads
        thread1.start();
        thread2.start();
    }
}

// Task1 class implementing Runnable interface
class Task1 implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task1 - Count: " + i);
            try {
                Thread.sleep(1000); // Sleep for 1 second
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// Task2 class implementing Runnable interface
class Task2 implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task2 - Count: " + i);
            try {
                Thread.sleep(1500); // Sleep for 1.5 seconds
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}