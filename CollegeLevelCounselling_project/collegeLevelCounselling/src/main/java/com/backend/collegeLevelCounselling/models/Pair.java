package com.backend.collegeLevelCounselling.models;

public class Pair<K, V> {
    private K student;
    private V position;

    public Pair(K student, V position) {
        this.student = student;
        this.position = position;
    }

    public K getStudent() { return student; }
    public V getPosition() { return position; }

    @Override
    public String toString() {
        return "(" + student + ", " + position + ")";
    }
}

