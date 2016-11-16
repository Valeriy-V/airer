package ua.com.clothesairer;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by val on 16.11.16.
 */
@Data
@Entity
public class Employee {
    private @Id @GeneratedValue Long id;
    private String name;
    private int age;
    private int year;

    private Employee() {}

    public Employee(String name, int age, int year) {
        this.name = name;
        this.age = age;
        this.year = year;
    }
}
