package projectbackend.repository.decentralization;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import projectbackend.dto.decentralization.IUserEmailDto;
import projectbackend.model.decentralization.User;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, String> {
//    @Query(value = "select * from user where username like %:username% and is_delete = 0", nativeQuery = true)
//    Optional<User> findByUsername(@Param("username") String username);

    User findByUsername(String name);

    @Query(value = "SELECT username from  user where username = ?1", nativeQuery = true)
    String existsByUserName(String username);

    @Query(value = "SELECT username, email " +
            "from  employee where email =:email " +
            "union all " +
            "select  username, email " +
            "from  customer " +
            "where email =:email", nativeQuery = true)
    Optional<IUserEmailDto> findByEmail(String email);

    @Query(value = "SELECT username, email " +
            "from  employee where username =:username " +
            "union all " +
            "select  username, email " +
            "from  customer " +
            "where username =:username", nativeQuery = true)
    Optional<IUserEmailDto> findByUsernameDto(String username);


    @Modifying
    @Transactional
    @Query(value = "update user set password =:newPassword where username =:username", nativeQuery = true)
    void saveNewPassword(@Param("newPassword") String newPassword, @Param("username") String username);


}
