/**
 * 
 */
package com.test.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import com.test.api.util.ParseUtil;
import com.test.model.api.user.UserEntity;
import com.test.model.api.user.UserResponse;
import com.test.model.api.user.repository.UserRepository;

/**
 * @author ocean
 *
 */
@Component
public class UserServiceImpl implements UserService{
	
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserResponse getAllUsers() {
		UserResponse userResponse = null;
		
		try {			
			List<UserEntity> userEntities = userRepository.findAll();
			
			if(!(CollectionUtils.isEmpty(userEntities))){
				userResponse = new UserResponse(userEntities);
			}else{
				userResponse = new UserResponse("Não foi possível carregar a lista de Usuários!");
			}
		} catch (Exception e) {
			return new UserResponse(e.getMessage());
		}
		
		return userResponse;
	}

	@Override
	public UserResponse getUserById(Long id) {
		UserResponse userResponse = null;
		try {			
			UserEntity userEntity = userRepository.findOne(id);
			if(userEntity != null){
				userResponse = new UserResponse(userEntity);
			}else{
				userResponse = new UserResponse("Usuário não cadastrado!");
			}			
		} catch (Exception e) {
			return new UserResponse(e.getMessage());
		}
		
		return userResponse;
	}

	@Override
	public UserResponse create(String userJson) {
		UserResponse userResponse = null;	
	
			try {
				UserEntity userEntity = (UserEntity) ParseUtil.parseJsonToType(userJson, new UserEntity());
				if(userEntity != null){
				userEntity = userRepository.saveAndFlush(userEntity);				
				userResponse = new UserResponse(userEntity);
				}else{
					userResponse = new UserResponse("Não foi possível criar o Usuario");
				}
				
			} catch (Exception e) {				
				if(e.getLocalizedMessage().contains("email")){
					return new UserResponse("Favor utilizar outro email, pois esse já está cadastado!");
				}
				return new UserResponse(e.getMessage());
			}
		
		return userResponse;
	}

	@Override
	public UserResponse delete(Long id) {
		UserResponse userResponse = null;
		
		UserEntity userEntity = userRepository.findOne(id);		
		try {
			userRepository.delete(userEntity);			
			userEntity = userRepository.findOne(id);
		    if(userEntity == null){
		    	userResponse = new UserResponse("O usuario com id " + id + "foi excluido com Sucesso!");
		    }else{
		    	userResponse = new UserResponse("Não foi possível Excluir o Usuario");
		    }
		} catch (Exception e) {
			return new UserResponse(e.getMessage());
		}	
		return userResponse;
	}

	@Override
	public UserResponse update(String userJson) {
		UserResponse userResponse = null;
	
			try {
				UserEntity userEntity = (UserEntity) ParseUtil.parseJsonToType(userJson, new UserEntity());
				if(userEntity != null){
					
				userEntity = userRepository.saveAndFlush(userEntity);	
				userResponse = new UserResponse(userEntity);
				}else{
					userResponse = new UserResponse("Não foi possível Atualizar o Usuario");
				}
			} catch (Exception e) {
				if(e.getLocalizedMessage().contains("email")){
					return new UserResponse("Favor utilizar outro email, pois esse já está cadastado!");
				}				
				return new UserResponse(e.getMessage());
			}
		
		return userResponse;
	}
	

}
