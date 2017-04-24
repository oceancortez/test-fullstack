/**
 * 
 */
package com.test.model.api.user;

import java.io.Serializable;
import java.util.List;

/**
 * @author ocean
 *
 */
public class UserResponse implements Serializable{
	

	private static final long serialVersionUID = -292219940071742890L;

	private UserEntity userEntity;
	
	private List<UserEntity> userEntities;
	
	private String message;
	
	public UserResponse(){
		
	}
	
	public UserResponse (String message) {
		this.message = message;
	}
	
	public UserResponse (UserEntity userEntity) {
		this.userEntity = userEntity;
	}
	
	public UserResponse (List<UserEntity> userEntities) {
		this.userEntities = userEntities;
	}

	/**
	 * @return the userEntity
	 */
	public UserEntity getUserEntity() {
		return userEntity;
	}

	/**
	 * @param userEntity the userEntity to set
	 */
	public void setUserEntity(UserEntity userEntity) {
		this.userEntity = userEntity;
	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "UserResponse [userEntity=" + userEntity + ", message=" + message + "]";
	}

	/**
	 * @return the userEntities
	 */
	public List<UserEntity> getUserEntities() {
		return userEntities;
	}

	/**
	 * @param userEntities the userEntities to set
	 */
	public void setUserEntities(List<UserEntity> userEntities) {
		this.userEntities = userEntities;
	}
	
	

}
