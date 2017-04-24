/**
 * 
 */
package com.test.api.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.api.service.UserService;
import com.test.model.api.user.UserResponse;

/**
 * @author ocean
 *
 */
@RestController
@RequestMapping(value = "/api/user", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class UserResource {
	
	private final static Logger LOGGER = LoggerFactory.getLogger(UserResource.class);
	
	@Autowired
	private UserService userService;
	
	
	@GetMapping(path = "getAllUsers")
	public ResponseEntity<UserResponse> getAllUsers(){		
		UserResponse userResponse = userService.getAllUsers();
		
		if(userResponse != null && CollectionUtils.isEmpty(userResponse.getUserEntities())){
			return ResponseEntity.ok().body(userResponse = new UserResponse());
		}		
		LOGGER.debug("userEntities.size = " + (userResponse.getUserEntities().size()));
		return ResponseEntity.ok().body(userResponse);
	}
	
	
	@GetMapping(path = "getUserById/{id}")
	public ResponseEntity<UserResponse> getUserById(@PathVariable("id") Long id){
		UserResponse userResponse = userService.getUserById(id);
		
		LOGGER.debug("user.getMessage = " + (userResponse.getMessage()));
		return ResponseEntity.ok().body(userResponse);
	}
	
	@DeleteMapping(path = "delete/{id}")
	public ResponseEntity<UserResponse> delete(@PathVariable("id") Long id){
		UserResponse userResponse = userService.delete(id);		
		LOGGER.debug("user.getMessage = " + (userResponse.getMessage()));
		
		return ResponseEntity.ok().body(userResponse);
	}
	
	@PostMapping(path = "create")
	public ResponseEntity<UserResponse> create(@RequestBody String userJson){
		UserResponse userResponse = userService.create(userJson);				
		LOGGER.debug("user.getMessage = " + (userResponse.getMessage()));
		return ResponseEntity.ok().body(userResponse);
	}
	
	@PutMapping(path = "update")
	public ResponseEntity<UserResponse> update(@RequestBody String userJson){
		UserResponse userResponse = userService.update(userJson);		

		LOGGER.debug("user.getMessage = " + (userResponse.getMessage()));
		return ResponseEntity.ok().body(userResponse);
	}

}
