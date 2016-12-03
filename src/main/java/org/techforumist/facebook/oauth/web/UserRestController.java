package org.techforumist.facebook.oauth.web;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Rest controller for getting logged user details
 * 
 * @author Sarath Muraleedharan
 *
 */
@RestController
public class UserRestController {
	@RequestMapping("/user")
	public Principal sayHello(Principal principal) {
		return principal;
	}

}
