package com.app.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.User;
import com.app.service.UserService;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private UserService userService;
	
	@GetMapping
	public String login() {
		return "/login";
	}
	
	@PostMapping
	public ResponseEntity<Object> loginUser(@RequestBody User user, HttpSession session){
		try {
			
			User newuser = userService.findUser(user);
			
			if(newuser==null) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Invalid email or password");
			}
			session.setAttribute("userId", newuser.getId());
			return ResponseEntity.status(HttpStatus.CREATED).body("User found");

		} catch (Exception e) {
			
		}
		return null;
		
	}
	
	
	
}
