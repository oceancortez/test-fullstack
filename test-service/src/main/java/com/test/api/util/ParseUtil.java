/**
 * 
 */
package com.test.api.util;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author ocean
 *
 */
public class ParseUtil {

	
	public static Object parseJsonToType(final String json, final Object object){
		final ObjectMapper mapper  = new ObjectMapper();		
		Object parse = null;

				try {
					parse = mapper.readValue(json, object.getClass());
				} catch (IOException e) {
					e.toString();
				}

		return parse;
	}
	
	public static String parseTypeToJson(Object object) {
		String parse = "";
		
		final ObjectMapper mapper = new ObjectMapper();
		try {
			parse = mapper.writeValueAsString(object);
		} catch (JsonProcessingException e1) {

			e1.getStackTrace().toString();
		}
		
		return parse;
	}
}
