package ua.com.clothesairer;

/**
 * Created by val on 16.11.16.
 */

import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
