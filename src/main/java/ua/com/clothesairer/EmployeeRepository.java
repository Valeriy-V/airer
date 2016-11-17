package ua.com.clothesairer;

import org.springframework.data.repository.CrudRepository;
import ua.com.clothesairer.Employee;


public interface EmployeeRepository extends CrudRepository<Employee, Long> {


}
