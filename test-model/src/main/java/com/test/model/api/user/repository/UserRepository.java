/**
 * 
 */
package com.test.model.api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.model.api.user.UserEntity;

/**
 * @author ocean
 *
 */
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{

}
