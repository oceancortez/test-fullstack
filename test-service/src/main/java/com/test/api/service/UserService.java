/**
 * 
 */
package com.test.api.service;

import com.test.model.api.user.UserResponse;

/**
 * @author ocean
 *
 */
public interface UserService {
	
	
	UserResponse getAllUsers();
	
	UserResponse getUserById(final Long id);

	UserResponse create(String userJson);
	
	UserResponse delete(final Long id);
	
	UserResponse update(String userJson);

}
